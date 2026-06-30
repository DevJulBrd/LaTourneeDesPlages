import "./AppLink.css";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.78M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3.18 23.76c.3.16.64.2.96.12l.1-.04 11.35-6.56-2.47-2.47-9.94 8.95zm-1.01-20.3A1.5 1.5 0 0 0 2 4.5v15a1.5 1.5 0 0 0 .17.7l.07.1 8.43-8.43-8.5-8.41zm19.1 8.68L18.96 10l-2.74 2.74 2.74 2.74 2.33-1.35c.66-.38.66-1.38-.02-1.99zM4.14.24 15.5 6.8l-2.47 2.47L3.2.4l.04-.04a1.1 1.1 0 0 1 .9-.12z" />
  </svg>
);

const DownloadButton = ({ href, icon, label, store }) => (
  <a
    className="app-dl-btn"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <div className="app-dl-btn-text">
      <div className="app-dl-btn-label">{label}</div>
      <div className="app-dl-btn-store">{store}</div>
    </div>
  </a>
);

function AppLink() {
    return (
        <div className="app-dl-root">
            <h2 className="app-dl-heading">Inscris-toi via l'application</h2>
            <p className="app-dl-sub">Télécharge Neoscore pour t'inscrire au tournoi</p>

            <div className="app-dl-buttons">
                <DownloadButton
                href="https://apps.apple.com/fr/app/neoscore/id6747252671"
                icon={<AppleIcon />}
                label="Disponible sur"
                store="App Store"
                />
                <DownloadButton
                href="https://play.google.com/store/apps/details?id=com.digimeo.neoscore&utm_source=emea_Med"
                icon={<AndroidIcon />}
                label="Disponible sur"
                store="Google Play"
                />
            </div>

            <div className="app-dl-badge">
                <span className="app-dl-badge-dot" aria-hidden="true" />
                Inscription sécurisée via Neoscore
            </div>
        </div>
    )
}

export default AppLink;