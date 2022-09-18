import Link from "next/link";

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font container">
      <div className="container w-screen py-6 mx-auto flex flex-wrap">
        <div className="w-8/12 mx-auto">
          <div className="flex flex-wrap w-full py-32 px-10 relative mb-4 relative">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block absolute inset-0 shadow-2xl rounded-xl"
              src="/images/signup_image.jpeg"
            />
            <div className="absolute top-16 lg:left-20 xl:left-32 w-9/12 h-60 bg-gray-100 opacity-70 rounded-xl hidden lg:block"></div>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-indigo-700 font-medium title-font mb-2 hidden lg:block">
                アカウント登録
              </h2>
              <h2 className="text-2xl text-indigo-700 font-medium title-font mb-2 lg:hidden sm:block">
                登録する
              </h2>
              <p className="leading-relaxed text-gray-700 hidden lg:block">
                アカウントを登録して無料でサービスを使ってみよう!!
              </p>
              <Link href="/login-page">
                <a className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-800 rounded hover:bg-indigo-900">
                  Let's Go
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block absolute inset-0 shadow-2xl rounded-xl"
                  src="/images/locate_image.jpeg"
                />
                <div className="absolute lg:top-12 lg:left-10 xl:top-16 xl:left-14 w-9/12 h-60 bg-gray-100 opacity-70 rounded-xl hidden lg:block"></div>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-indigo-700 font-medium title-font mb-2 hidden lg:block xl:mt-4">
                    楽曲を見つける
                  </h2>
                  <h2 className="text-xl text-gray-200  font-medium title-font mb-2 lg:hidden sm:block">
                    見つける
                  </h2>
                  <p className="leading-relaxed text-gray-700 hidden lg:block">
                    普段出会えない<br />
                    珠玉の一曲に出会おう!!
                  </p>
                  <a
                    className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-800 rounded hover:bg-indigo-900"
                    href="/top-contents"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block absolute inset-0 shadow-2xl rounded-xl"
                  src="/images/post_image.jpeg"
                />
                <div className="absolute lg:top-12 lg:left-10 xl:top-16 xl:left-14 w-9/12 h-60 bg-gray-100 opacity-70 rounded-xl sm:left-7 sm:top-12 hidden lg:block"></div>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-indigo-700  font-medium title-font mb-2 hidden lg:block xl:mt-4">
                    楽曲を分析する
                  </h2>
                  <h2 className="text-xl text-gray-200  font-medium title-font mb-2 lg:hidden sm:block">
                    分析する
                  </h2>
                  <p className="leading-relaxed text-gray-700 hidden lg:block">
                  曲がもつ色々な<br />
                  パラメーターを確認してみよう!!
                  </p>
                  <a
                    className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-800 rounded hover:bg-indigo-900"
                    href="/top-contents"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}