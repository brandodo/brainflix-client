import Moment from "react-moment";
import Likes from "./Likes";
import Views from "./Views";

export default function About({
  channel,
  timestamp,
  views,
  likes,
  id,
  updateLikes,
}) {
  return (
    <div className="details__container">
      <div className="details__left">
        <p className="details__author">{"By " + channel}</p>
        <Moment className="details__timestamp" fromNow unix>
          {timestamp / 1000}
        </Moment>
      </div>
      <div className="details__right">
        <Views views={views} />
        <Likes likes={likes} id={id} updateLikes={updateLikes} />
      </div>
    </div>
  );
}
