export function OpenLink(props){
  return (
    <a href={props.link} target="_blank">
      <img src="/src/assets/open.svg" alt="open" />
    </a>
  );
}
