import Tag from "./Tag.js";

export function Tags(props) {

  let tags = props.tags;

  return <div className="tags">
    <Tag tagName={tags[0]} />
    <Tag tagName={tags[1]} />
    <Tag tagName={tags[2]} />
    <Tag tagName={tags[3]} />
  </div>;
}
