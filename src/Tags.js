import Tag from "./Tag";

export function Tags(props) {


  return <div className="tags">
    <Tag tagName = {props.tags[0]}/>
    <Tag tagName = {props.tags[1]}/>
    <Tag tagName = {props.tags[2]}/>
    <Tag tagName = {props.tags[3]}/>
  </div>;
}
