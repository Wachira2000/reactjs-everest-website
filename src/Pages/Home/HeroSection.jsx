import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Reach New Heights with</span>{" "}
            <br />
            Everest Technologies
          </h1>
          <p className="hero--section-description">
          From web and mobile apps to complex business challenges, we execute your vision with precision.
            <br /> Let us guide you to digital success.
          </p>
        </div>
        <div className="button">
        <Link to="Contact" className="btn btn-primary">Get In Touch
         </Link>
         </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
