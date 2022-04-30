export default function UploadDescription({ videoDescription, handleInput }) {
  return (
    <label className="upload__publish-label">
      ADD A VIDEO DESCRIPTION
      <textarea
        name="videoDescription"
        className="upload__publish-field"
        rows="4"
        placeholder="Add a description to your video"
        value={videoDescription}
        onChange={handleInput}
      ></textarea>
    </label>
  );
}
