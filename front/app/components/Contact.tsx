const Contact:React.FC = () => {
  return (
    <section className="text-gray-100 body-font relative">
      <div className="py-6">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-xl mb-4 text-gray-100 font-bold">
            お問い合わせ
          </h1>
          <p className="leading-relaxed text-base mx-10 md:mx-0">
            お仕事の依頼、バグの修正、アプリの感想等<br />
            なんでもおまちしております。
          </p>
        </div>
        <div className="w-3/4 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-100">
                  ● お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-100 hidden sm:block">
                  ● メールアドレス
                </label>
                <label htmlFor="email" className="leading-7 text-sm text-gray-100 sm:hidden">
                  ● メール
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-100"
                >
                  ● 本文
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-60 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-gray-100 bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                送信
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center hidden sm:block">
              <a className="text-gray-100">funnyfacee7777@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
