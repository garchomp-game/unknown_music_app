import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function TopWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleButtonClick = () => {
    setIsOpen(true);
  };
  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden mx-20">
      <div className="max-w-7xl mx-auto z-10">
        <div className="relative pb-8 bg-gray-900 sm:pb-16 md:pb-20 xl:pb-20">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-0">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <span className="sr-only">Workflow</span>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      aria-expanded="true"
                      onClick={handleToggleButtonClick}
                    >
                      <span className="sr-only">Open main menu</span>
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
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:pr-12 md:space-x-8 xl:ml-6 lg:space-x-2 2xl:space-x-11 xl:space-x-8">
                <AnchorLink
                  href="#container"
                  className="px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700"
                >
                  Unknown_Musicとは
                </AnchorLink>
                <AnchorLink
                  href="#gallery"
                  className="px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700"
                >
                  コンテンツ
                </AnchorLink>
                <Link href="/top-contents">
                  <a className="px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700">
                  使ってみる
                  </a>
                </Link>
                <Link href="/login-page">
                  <a className="px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded hover:bg-indigo-700">
                    ログイン
                  </a>
                </Link>
              </div>
            </nav>
          </div>
          <Transition
            show={isOpen}
            enter="duration-150 ease-out "
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in "
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div
                ref={ref}
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-6 w-auto hover:opacity-70"
                        src="/images/logo.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={handleCloseButtonClick}
                      >
                        <span className="sr-only">Close main menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-500 hover:bg-gray-400"
                    >
                      Unknown_Musicとは
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-500 hover:bg-gray-400"
                    >
                      利用規約
                    </a>

                    <a
                      href="/contact-form"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-500 hover:bg-gray-400"
                    >
                      お問い合わせ
                    </a>
                  </div>
                  <Link href="/login-page">
                    <a className="w-full flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 md:py-4 md:text-lg md:px-10">
                      Log in
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </Transition>

          <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-5 xl:mt-16">
            <div className="sm:text-center sm:container mx-auto lg:text-left">
              <h2 className="tracking-tight font-medium text-gray-400 sm:text-5xl md:text-1xl">
                <img
                  className="inline-block lg:w-2/5 md:pt-0 sm:pt-5 pt-10"
                  src="/images/logo_name.png"
                />
                <br />
                <span className="mt-8 text-2xl block text-indigo-500 xl:inline-block">
                  知られざる名曲を見つけよう
                </span>
              </h2>
              <p className="mt-5 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-12 md:mb-16 md:text-xl lg:mx-0">
                大好きなあの曲に似た曲を見つけたい。
                <br />
                知らない名曲といっぱい出逢いたい。
                <br />
                音楽をより深く楽しむための無料アプリ。
              </p>
              <div className="mt-10 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/login-page">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 xl:py-4 xl:text-lg xl:px-10">
                      アカウント登録
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 xl:py-4 xl:text-lg xl:px-10"
                  >
                    ゲストユーザーで利用
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/main.jpg"
          alt="Main Photo"
        />
      </div>
    </div>
  );
}