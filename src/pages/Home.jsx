import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
