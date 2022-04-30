import Title from "../../Title/Title";
import About from "./About";
import Description from "./Description";
import Divider from "../../Divider/Divider";
import "./VideoDetails.scss";

export default function VideoDetails({ data, updateLikes }) {
  const { title, channel, views, likes, timestamp, description, id } = data;

  return (
    <section className="details">
      <Title title={title} className="details__title title" />
      <Divider />
      <About
        channel={channel}
        views={views}
        likes={likes}
        timestamp={timestamp}
        id={id}
        updateLikes={updateLikes}
      />
      <Divider />
      <Description text={description} />
    </section>
  );
}
