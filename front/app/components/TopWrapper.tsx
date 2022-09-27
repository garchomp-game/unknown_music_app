import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const TopWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleButtonClick = () => {
    setIsOpen(true);
  };
  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative bg-gray-900 overflow-hidden mx-20 rounded-xl">
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
                  <div className="-mr-5 flex items-center hidden sm:block md:hidden">
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
              <div className="hidden md:block md:pr-16 lg:space-x-1 md:space-x-8 xl:space-x-3 xl:ml-14 lg:ml-8">
                <AnchorLink
                  href="#TopContainer"
                  className="px-2 lg:px-2 xl:px-3 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700"
                >
                  Unknown_Musicとは
                </AnchorLink>
                <AnchorLink
                  href="#gallery"
                  className="px-2 lg:px-2 xl:px-3 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700"
                >
                  コンテンツ
                </AnchorLink>
                <Link href="/top-contents">
                  <a className="px-2 lg:px-3 xl:px-4 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700">
                  使ってみる
                  </a>
                </Link>
                <Link href="/login-page">
                  <a className="md:px-5 lg:px-4 xl:px-3 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-indigo-600 rounded hover:bg-indigo-700">
                    ログイン
                  </a>
                </Link>
              </div>
            </nav>
          </div>
          {/* スマホ用ハンバーガーメニュー */}
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
                <div className="rounded-lg shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden pb-6 bg-opacity-95">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-6 w-auto hover:opacity-50"
                        src="/images/logo.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
                    <div className="px-2 pt-2 pb-3 space-y-1 hidden sm:block">
                      <a
                        href="/admin-page"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400"
                      >
                        Unknown_Musicとは
                      </a>

                      <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400"
                      >
                        コンテンツ
                      </a>
                      <a
                        href="/contact-form"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400"
                      >
                        使ってみる
                      </a>
                    </div>
                  </div>
                </div>
            )}
          </Transition>
          <main className="mx-auto max-w-7xl px-4 sm:mt-5 -mt-5 sm:px-10 md:mt-16 lg:mt-10 lg:px-5 xl:mt-16">
            <div className="text-center sm:container lg:text-left lg:justify-center xl:pl-10">
              <h2 className="tracking-tight font-medium text-gray-400 sm:text-5xl md:text-1xl">
                <img
                  className="inline-block lg:ml-6 xl:ml-3 lg:w-2/5 lg:-mt-0 md:-mt-10 md:pt-0 sm:pt-5 pt-10 2xl:center"
                  src="/images/logo_name.png"
                />
                <br />
                <span className="mt-8 lg:ml-6 xl:ml-3 text-2xl block text-indigo-500 xl:inline-block">
                  知られざる名曲を見つけよう
                </span>
              </h2>
              <p className="mt-5 lg:ml-6 xl:ml-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:mb-8 md:text-xl lg:mx-0">
                大好きなあの曲に似た曲を見つけたい。
                <br />
                知らない名曲といっぱい出逢いたい。
                <br />
                音楽をより深く楽しむための無料アプリ。
              </p>
              <div className="mt-10 sm:mt-8 sm:flex sm:justify-center lg:justify-start sm:-mb-10 lg:mb-0">
                <div className="rounded-md shadow">
                  <Link href="/login-page">
                    <a className="w-full xl:py-4 sm:text-sm lg:px-1 px-8 py-3 xl:px-10 lg:ml-6 xl:ml-1 flex items-center justify-center border border-transparent text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      アカウント登録で利用
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full xl:py-4 lg:px-1 px-8 py-3 sm:text-sm lg:px-5 xl:px-10 xl:ml-1 lg:ml-6 flex items-center justify-center border border-transparent text-base rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200"
                  >
                    ゲストユーザーで利用
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <img
          className="h-80 w-full object-cover sm:h-80 md:h-96 lg:w-full lg:h-full"
          src="/images/main.jpg"
          alt="Main Photo"
        />
      </div>
    </div>
  );
}
export default TopWrapper;