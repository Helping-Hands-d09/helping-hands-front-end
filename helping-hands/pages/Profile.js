
import PersonalInfo from "../components/PersonalInfo"
import Posts from "../components/Posts"
import CreatedCampiagns from "../components/CreatedCampiagns"
import JoinedCampaigns from "../components/JoinedCampaigns"



export default function Profile() {
  return (
    <>
    <PersonalInfo/>
    <br></br>
    <Posts/>
    <br></br>
    <CreatedCampiagns/>
    <br></br>
    <JoinedCampaigns/>
    <br></br>
    </>
  )
}
