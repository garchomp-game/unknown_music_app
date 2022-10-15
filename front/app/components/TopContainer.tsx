const TopContainer:React.FC = () => {
  return (
    <section className="text-gray-200 body-font bg-gray-900 pb-10 sm:pb-16 md:pb-10 sm:px-6 sm:mt-0 mx-20 rounded-t-xl">
      <h1 className="text-center pt-20 lg:text-4xl text-indigo-500 text-3xl">Unknown Musicとは</h1>
      <div className="container px-5  mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <img
            className="inline-block w-40 h-40 text-gray-400 mb-6 mt-6"
            src="/images/container_image.png"
          />
          <p className="leading-relaxed lg:text-lg">
            世界には人に知られていない隠れた名曲がたくさん存在します。<br></br>
            楽曲自体は素晴らしいのに、中々表舞台にでてこない曲や、<br></br>
            ハマる人にはハマる少し癖のある名曲等、<br></br>
            普段出会えない音楽達との出会いの場を提供する、<br></br>
            そんな検索エンジン型の音楽アプリです。
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8"></span>
        </div>
      </div>
    </section>
  );
}
export default TopContainer;
