import { profileInfo } from "../utils/profileInfo"
import HeroSection from "./HeroSection"

const Home = () => {
  return (
    <>
      <HeroSection profileInfo={profileInfo.profileInfo} />
      <HeroSection  profileInfo={profileInfo.aboutInfo} />
    </>
  )
}

export default Home