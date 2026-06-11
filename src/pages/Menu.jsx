import menu from "../data/menu.js";
import Signatures from "../components/Signatures.jsx";
import RegularDrinks from "../components/RegularDrinks.jsx";

const Menu = () => {
  return (
    <div className="bg-stone-50 min-h-screen flex flex-col items-center py-20">
      {/* Header */}
      <h1 className="text-center text-4xl py-5 md:text-5xl font-light text-stone-800 font-serif italic">
        Menu
      </h1>
      <div className="max-w-7xl w-full px-6 space-y-16 md:space-y-24">
        <Signatures></Signatures>
        <RegularDrinks></RegularDrinks>
      </div>
    </div>
  );
};

export default Menu;
