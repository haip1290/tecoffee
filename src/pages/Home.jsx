import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import JoinUs from "../components/JoinUs";
import Statement from "../components/Statement";
import ContactUs from "../components/ContactUs.jsx";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <About />
      <JoinUs />
      <Statement />
      <ContactUs />
    </main>
  );
};

export default Home;
