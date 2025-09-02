function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-effect rounded-3xl p-8 card-hover">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Information
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                BOD - 21 July, 2000
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nationality - Chin/Myanmar
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nationality - Chin/Myanmar
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Race - Buddha
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Address - No.994,Pho Yazar (1)street,(43)ward,North Dagon,Ygn.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  NRC - 12 / DaGaMa(N) 050958
                </span>
                {/* <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  BCPS
                </span>
                <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                  MTM Certified
                </span> */}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/about.jpeg"
                  alt="Aye Mya Phyu Sin - Pharmacist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Excellence in Patient Care
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Recognized for outstanding patient counseling and medication
                adherence programs.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">
                  Research & Publications
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Published 15+ peer-reviewed articles in pharmaceutical journals.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
export default About;
