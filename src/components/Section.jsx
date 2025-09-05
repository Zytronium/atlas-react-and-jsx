export function Section(props) {
  return (
    <div className="section">
      {/* NOTE: Demo version uses h2 here. Task instructions say h1. */}
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
