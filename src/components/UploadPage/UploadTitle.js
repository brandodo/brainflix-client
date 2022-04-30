export default function UploadTitle({ videoTitle, handleInput }) {
  return (
    <>
      <label className="upload__publish-label">
        TITLE YOUR VIDEO
        <input
          name="videoTitle"
          type="text"
          className="upload__publish-field"
          placeholder="Add a title to your video"
          value={videoTitle}
          onChange={handleInput}
        ></input>
      </label>
    </>
  );
}
