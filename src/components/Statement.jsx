import logo from "../assets/logo/logo.png";

const Statement = () => {
  return (
    <section className="py-24 bg-stone-50 flex flex-col items-center justify-center text-center px-10">
      {/* logo */}
      <div className="mb-8">
        <img
          src={logo}
          alt="t.ê_presso logo"
          className="h-16 w-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* statement */}
      <h2 className="max-w-3xl text-xl md:text-2xl font-light text-stone-700 leading-loose font-serif italic">
        "Good ingredients, honest brewing, and a place for things to slow down.
      </h2>
    </section>
  );
};

export default Statement;
