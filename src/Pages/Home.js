import { Footer } from "../components/footer/Footer";
import { AboutTheCourse } from "../components/AboutTheCourse/AboutTheCourse";
import Header from "../components/Header/Header";
import { Investment } from "../components/Investment/Investment";
import { Modules } from "../components/Modules/Modules";
import TargetAudience from "../components/TargetAudience/TargetAudience";
const Home = () => {
  return (
    <div> 
      <Header />
     <TargetAudience />
     <Modules />
     <AboutTheCourse />
     <Investment />
     <Footer />
    </div>
  )
}

export default Home;