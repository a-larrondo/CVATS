import photo from "./photo.jpg";

export function Photo() {
  return (
    <div className="pt-6 content-center">
      <img src={photo} style={{ width: "150px" }} className="content-center" />
    </div>
  );
}
