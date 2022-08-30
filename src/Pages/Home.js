import { About } from "../components/About/About";
import { AboutTheCourse } from "../components/AboutTheCourse/AboutTheCourse";
import Header from "../components/Header/Header";
import { Modules } from "../components/Modules/Modules";
import TargetAudience from "../components/TargetAudience/TargetAudience";
import styles from './Home.module.css';
const Home = () => {
  return (
    <div> 
      <Header />
     <TargetAudience />
     <Modules />
     <AboutTheCourse />
     <About />
    </div>
  )
}

export default Home;