import logo from "../assets/logo/logo_white.png";
import bgHero from "../assets/ooobg.avif";

const Hero = () => {
  return (
    <div
      className="flex-1 min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div id="hook" className="ml-20 md:ml-60 relative z-10">
        <img src={logo} alt="brand name" className="h-32 md:h-48 mb-2" />

        <div className="pl-4 md:pl-8 space-y-4">
          <p>
            <strong className="text-4xl md:text-5xl text-white font-light tracking-tight">
              with Our Brew
            </strong>
          </p>
          {/* secondary text */}
          <p className="text-stone-200/90 text-sm md:text-base tracking-[0.2em] uppercase font-light max-w-md leading-relaxed">
            Good ingredients. Brewed with care. <br />
            Served with all our heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
