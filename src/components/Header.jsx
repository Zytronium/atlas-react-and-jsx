import { Greeting } from "./Greeting.jsx";
import { SocialLinks } from "./SocialLinks.jsx";

export function Header() {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
}
