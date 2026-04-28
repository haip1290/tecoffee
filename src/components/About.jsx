import manifestoImg from "../assets/interior/working_customr.jpg";
const About = () => {
  return (
    <section className="flex items-center max-h-screen md:h-[80vh] overflow-hidden bg-stone-50">
      <div className="flex-4 flex flex-col justify-center items-center px-10 md:px-20 lg:px-32 text-center space-y-8">
        {/* header */}
        <span className="text-stone-400 uppercase tracking-[0.3em] text-xs">
          Our Manifesto
        </span>
        {/* intro */}
        <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-tight">
          A quiet corner for
          <span className="italic font-serif text-sm">small talks</span> and
          <span className="font-serif text-6xl"> big ideas.</span>
        </h2>

        {/* manifesto */}
        <p className="text-lg text-stone-600 font-light leading-relaxed max-w-md">
          We source good ingredients and brew every cup with a
          <span className="text-stone-800 font-medium"> neighbor’s heart</span>,
          so you can find a peaceful moment to sit quietly or a space to connect
          with your friends.
        </p>

        {/* decoration */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="h-1 w-1 rounded-full bg-stone-300"></div>
          <div className="h-1 w-1 rounded-full bg-stone-300"></div>
          <div className="h-1 w-1 rounded-full bg-stone-300"></div>
        </div>
      </div>

      <div className="flex justify-center flex-3 h-full p-8">
        <img
          src={manifestoImg}
          className="max-h-full object-scale-down rounded-2xl"
          alt="signature drink on table"
          srcset=""
        />
      </div>
    </section>
  );
};

export default About;
