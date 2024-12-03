// import lightBg from "notwospak.gif";

const Hero = () => {
  return (
    <div
      className="bg-transparent hero min-h-[630px] w-100% bg-opacity-60 "
      style={{
        backgroundImage: "url('/notwospak.gif')", // Public folder path
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "repeat", // Prevents image repetition,
        opacity: 0.6,
      }}

      //
      //hero-overlay
    >
      <div className=""></div>
      <div className="hero-content text-base-200 text-left">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there , 👋🏽</h1>
          <p className="mb-5">
            with a strong educational background and hands-on experience in
            creating dynamic and responsive web applications. My technical
            toolkit includes proficiency in HTML, CSS, JavaScript, and expertise
            in popular frameworks such as React and Node.js.
          </p>
          <p className="mb-5">
            A web developer from the PH based in Cebu. I love building
            user-friendly and I love exploring and creating and coding websites
            👩🏻‍💻.My passion for technology and its transformative potential has
            led me to pursue a career shift into software development. I'm a
            lifelong learner 🎓 and a thing for coffee ☕ and sweets.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              window.scrollTo({
                top: 900, // Scroll position in pixels
                behavior: "smooth", // Smooth scroll
              });
            }}
          >
            Scroll Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
