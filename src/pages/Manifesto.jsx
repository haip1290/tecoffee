import section2Img from "../assets/backroom.jpg";
import section1Img from "../assets/coffeeMachine.jpg";
import bgImg from "../assets/interior/counter1.png";
const Manifesto = () => {
  return (
    <div className="w-full bg-linear-to-b from-leaf via-secondary to-primary">
      <div
        className="h-[70vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="space-y-16 p-6 md:p-20 lg:px-120">
        <section className="">
          <div>
            <h2 className="text-6xl flex items-end pb-20 text-primary tracking-wide font-light">
              The Story of t.ê
            </h2>
            <p className="tracking-wide font-light">
              Born in the heart of Vietnam, a land world-renowned for its lush
              highlands and ancient harvesting traditions, tê was founded to
              honor the dual legacy of the leaf and the bean. Our name is a
              tribute to this balance. It is the bridge where Tea meets Coffee,
              and where the soul of "Trà" finds the spirit of "Cà Phê". In
              Vietnamese, tê evokes a sense of tingling wonder, the exact
              feeling of that first, high-quality sip that awakens the senses.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h3>The Craft</h3>
            <p className="tracking-wide font-light">
              We cater to the discerning palate. Whether you seek the bold,
              complex notes of a masterfully roasted bean, the delicate richness
              of a premium tea, or the vibrant freshness of handpicked fruits
              blended into our drinks, we source only the finest harvests. At
              tê, the service is as thoughtful and welcoming as the drink
              itself, and our baristas don’t just serve, they care for every
              detail to ensure you feel completely at home.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={section1Img}
              alt=""
              className="w-full h-auto max-h-[450px] object-cover rounded-4xl"
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <img
              src={section2Img}
              alt=""
              className="w-full h-auto max-h-[450px] object-cover rounded-4xl"
            />
          </div>
          <div className="flex-1">
            <h3>The Space</h3>
            <p className="tracking-wide font-light">
              We designed tê to be a sanctuary for every kind of rhythm: The
              Storytellers: A warm gathering place for those who live for deep
              conversation and shared ideas. The Solitary: A quiet, rhythmic
              retreat for readers, thinkers, and creators looking for the focus
              that only a "perfect hum" can provide. From the vibrant hills of
              our homeland to the quiet comfort of your cup, we bring you a
              space that is both energizing and calm.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Manifesto;
