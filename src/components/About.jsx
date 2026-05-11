import manifestoImg from "../assets/interior/working_customr.jpg";
import { Link } from "react-router";
const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center h-auto md:h-[70vh] overflow-hidden bg-stone-50 py-20 md:py-4">
      <div className="flex-4 flex flex-col justify-center items-center px-10 md:px-20 lg:px-32 text-center space-y-8">
        {/* header */}
        <span className="text-stone-400 uppercase tracking-[0.3em] text-xs">
          The Story of t.ê
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-stone-800">
          High-standard craft, <br /> Deep-rooted connection.
        </h2>
        <Link
          to={"/manifesto"}
          className="inline-block bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 text-white text-xl font-medium py-4 px-10 rounded-full shadow-md"
        >
          Our Maninfesto
        </Link>
      </div>
      <div className="flex justify-center flex-3 h-full p-8">
        <img
          src={manifestoImg}
          className="h-full object-scale-down rounded-2xl"
          alt="signature drink on table"
        />
      </div>
    </section>
  );
};

export default About;
