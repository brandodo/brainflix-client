import viewsIcon from "../../../assets/images/icons/views.svg";

export default function Views({ views }) {
  return (
    <div className="details__views">
      <img src={viewsIcon} alt="views-icon" className="details__views-icon" />
      <p className="details__views-count">{views}</p>
    </div>
  );
}
