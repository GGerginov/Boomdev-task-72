import Tag from "./Tag";

export function Tags(props) {


  return <div className="tags">
    <p className='tag'>#{props.tags[0]}</p>
    <p className='tag'>#{props.tags[1]}</p>
    <p className='tag'>#{props.tags[2]}</p>
    <p className='tag'>#{props.tags[3]}</p>
    {/*<Tag tagName = {props.tags[0]}/>*/}
    {/*<Tag tagName = {props.tags[1]}/>*/}
    {/*<Tag tagName = {props.tags[2]}/>*/}
    {/*<Tag tagName = {props.tags[3]}/>*/}
  </div>;
}
