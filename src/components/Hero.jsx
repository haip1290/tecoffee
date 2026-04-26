import logo from "../assets/logo/logo_white.png";
import bgHero from "../assets/ooobg.avif";

const Hero = () => {
  return (
    <div
      className="flex-1 min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div id="hook" className="ml-60">
        <img src={logo} alt="brand name" className="h-48" />
        <p className="pl-8">
          <strong className="text-4xl text-white">with Our Brew</strong>
        </p>
      </div>
    </div>
  );
};

export default Hero;
