import "./BannerHome.css";

import Logo from "../Logo/Logo";

function Banner({ img, title, mobile }) {
  return (
    <section className="bannerhome-container">
      <div className="bannerhome-relative">
        {mobile ? (
          <img src={img} alt="Tournée des plages" className="bannerhome-vod" />
        ) : (
          <video autoPlay loop muted className="bannerhome-vod">
            <source src="https://res.cloudinary.com/dnzgn4us2/video/upload/v1750676149/short-video2_iurl3i.mov" type="video/mp4" />
          </video>
        )}
        <div className="overlay"></div>
        <div className="bannerHome-logo-container">
          <Logo />
        </div>
        <h1 className="bannerhome-title">{title}</h1>
      </div>
    </section>
  );
}

export default Banner;
