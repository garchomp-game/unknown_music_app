import React, { useState } from "react"
import Link from "next/link"

const Header:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);//rightMenuState
  const [thisOpen, setThisOpen] = useState(false);//leftMenuState
//containsは引数がdropdownRef.currentの子孫である場合trueを返す
//e.targetはイベントが発生した要素を指す
  const handleIsOpenClick = () => {{
      setIsOpen(!isOpen);
    }
  };

  const handleThisOpenClick = () => {{
    setThisOpen(!thisOpen);
  }
};

  return (
    <nav className="left-0 block fixed w-full bg-gray-900 z-50 bg-opacity-95 shadow-2xl">
      <div className="mx-auto xl:mx-44 md:mx-20">
        <div className="relative flex items-center justify-between h-16">
          {/* ハンバーガーメニュー */}
            <div className="ml-6 flex items-center flex-row flex-col sm:hidden block">
              <button
                type="button"
                className="bg-opacity-0 p-2 hover:opacity-70"
                id="main-menu"
                onClick={handleThisOpenClick}
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
              {thisOpen ? (//こっから下はdiv要素が一つではないとうまく動かない
                <div className="absolute inset-x-0 w-48 block sm:hidden rounded-lg px-2 pt-2 pb-3 space-y-1 ml-6 mt-14 shadow-md bg-gray-900 bg-opacity-95">
                      <Link href="/top-contents">
                        <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-200 hover:bg-gray-400">
                          メインコンテンツ
                        </a>
                      </Link>
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
              ) : undefined}
            </div>
            {/* PC用メニュー */}
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
                    href="/top-contents"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs lg:text-sm font-medium"
                    aria-current="page"
                  >
                    メインコンテンツ
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
              <button
                type="button"
                className="flex text-sm rounded-full text-gray-200 focus:outline-none hover:opacity-70"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={handleIsOpenClick}
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
            {isOpen ? (
              <div className="origin-top-right sm:hidden block px-2 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-100 focus:outline-none">
                <a
                  href="/my-page"
                  className="block px-3 py-2 text-sm rounded-md text-gray-900 hover:bg-gray-300"
                  role="menuitem"
                >
                  マイページ
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm rounded-md text-gray-900 hover:bg-gray-300"
                  role="menuitem"
                >
                  プロフィール編集
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm rounded-md text-gray-900 hover:bg-gray-300"
                  role="menuitem"
                >
                  ログアウト
                </a>
              </div>
            ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;