import shopFrontImg from "../assets/interior/Te-outer.jpg";

const JoinUs = () => {
  return (
    <section className="w-full flex flex-col bg-stone-100">
      <div className="py-20 flex flex-col md:flex-row justify-between px-10 md:px-20 lg:px-32 gap-12">
        {/* Hours section */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-light text-stone-800 uppercase tracking-widest">
            Visit Us
          </h3>
          <div className="space-y-2">
            <p className="text-stone-500 uppercase text-xs tracking-tighter">
              Open Daily
            </p>
            <p className="text-xl text-stone-700 font-light">
              07:00 AM — 10:00 PM
            </p>
          </div>
          <p className="text-stone-600 font-light leading-relaxed max-w-xs">
            Whether you’re looking for a quiet morning to work or a cozy evening
            with friends, our doors are open.
          </p>
        </div>

        {/* Location section */}
        <div className="flex-1 space-y-6 border-t md:border-t-0 md:border-l border-stone-300 pt-12 md:pt-0 md:pl-12">
          <h3 className="text-2xl font-light text-stone-800 uppercase tracking-widest">
            Location
          </h3>
          <div className="space-y-2">
            <p className="text-stone-500 uppercase text-xs tracking-tighter">
              Address
            </p>
            <p className="text-xl text-stone-700 font-light leading-snug">
              146 Quan Thanh, Ba Dinh <br />
              Hanoi, Vietnam
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/cWBEy8FHaZ8MB6qV7"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-stone-800 border-b border-stone-800 pb-1 text-sm hover:text-stone-500 hover:border-stone-500 transition-all"
          >
            Get Directions
          </a>
        </div>
      </div>
      {/* image section */}
      <div
        // Add bg-fixed
        className="relative h-[70vh] w-full flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${shopFrontImg})`,
          backgroundPosition: "50% 55%",
        }}
      >
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-center px-4">
          Come join us
        </h2>
      </div>
    </section>
  );
};

export default JoinUs;
