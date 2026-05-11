import logo from "../assets/logo/logo.png";
import { Link } from "react-router";

const Statement = () => {
  return (
    <section className="py-24 bg-stone-50 flex flex-col items-center justify-center text-center px-10">
      {/* logo */}
      <div className="mb-8">
        <img src={logo} alt="t.êpresso logo" className="h-16 w-auto" />
      </div>

      {/* statement */}
      <h2 className="max-w-3xl text-xl md:text-2xl font-light text-stone-700 leading-loose font-serif italic">
        A refined buzz for a focused mind.
      </h2>
    </section>
  );
};

export default Statement;
