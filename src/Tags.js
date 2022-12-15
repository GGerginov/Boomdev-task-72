export function Tags() {

  let tags = ["boomdotdev", "task", "tags", "react"]

  return <div className="tags">
    <div className="tag">
      #{tags[0]}
    </div>
    <div className="tag">
      #{tags[1]}
    </div>
    <div className="tag">
      #{tags[2]}
    </div>
    <div className="tag">
      #{tags[3]}
    </div>
  </div>;
}
