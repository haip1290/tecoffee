import menu from "../data/menu.js";

const RegularDrinks = () => {
  const regularItems = menu.filter((item) => item.category !== "signatures");

  const categories = [...new Set(regularItems.map((item) => item.category))];
  return (
    <div className="space-y-16">
      {categories.map((category) => {
        const categoryItems = regularItems.filter(
          (item) => item.category === category,
        );
        return (
          <div key={category} className="space-y-10">
            <h2 className="text-2xl font-serif font-light text-stone-700 tracking-wide border-b border-stone-200 pb-2 capitalize">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {categoryItems.map((item) => (
                <div key={item.id} className="group flex flex-col space-y-1">
                  <h3 className="text-lg font-light text-stone-800 tracking-wide group-hover:text-stone-900 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RegularDrinks;
