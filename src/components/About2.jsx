const About2 = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        

        {/* The Big Statement */}
        <h2 className="mt-6 text-3xl md:text-5xl font-light text-stone-800 leading-tight">
          We treat <span className="italic font-serif">milk chemistry</span> and
          <br />
          extraction like a science, so you can
          <br />
          enjoy it as an art.
        </h2>

        {/* The Body Text */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed text-lg max-w-2xl mx-auto">
          <p>
            At <strong>t.ê</strong>, our name represents the tingling sensation
            of a perfect brew. Located in the heart of Hanoi, we’ve built a
            sanctuary for the curious—a quiet, ambient space designed for deep
            focus and thoughtful conversation.
          </p>
          <p>
            Our approach is simple: meticulous home brews, a minimalist
            atmosphere, and a drop of innovation in every cup. No clutter, no
            noise—just exceptionally good coffee and the space to enjoy it.
          </p>
        </div>

        {/* Signature/Ending Detail */}
        <div className="mt-16">
          <div className="h-px w-20 bg-stone-200 mx-auto mb-8"></div>
          <p className="font-serif italic text-stone-500 text-xl">
            Brewed with passion, served with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About2;
