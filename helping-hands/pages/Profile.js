
import PersonalInfo from "../components/PersonalInfo"
import Posts from "../components/Posts"
import CreatedCampiagns from "../components/CreatedCampiagns"
import JoinedCampaigns from "../components/JoinedCampaigns"
import UsersHomepage from "../components/UsersHomepage"



export default function Profile() {
  return(
      <>
    <br></br>
    {/* <Posts/> */}
    <UsersHomepage/>
    <br></br>
    <CreatedCampiagns/>
    <br></br>
    <JoinedCampaigns/>
    <PersonalInfo/>
    <br></br>
    </>)
 
}
