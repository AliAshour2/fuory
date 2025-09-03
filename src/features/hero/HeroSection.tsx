const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1114886356?autoplay=1&muted=1&loop=1&background=1"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="sweetpotato"
        ></iframe>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our World</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Fresh, healthy, and sustainable sweet potatoes.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
