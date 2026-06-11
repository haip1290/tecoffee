import menu from "../data/menu.js";

const RegularDrinks = () => {
  const regularItems = menu.filter((item) => item.category !== "signatures");

  // preferred order of categories used to rearraged with sort()
  const preferredOrder = [
    "espresso",
    "Tea & Juice",
    "Vietnamese coffee",
    "Coldbrew",
    "Match & Choco",
  ];

  const categories = [
    ...new Set(regularItems.map((item) => item.category)),
  ].sort((a, b) => {
    const indexA = preferredOrder.indexOf(a);
    const indexB = preferredOrder.indexOf(b);
    console.log("A: " + indexA);
    console.log("B: " + indexB);
    const finalA = indexA === -1 ? Infinity : indexA;
    const finalB = indexB === -1 ? Infinity : indexB;
    return finalA - finalB;
  });
  return (
    <div className="columns-1 md:columns-2 gap-x-10 [column-fill:balance]">
      {categories.map((category) => {
        const categoryItems = regularItems.filter(
          (item) => item.category === category,
        );
        return (
          <div key={category} className="break-inside-avoid mb-10 space-y-6">
            <h2 className="text-2xl font-serif font-light text-stone-700 tracking-wide border-b border-stone-200 pb-2 capitalize">
              {category}
            </h2>
            <div className="space-y-3">
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
