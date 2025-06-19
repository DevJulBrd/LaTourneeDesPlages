import "./Banner.css";

function Banner({ img, alt, title }) {
  return (
    <div className="banner-container">
      <div className="banner-relative">
        <img src={img} alt={alt} className="banner-img" />
        <div className="overlay"></div>
        <h1 className="banner-title">{title}</h1>
      </div>
    </div>
  );
}

export default Banner;
