export default function Tiles(props) {
  return (
    <>
      <span className="tile-container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </span>
    </>
  );
}
