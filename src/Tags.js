export function Tags() {

  let tags = ["boomdotdev", "task", "tags", "react"]

  return <div className="tags">
    <a href={"#"+tags[0]} className="tag">
      {tags[0]}
    </a>
    <a href={"#"+tags[1]} className="tag">
      {tags[1]}
    </a>
    <a href={"#"+tags[2]} className="tag">
      {tags[2]}
    </a>
    <a href={"#"+tags[3]} className="tag">
      {tags[3]}
    </a>
  </div>;
}
