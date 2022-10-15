import Link from "next/link";

const Gallery:React.FC = () => {
  return (
    <section className="text-gray-600 body-font container">
      <div className="py-6 mx-auto flex flex-wrap">
        <div className="w-8/12 mx-auto">
          <div className="flex flex-wrap w-full relative py-32 px-10 mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block absolute inset-0 shadow-2xl rounded-xl"
              src="/images/signup_image.jpeg"
            />
            <div className="absolute h-60 top-14 left-14 w-9/12 sm:h-60 sm:left-10 sm:top-14 sm:ml-4 md:top-14 md:ml-7 lg:top-16 lg:ml-12 xl:ml-20 bg-gray-100 opacity-70 rounded-xl"></div>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-indigo-700 font-medium title-font mb-2">
                アカウント登録
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
          <div className="flex flex-wrap">
            <div className="md:px-2 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full relative md:px-10 md:py-24 py-32 px-10 mb-4">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center md:block absolute inset-0 shadow-2xl rounded-xl"
                  src="/images/locate_image.jpeg"
                />
                <div className="absolute left-14 top-14 sm:left-14 h-60 md:h-48 md:top-12 md:left-7 lg:h-60 lg:top-12 lg:left-10 xl:top-16 xl:left-14 w-9/12 bg-gray-100 opacity-70 rounded-xl"></div>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-indigo-700 font-medium title-font mb-2 xl:mt-4">
                    楽曲を見つける
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
            <div className="md:px-2 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full relative md:px-10 md:py-24 py-32 px-10 mb-4">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center md:block absolute inset-0 shadow-2xl rounded-xl"
                  src="/images/post_image.jpeg"
                />
                <div className="absolute left-14 top-14 sm:left-14 h-60 md:h-48 md:top-12 md:left-7 lg:h-60 lg:top-12 lg:left-10 xl:top-16 xl:left-14 w-9/12 bg-gray-100 opacity-70 rounded-xl"></div>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-indigo-700  font-medium title-font mb-2 xl:mt-4">
                    楽曲を分析する
                  </h2>
                  <p className="leading-relaxed text-gray-700 hidden lg:block">
                  曲がもつ様々な<br />
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
export default Gallery;