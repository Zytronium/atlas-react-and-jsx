import { Header } from "./components/Header.jsx";
import { Section } from "./components/Section.jsx";
import { HelpfulResource } from "./components/HelpfulResource.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        React is not a chair. You can&apos;t sit on it, recline on it,
        or fill empty space in your mildly aesthetically lacking home with
        it, and you almost certainly can&apos;t purchase it at any furniture
        or home improvement stores. React doesn&apos;t have any cushioning,
        back support, or physical matter, so if you try to sit on it, you
        will almost certainly fall over and make a fool of yourself in front
        of your very confused family. Even your dog will react in confusion.
        <br/><br/>
        Rather than being used for sitting, React is a reactive tool primarily
        used for front-end web development. It is a library for building reusable
        UI components. It&apos;s often paired with JSX, a JavaScript syntax
        extension that makes embedding HTML and React components via JS easier
        with cleaner and simpler syntax. While React is not considered a
        framework it is often used in frameworks like Next.js.
      </Section>

      <Section title="Benefits of react">
        <ul>
          <li>React is better than a chair (and it&apos;s free!)</li>
          <li>React is reactive (the DOM reacts to changes instantly in dev environment)</li>
          <li>Cleaner and easier UI development (with the help of JSX)</li>
          <li>Makes UI code reusable through components</li>
          <li>Widely supported</li>
          <li>Supports a large and active ecosystem of third-party libraries to simplify front-end development</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource label="YouTube: React in 100 Seconds" link="https://www.youtube.com/watch?v=Tn6-PIqc4UM"/>
        <HelpfulResource label="in{struct} blog: Hello React" link="https://atlas-jswank.github.io/blog/hello-react/"/>
        <HelpfulResource label="in{struct} blog: What is JSX?" link="https://atlas-jswank.github.io/blog/jsx/"/>
      </Section>
    </div>
  );
}

export default App;
