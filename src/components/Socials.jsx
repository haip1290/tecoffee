const Socials = () => {
  return (
    <section className="py-24 bg-[#995444] flex flex-col items-center justify-center">
      <span className="text-white/60 uppercase tracking-[0.4em] text-[10px] mb-10">
        Follow our story
      </span>

      <div className="flex gap-16 md:gap-24">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/t.e_presso/"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-4"
        >
          <div className="p-5 rounded-full border border-white/20 group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 ease-out">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80 group-hover:opacity-100"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
          <span className="text-[10px] text-white/70 font-light tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            Instagram
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/teteaandcoffee"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-4"
        >
          <div className="p-5 rounded-full border border-white/20 group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 ease-out">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80 group-hover:opacity-100"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <span className="text-[10px] text-white/70 font-light tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            Facebook
          </span>
        </a>
      </div>
    </section>
  );
};

export default Socials;
