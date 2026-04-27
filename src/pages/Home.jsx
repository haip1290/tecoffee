import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import JoinUs from "../components/JoinUs";
import Statement from "../components/Statement";
import Socials from "../components/Socials.jsx";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <About />
      <JoinUs />
      <Statement />
      <Socials />
    </div>
  );
};

export default Home;
