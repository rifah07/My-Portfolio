const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* LEFT:Hero-Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping Designs</h1>
              <h1>into real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
          </div>
        </header>
        {/* Right: 3D Model */}
      </div>
    </section>
  );
};

export default Hero;