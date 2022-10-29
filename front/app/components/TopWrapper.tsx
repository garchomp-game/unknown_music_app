import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const TopWrapper:React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden mx-20 rounded-xl">
      <div className="max-w-7xl mx-auto z-10">
        <div className="relative pb-8 bg-gray-900 sm:pb-20 lg:pb-12">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-0">
            <nav
              className="relative flex items-center mx-auto sm:h-12 justify-center lg:justify-start"
              aria-label="Global"
            >
              <div className="hidden sm:block lg:space-x-1 md:space-x-8 xl:space-x-3 xl:ml-14 lg:ml-8">
                <AnchorLink
                  href="#TopContainer"
                  className="px-3 lg:px-2 xl:px-3 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700"
                >
                  Unknown_Musicとは
                </AnchorLink>
                <AnchorLink
                  href="#gallery"
                  className="px-3 lg:px-2 xl:px-3 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700"
                >
                  コンテンツ
                </AnchorLink>
                <Link href="/top-contents">
                  <a className="mr-2 px-3 lg:px-3 xl:px-4 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-gray-900 rounded hover:bg-gray-700">
                  使ってみる
                  </a>
                </Link>
                <Link href="/login-page">
                  <a className="px-3 md:px-5 lg:px-4 xl:px-3 py-2 xl:text-sm sm:text-xs xl:font-medium text-center text-white bg-indigo-600 rounded hover:bg-indigo-700">
                    ログイン
                  </a>
                </Link>
              </div>
            </nav>
          </div>
          <main className="mx-auto max-w-7xl px-4 sm:mt-5 -mt-5 sm:px-10 md:mt-16 lg:mt-5 lg:px-5 xl:mt-8">
            <div className="text-center sm:container lg:text-left lg:justify-center xl:pl-10">
              <h2 className="tracking-tight font-medium text-gray-400 sm:text-5xl md:text-1xl">
                <img
                  className="inline-block lg:ml-6 xl:ml-3 lg:w-2/5 lg:-mt-5 md:-mt-16 md:-pt-20 sm:pt-5 pt-10 2xl:center"
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
                    <a className="w-full xl:py-4 sm:text-xs md:text-sm lg:px-1 px-8 py-3 xl:px-10 lg:ml-6 xl:ml-1 flex items-center justify-center border border-transparent text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      アカウント登録で利用
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full xl:py-4 lg:px-1 px-8 py-3 sm:text-xs md:text-sm lg:px-5 xl:px-10 xl:ml-1 lg:ml-6 flex items-center justify-center border border-transparent text-base rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200"
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