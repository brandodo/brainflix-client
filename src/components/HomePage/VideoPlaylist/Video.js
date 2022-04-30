import { Link } from "react-router-dom";

export default function Video({ id, image, title, channel, serverUrl }) {
  return (
    <Link to={"/video/" + id} className="playlist__video-link">
      <div id={id} className="playlist__video-container">
        <img className="playlist__video-left" src={`${serverUrl}/${image}`} alt="video-icon" />
        <div className="playlist__video-right">
          <h3 className="playlist__video-header">
            {title.length > 40
              ? `${title.substring(0, title.lastIndexOf(" "))}...`
              : title}
          </h3>
          <h3 className="playlist__video-header-tab-desk">{title}</h3>
          <p className="playlist__video-channel">{channel}</p>
        </div>
      </div>
    </Link>
  );
}
