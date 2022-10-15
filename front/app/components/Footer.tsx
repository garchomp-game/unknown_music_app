import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer:React.FC = () => {
  return (
    <footer className="text-gray-100 body-font bg-gray-900 px-56 w-screen">
      <div className="container px-4 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <div className="hidden md:block">
        <AnchorLink
          href="#header"
          className="flex title-font font-medium items-center md:justify-start justify-center text-indigo-100 hover:text-indigo-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            ></path>
          </svg>
          <span className="ml-3 text-sm">Scroll&nbsp;Up</span>
        </AnchorLink>
        </div>
        <p className="text-sm text-indigo-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 hidden lg:block">
          Copyright 2022 Unknown Music
          <br></br>
          <a
            href="https://twitter.com/syo_tech_IT"
            className="text-indigo-500 hover:text-indigo-700"
            rel="noOpener noReferrer"
            target="_blank"
          >
          @SyoInoue
          </a>
        </p>
        <span className="inline-flex sm:ml-auto mt-0 sm:w-0 justify-center justify-start md:mr-20 w-8/12 mx-auto">
          <a
            className="text-indigo-100 hover:text-indigo-300"
            href="https://www.facebook.com/syo.inoue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            className="ml-7 text-indigo-100 hover:text-indigo-300"
            href="https://twitter.com/syo_tech_IT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            className="ml-7 text-indigo-100 hover:text-indigo-300"
            href="https://www.instagram.com/syo_mont_blanc/?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            className="ml-7 text-indigo-100 hover:text-indigo-300"
            href="https://github.com/SyoInoue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;