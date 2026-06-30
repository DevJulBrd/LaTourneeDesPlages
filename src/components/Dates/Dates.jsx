import "./Dates.css";

import { Link } from "react-router-dom";

function Dates({ id, date, beach }) {
  return (
    <Link to={`/agenda#tournament-${id}`} className="dates-link">
      <div className="dates-container">
        <p className="dates-date">{date}</p>
        <p className="dates-beach">{beach}</p>
      </div>
    </Link>
  );
}

export default Dates;
