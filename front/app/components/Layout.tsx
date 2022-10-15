import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type MyComponentProps = {
  children: React.ReactNode;
  title: string
};

//Layoutコンポーネントの作成。全体のlayout。引数にchildren, title
const Layout:React.FC<MyComponentProps> = ({ children, title = "Unknown Music" }) => {
  return (
    <div className="flex justify-center items-center mx-auto flex-col min-h-screen text-white font-mono bg-gradient-to-r from-purple-500 via-pink-600 to-purple-900">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <section id="header">
            <Header />
        </section>
      </header>
      <main className="flex flex-1 items-center max-w-screen-sm sm:max-w-screen-xl sm:w-screen flex-col">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
