function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="floating mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-purple-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-white p-1">
                <img
                  src="/hero.jpeg"
                  alt="Aye Mya Phyu Sin - Pharmacist"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4">
            Mrs. Aye Mya Phyu Sin
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Clinical Pharmacist 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/amps.pdf"
              download
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all text-center"
            >
              Download CV
            </a>
            {/* <button className="border-2 border-pink-500 text-pink-600 px-8 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors">
              View Portfolio
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
