import "./Dates.css";

function Dates({ date, beach }) {
  return (
    <div className="dates-container">
      <p className="dates-beach">{beach}</p>
      <p className="dates-dat">...................</p>
      <p className="dates-date">{date}</p>
    </div>
  );
}

export default Dates;
