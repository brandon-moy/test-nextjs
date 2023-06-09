import Pic from "./pic";

export default function AboutMe() {
  return (
    <div className="flex flex-wrap w-full sm:h-full lg:h-screen bg-main">
      <Pic />
      <div
        data-cy="about-text-container"
        id="text-container"
        className="flex flex-col justify-center pl-12 sm:basis-full lg:basis-3/4"
      >
        <p data-cy="about-intro" className="text-white">
          Hi 👋 I'm Brandon, a Software Developer based in Irvine, CA.
        </p>
        <p data-cy="about-background" className="pt-4 text-white">
          I used to work in the Hospitality Industry, primarily hotels. I moved
          up in leadership roles in different departments and managed to take
          away many great skills such as communication, leadership, and time
          management.
        </p>
        <p data-cy="about-software" className="pt-4 text-white">
          I have always had an interest in Software Development and coding, but
          I didn't pursue it at the time because I believed I needed to follow
          the track I was already on after having worked in the Hospitality
          Industry for a few years. I reached out to a close friend from college
          who is a Software Developer and he told me about his role and
          experience in development which made me research more to see if I
          could still make the career change. My friend put me in contact with
          some of his colleagues who had gone through coding bootcamps at a
          later age and they talked me through their bootcamp experience. After
          these conversation and research I decided it was time to take the
          chance on myself and I enrolled in LearningFuze's Full-Immersion
          Accelerated Web Development program.
        </p>
        <p data-cy="about-learning" className="pt-4 text-white">
          I learned a lot of great skills and technologies during the program
          such as HTML5, CSS3, JavaScript, PostgreSQL, React.js (and more!) and
          since my completion of the program I have been working improving my
          knowledge of SQL, learning Python, NextJS, TailwindCSS, and vanilla
          CSS challenges and problems.
        </p>
        <p data-cy="about-css" className="pt-4 text-white">
          I enjoy finding neat CSS tricks or animation and trying to rebuilt
          them myself!
        </p>
        <p data-cy="about-chat" className="pt-4 text-white">
          I've been loving the change I made for myself into Software
          Development and I'd love to chat!
        </p>
      </div>
    </div>
  );
}
