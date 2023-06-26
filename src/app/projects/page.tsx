export default function Projects() {
  return (
    <div className="flex flex-wrap w-full sm:h-full lg:h-screen bg-main">
      <div className="flex flex-wrap w-full p-4 mt-16">
        <div className="basis-2/5"></div>
        <div className="text-white basis-3/5">
          <p>Mission Beepossible</p>
          <p>Full-Stack Web Application</p>
          <p className="italic">
            A full-stack Next.js (w/TypeScript) application for future
            astronauts to learn about the universe.
          </p>
          <p>
            This application was developed for the Dear Junior Dev Quackathon
            prompt: A full-stack web application to teach users about the solar
            system. The tech stack used for this application was Next.js,
            TypeScript, React, TailwindCSS, CSS3, Docker, PostgreSQL, Prisma,
            Supabase, and Vercel. Partner project with{" "}
            <a href="https://github.com/cam-peck" className="underline">
              Cameron Peck
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
