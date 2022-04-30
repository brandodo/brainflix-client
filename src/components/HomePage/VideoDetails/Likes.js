import likesIcon from "../../../assets/images/icons/likes.svg";

export default function Likes({ likes, id, updateLikes }) {
  return (
    <div className="details__likes">
      <img
        src={likesIcon}
        alt="likes-icon"
        className="details__likes-icon"
        onClick={() => updateLikes(id)}
      />
      <p className="details__likes-count">{Number(likes).toLocaleString()}</p>
    </div>
  );
}
