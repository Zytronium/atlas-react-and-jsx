import linksData from '/src/assets/links.json';

export function Footer() {
  return (
    <footer>
      <ul>
        {linksData.map((item, i) => (
          <li key={i}><a href={item.link}>{item.label}</a></li>
        ))}
      </ul>
      © {new Date().getFullYear()} Atlas School
    </footer>
  );
}
