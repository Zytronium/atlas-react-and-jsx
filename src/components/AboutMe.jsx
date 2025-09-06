import ProfilePicture from "../assets/me.webp";

export function AboutMe() {
  return (
    <div className="about-me">
      <img src={ProfilePicture} alt={"Daniel Stelljes"} />
      <p>
        Hi, I&apos;m Daniel. I&apos;m currently learning to code at Atlas
        School in Tulsa, Oklahoma. I&apos;m in my 5th and final trimester
        of Full-Stack Web Development at Atlas. This is my first project
        in React and I&apos;m already liking it a lot. I also like coding
        in Python and JavaScript, and I used to be pretty good with Kotlin
        and C. I enjoy working with backend code and complex logic,
        especially if I&apos;m making a game. Eventually, I want to start
        my own game development team where I can put my programming skills
        and creativity to use. Until then, I want to work at a company where
        I can combine my interests in aviation and programming. When I&apos;m
        not coding a personal project, I often go out and fly radio-controlled
        model airplanes for fun. I even have my commercial drone pilot licence.
      </p>
    </div>
  );
}
