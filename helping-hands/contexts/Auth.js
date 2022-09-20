import { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import cookie from 'react-cookies'

const createUserUrl = "https://helping-hands-api.herokuapp.com/api/v1/users/register/";
const loginURL = "https://helping-hands-api.herokuapp.com/api/token/"
const refreshUrl = "https://helping-hands-api.herokuapp.com/api/token/refresh/"

const AuthContext = createContext(undefined);

export function useAuth() {
    const Auth = useContext(AuthContext);
    if (!Auth) throw new Error("Check your AuthProvider in you _app.js, maybe")
    return Auth;
}

export function AuthProvider({ children }) {

    let lsData = null
    if (typeof window !== 'undefined') {
        // lsData = localStorage.getItem("AuthTokens");
        lsData = cookie.load('AuthTokens')
    }

    const [tokens, setTokens] = useState(() =>
    // lsData ? JSON.parse(lsData.access) : null
    {
        console.log(cookie.load('AuthTokens'));
        return cookie.load('AuthTokens') ? cookie.load('AuthTokens') : null
    }
    );
    const [userInfo, setUserInfo] = useState(() => {
        return lsData ? jwt_decode(lsData.access).user_id : null;
    });

    async function signup(userInput) {
        try {

            const res = await axios.post(createUserUrl, userInput);
            if (res.status === 400) {
                console.log(`${res.status} bad request`)
            }
            if (res.status === 201 || res.status === 200) {
                login(userInput.email, userInput.password);
            }
        }
        catch (error) {
            console.log(` Error Signing in: ${error}`)
        }

    }

    async function login(email, password) {
        try {
            const res = await axios.post(loginURL, { email, password });
            if (res.status === 200) {
                setTokens(res.data); // access + refresh
                setUserInfo(jwt_decode(res.data.access)); // user_id 
                // localStorage.setItem("AuthTokens", JSON.stringify(res.data))
                cookie.save('AuthTokens', res.data)
                console.log(res.data.access);
                return true
            }
        }
        catch (error) {
            console.log(`Error Logging in: ${error}`)
        }
    }

    async function refreshToken() {
        const body = {
            refresh: tokens.refresh
        }
        const res = await axios.post(refreshUrl, body);
        if (res.status === 200) {
            const newTokens = {
                access: res.data.access,
                refresh: tokens.refresh
            }
            console.log("refresh token res", res.data); // access
            console.log(55555555555, newTokens);
            setTokens(newTokens);
            // setUserInfo(jwt_decode(newTokens.access));
            // localStorage.setItem("AuthTokens", JSON.stringify(newTokens));
            cookie.save('AuthTokens', res.data, { path: '/' })
        } else {
            logout();
        }
    }

    function isAuth() {
        try {
            // console.log(4444444, tokens.access, tokens.refresh)
            if (tokens.access && tokens.refresh) {
                const access = jwt_decode(tokens?.access);
                const refresh = jwt_decode(tokens?.refresh);
                const now = Math.ceil(Date.now() / 1000);
                console.log(access?.user_id);
                setUserInfo(access?.user_id);
                if (access.exp > now) {
                    console.log("Access token hasn't expired")
                    return true;
                }
                if (access?.exp < now && refresh.exp > now) {
                    // refreshToken();
                    console.log("Need to refresh token");
                    return false;
                }
                return false;
            }
        } catch (error) {
            console.log(`Error in authenticating the user${error}`);
            return false;
        }
    }

    function logout() {
        setTokens(null);
        setUserInfo(null);
        // localStorage.removeItem("AuthTokens")
        cookie.remove('AuthTokens', { path: '/' })
    }

    const globalState = {
        tokens,
        signup,
        login,
        logout,
        refreshToken,
        isAuth,
        userInfo,
    }
    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}