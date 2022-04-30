export default function UploadThumbnail({ handleInput, image }) {
  return (
    <label className="upload__publish-label">
      VIDEO THUMBNAIL
      <div className="upload__publish-left">
        <input
          type="file"
          accept="image/*"
          className="upload__publish-file"
          onChange={handleInput}
          name="thumbnail"
        />
        <img
          className="upload__publish-thumbnail"
          src={image}
          alt="thumbnail-placeholder"
        />
      </div>
    </label>
  );
}
