import logo from "../assets/logo/logo_white.png";
import bgHero from "../assets/ooobg.avif";

const Hero = () => {
  return (
    <section
      className="flex-1 min-h-[85vh] bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div
        id="hook"
        className="flex-1 ml-20 md:ml-60 flex flex-col justify-between"
      >
        <div id="hook-body" className="flex-1 flex items-center">
          <div id="logo-container">
            <img src={logo} alt="brand name" className="h-32 md:h-48 mb-2" />
          </div>
          <div id="hook-statement" className="pl-4 md:pl-8">
            {/* secondary text - statement of the business */}
            <p className="text-2xl text-stone-200 tracking-widest max-w-md">
              Crafted for the senses.
              <br />
              Brewed for the soul.
            </p>
          </div>
        </div>
        {/* ending text / products description */}
        <div
          id="hook-ending"
          className="flex gap-5 mb-12 text-stone-200 text-sm tracking-widest"
        >
          <p className="max-w-48 border-r border-white/50">
            Poured by Passionate Hands
          </p>
          <p className="max-w-48 border-r border-white/50">
            Crafted with Premium Leaves and Beans
          </p>
          <p className="max-w-48">Real and Fresh Ingredients.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
