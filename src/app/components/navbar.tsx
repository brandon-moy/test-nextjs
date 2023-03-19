import { useState } from "react";

export default function NavBar() {
  const [showing, setShowing] = useState<boolean>(false);

  const display = showing ? "" : "hidden";

  return (
    <nav
      className="relative flex items-center justify-between w-full py-4 bg-gray-900 bg-opacity-90 flex-nowrap text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex flex-wrap items-center justify-between w-full px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowing(!showing)}
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className={`!visible ${display} flex-grow basis-[100%] items-center lg:!flex lg:basis-auto transition-all duration-100`}
          id="navbarSupportedContent3"
          data-te-collapse-item
        >
          {/* <!-- Left links --> */}
          <ul
            className="flex flex-col pl-0 mr-auto list-style-none lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li className="lg:px-2" data-te-nav-item-ref>
              <a
                className="active disabled:text-black/30 lg:px-2 [&.active]:text-white"
                aria-current="page"
                href="/"
                data-te-nav-link-ref
              >
                Home
              </a>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="p-0 text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-white"
                href="/about-me"
                data-te-nav-link-ref
              >
                About Me
              </a>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="p-0 text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-white"
                href="/projects"
                data-te-nav-link-ref
              >
                Projects
              </a>
            </li>
            <li className="lg:pr-2" data-te-nav-link-ref>
              <a
                href="/skills"
                className="p-0 text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-white"
                data-te-nav-link-ref
              >
                Skills
              </a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
    </nav>
  );
}
