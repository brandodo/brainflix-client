import Video from "./Video";

export default function VideoList({ data, serverUrl }) {
  let videos = data.map((video) => {
    return (
      <Video
        id={video.id}
        key={video.id}
        image={video.image}
        title={video.title}
        channel={video.channel}
        serverUrl={serverUrl}
      />
    );
  });

  return <div className="playlist__video-list">{videos}</div>;
}
