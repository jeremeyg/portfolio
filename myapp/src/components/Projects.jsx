import downRight from "/down-right-svg.svg";
import imagePortone from "/portfolio1.png";
import imageEcomme from "/shop.jpg";
import imageTech from "/techshop.png";
const Projects = () => {
  return (
    <div>
      <h1 className="">Projects</h1>

      <div className="card lg:card-side bg-transparent shadow-xl text-base-200 mb-5">
        <a href="https://jeremeyg.github.io/webportfolio/">
          <figure>
            <img src={imageEcomme} alt="Album" target="_blank" />
          </figure>
        </a>
        <div className="card-body">
          <h2 className="card-title">eCommerce Website</h2>
          <p>
            Created an eCommerce API with the use of Javascript, Node.js,
            Express.js, and MongoDB
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <img src={downRight} className="w-6 h-6"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-transparent shadow-xl text-base-200 mb-5">
        <figure>
          <img src={imageTech} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">eCommerce Website</h2>
          <p>
            Developed a React-based eCommerce with API integration and
            responsive design, utilizing modern JavaScript techniques and DOM
            manipulation
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <img src={downRight} className="w-6 h-6"></img>
            </button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-transparent shadow-xl text-base-200 mb-5">
        <a href="https://jeremeyg.github.io/webportfolio/">
          <figure>
            <img src={imagePortone} alt="Album" target="_blank" />
          </figure>
        </a>
        <div className="card-body">
          <h2 className="card-title">Personal Portfolio</h2>
          <p>
            Designed and developed a static responsive website using HTML5,
            CSS3, Bootstrap, and Git for version control, hosted on GitHub
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              href="https://jeremeyg.github.io/webportfolio/"
            >
              <img src={downRight} className="w-6 h-6"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
