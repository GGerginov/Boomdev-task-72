export function Tags(props) {

  let tags = props.tags;

  return <div className="tags">
    <div className="tag">
      {"#"+tags[0]}
    </div>
    <div className="tag">
      {"#"+tags[1]}
    </div>
    <div className="tag">
      {"#"+tags[2]}
    </div>
    <div className="tag">
      {"#"+tags[3]}
    </div>
  </div>;
}
