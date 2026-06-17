import menu from "../data/menu.js";

const Signatures = () => {
  const signatures = menu.filter((item) => item.category === "signatures");
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-display font-light text-dark mb-8 md:mb-12 tracking-wide">
        Signatures
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {signatures.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col space-y-4 p-6 rounded-3xl hover:shadow-xl transition-shadow duration-500"
          >
            {/* image of item */}

            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/20">
              <img
                src={item.image}
                alt={item.name}
                width={400}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
            </div>
            {/* info of item */}
            <div className="flex flex-col space-y-2 px-1 pb-2">
              <h3 className="text-xl font-light text-dark tracking-wide group-hover:text-accent transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-dark/70 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signatures;
