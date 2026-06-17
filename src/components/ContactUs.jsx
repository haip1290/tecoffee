import { Link } from "react-router";
import contactUsImg from "../assets/TeWithCustomers.jpg";
const ContactUs = () => {
  return (
    <section
      className="flex flex-col md:flex-row py-16 px-16 h-auto md:h-[70vh]"
      id="contact-cta"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <h2 className="text:4xl md:text-6xl tracking-tight font-light">
          We love to chat!
        </h2>
        <Link
          to={"contact"}
          className="inline-block bg-primary hover:bg-[#7a4236] transition-all duration-300 transform hover:scale-105 text-white text-xl font-medium py-4 px-10 rounded-full shadow-md"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex-1 h-[40vh] md:h-full">
        <img
          src={contactUsImg}
          alt="Te employees with customers"
          className="w-full h-full object-cover rounded-4xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default ContactUs;
