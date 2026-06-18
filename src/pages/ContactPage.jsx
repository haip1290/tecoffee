import ZaloQR from "../assets/zaloQR.jpg";

const ContactPage = () => {
  return (
    <div className="p-6 md:p-20 lg:px-60 lg:py-20 bg-secondary">
      <h2 className="text-5xl text-dark font-light tracking-wide leading-tight">
        Contact Us <br />
        <span className="text-primary/60 text-2xl font-normal">
          We love to chat !
        </span>
      </h2>
      {/* Direct contact */}
      <div className="pb-12 text-lg text-gray-6xl">
        <span>Email: </span>
        <a
          href="mailto:te.teaandcoffee@gmail.com"
          className="text-dark font-medium hover:text-primary transition-colors"
        >
          te.teaandcoffee@gmail.com
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-start w-full">
        {/* google map */}
        <div className="space-y-10 w-full md:flex-1">
          <div className="space-y-4">
            <h2 className="text-3xl font-light tracking-wide leading-tight">
              Visit Us
            </h2>

            {/* Physical Details Block */}
            <div className="text-gray-6xl space-y-2 text-md md:text-lg">
              <p className="font-medium text-dark">
                123 Quan Thanh Street, Ba Dinh, Hanoi, Vietnam
              </p>
              <p>Open Daily: 7:30 AM – 10:00 PM</p>
            </div>
          </div>
          <h2 className="text-3xl font-light tracking-wide leading-tight">
            <a
              href="https://maps.app.goo.gl/QDGNX7Akayiywt67A"
              className="hover:text-primary transition-colors"
            >
              Google Map
            </a>
          </h2>
          <div className="w-full max-w-2xl aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.750544207499!2d105.83900037519834!3d21.042665087300975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab40ee13d9db%3A0x8a7d2a91decd5588!2st%C3%AA%20presso!5e0!3m2!1sen!2s!4v1781675546070!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Zalo QR */}
        <div className="space-y-10 w-full md:w-auto md:min-w-60">
          <h2 className="text-3xl font-light tracking-wide leading-tight">
            <a
              href="https://zalo.me/606774801821902742?fbclid=IwY2xjawRemDRleHRuA2FlbQIxMABicmlkETF4YmNteEdWRmpRTUZWckpFc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgf3zV4KVroYQDzb4Smjmyie3JLkRKzMj1Wk8VgHUcr4YsR7gaXykPVbrpw1_aem_FGoEEnD7CIeMN_-FRBzEkA"
              className="hover:text-primary transition-colors"
            >
              Zalo
            </a>
          </h2>
          <div className="flex flex-col items-start gap-3">
            <div className="p-3 bg-white rounded-2xl shadow-md border border-gray-100 inline-block">
              <img
                src={ZaloQR}
                alt="Zalo QR"
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-500 text-sm max-w-50">
              Scan QR code or click the header to connect with us via Zalo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
