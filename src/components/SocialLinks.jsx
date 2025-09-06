import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/daniel-stelljes" target="_blank">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/Zytronium/atlas-react-and-jsx" target="_blank">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
}
