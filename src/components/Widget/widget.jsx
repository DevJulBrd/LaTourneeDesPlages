import "./widget.css"

import { useEffect } from "react";

function Widget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.neoscore.fr/scripts/neoscore-list.js";
    script.async = true;
    script.onload = () => {
      console.log("Chargement réussi");
    };
    script.onerror = () => {
      console.error("Echec");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="neoscore-widget-container"
      dangerouslySetInnerHTML={{
        __html: `<neoscore-widget widgetidentifier="ekdj763DIudci7DFsxk938EYRTGFHcvueD8ZHCi"></neoscore-widget>`,
      }}
    />
  );
}

export default Widget;