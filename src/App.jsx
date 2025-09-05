import { Header } from "./components/Header.jsx";
import { Section } from "./components/Section.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        {/* Todo */}
        React is not a chair. You can&apos;t sit on it, recline on it,
        or fill empty space in your mildly aesthetically lacking home,
        and you almost certainly can&apos;t purchase it at any furniture
        or home improvement stores. React doesn&apos;t have any cushioning,
        back support, or physical matter, so if you try to sit on it, you
        will almost certainly fall over and make a fool of yourself in front
        of your very confused family. Even your dog will react in confusion.
      </Section>

      <Section title="Benefits of react">
        <ul>
          {/* Todo */}
          <li>React is better than a chair</li>
          <li>React is reactive</li>
          <li>React is called React (it&apos;s a very attractive name)</li>
          <li>I like turtles</li>
          <li>React likes turtles too</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
