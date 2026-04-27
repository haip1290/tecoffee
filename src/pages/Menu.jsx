import menu from "../data/menu.js";

const Menu = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 font-serif italic">
            Menu
          </h1>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {menu.map((drink) => (
            <div key={drink.id} className="group flex flex-col space-y-4">
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-light text-stone-800 tracking-wide">
                  {drink.name}
                </h3>
                <span className="text-stone-400 font-light text-sm">
                  {drink.price}
                </span>
              </div>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                {drink.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
