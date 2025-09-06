import openIcon from "../assets/open.svg";

export function OpenLink(props){
  return (
    <a href={props.link} target="_blank">
      <img src={openIcon} alt="open" />
    </a>
  );
}
