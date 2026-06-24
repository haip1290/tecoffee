const JoinUs = () => {
  return (
    <section
      className="flex flex-col h-[70vh] md:flex-row justify-between bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://snrslqjvofysjhreteuw.supabase.co/storage/v1/object/public/tepresso/te_front.jpg')`,
        backgroundPosition: "50% 50%",
      }}
    >
      {/* Hours section */}
      <div className="flex flex-col justify-center p-10 flex-1 space-y-6 bg-white-100 backdrop-blur-md">
        <h3 className="text-2xl text-white font-light uppercase tracking-widest">
          Visit Us
        </h3>
        <div className="space-y-2">
          <p className="uppercase text-xs text-white/80 font-medium tracking-tighter">
            Open Daily
          </p>
          <p className="text-xl font-light text-white">07:00 AM — 10:00 PM</p>
        </div>
        <p className="font-light leading-relaxed max-w-xs text-stone-100">
          Whether you’re looking for a quiet morning to work or a cozy evening
          with friends, our doors are open.
        </p>
      </div>

      {/* image section */}
      <div className="flex-3">
        <span className="absolute bottom-4 right-4 text-white/40 text-[10px] tracking-widest">
          © t.ê_presso
        </span>
      </div>

      {/* Location section */}
      <div className="flex-1 flex flex-col justify-center p-10 space-y-6 bg-white/10 backdrop-blur-md">
        <h3 className="text-2xl font-light uppercase tracking-widest text-white">
          Location
        </h3>
        <div className="space-y-2">
          <p className="uppercase text-xs tracking-tighter text-white/80 font-medium">
            Address
          </p>
          <p className="text-xl font-light leading-snug text-white">
            146 Quan Thanh, Ba Dinh <br />
            Hanoi, Vietnam
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/cWBEy8FHaZ8MB6qV7"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-fit text-white border-b border-white pb-1 text-sm hover:text-stone-300 hover:border-stone-300 transition-all"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default JoinUs;
