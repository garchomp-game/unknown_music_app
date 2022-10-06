import React, { useRef, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [thisOpen, setThisOpen] = useState(false);

  const dropdownRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);
  const handleOutSideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
      setThisOpen(false);
    }
  };

  return (
      <nav className="left-0 block fixed w-full bg-gray-900 z-50 bg-opacity-95 shadow-2xl">
        {/* スマホ用ハンバーガーメニュー */}
        <div ref={dropdownRef}>
          <div className=" mx-auto xl:mx-44 md:mx-20">
            <div className="relative flex items-center justify-between h-16">
                <div className="ml-6 flex items-center flex-row flex-col sm:hidden">
                    <button
                      type="button"
                      className="bg-gray-900 bg-opacity-0 shadow-2xl rounded-md p-2 inline-flex items-center justify-center text-white hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      aria-expanded="true"
                      onClick={() => setThisOpen(!thisOpen)}
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
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center hover:opacity-70 sm:mr-0 mr-16">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <span className="sr-only">Workflow</span>
                    </div>
                  </div>
                  <Link href="/">
                    <img
                      className="sm:ml-10 block h-7 w-auto"
                      src="/images/logo.png"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs lg:text-sm font-medium"
                      aria-current="page"
                    >
                      アプリの使い方
                    </a>

                    <Link href="/admin-page">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs lg:text-sm font-medium">
                        運営者情報
                      </a>
                    </Link>
                    <Link href="/terms-of-service">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs lg:text-sm font-medium">
                      利用規約
                      </a>
                    </Link>
                    <Link href="/contact-form">
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs lg:text-sm font-medium"
                    >
                      お問い合わせ
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* ユーザーメニュー*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-1">
                <div className="ml-3 relative z-30 md:mr-0 mr-10">
                  <div>
                    <button
                      type="button"
                      className="flex text-sm rounded-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-offset-gray-900 focus:ring-indigo-500 hover:opacity-70"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="sr-only">Open user menu</span>
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <Transition
                    show={isOpen}
                    enter="duration-100 ease-out "
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-75 ease-in "
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    {(ref) => (
                      <div
                        ref={ref}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labeledBy="user-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-300"
                          role="menuitem"
                        >
                          マイページ
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-300"
                          role="menuitem"
                        >
                          プロフィール編集
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-300"
                          role="menuitem"
                        >
                          ログアウト
                        </a>
                      </div>
                    )}
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* スマホ用ハンバーガーメニュー */}
        <Transition
            show={thisOpen}
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
                className="absolute -top-1 inset-x-0 p-2 max-w-md transition transform origin-top-right sm:hidden">
                <div className="rounded-lg shadow-md w-5/12 bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden pb-0 bg-opacity-95">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:hidden block">
                  <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400"
                    >
                      アプリの使い方
                    </a>
                    <Link href="/admin-page">
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400">
                        運営者情報
                      </a>
                    </Link>
                    <Link href="/terms-of-service">
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400">
                      利用規約
                      </a>
                    </Link>
                    <Link href="/contact-form">
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400">
                        お問い合わせ
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Transition>
      </nav>
  );
}
export default Header;