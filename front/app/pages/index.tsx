import Layout from "../components/Layout";
import TopWrapper from "../components/TopWrapper";
import TopContainer from "../components/TopContainer";
import Container from "../components/Container";
import Gallery from "../components/Gallery";
import Human from "../components/icon/Human";
import Music from "../components/icon/Music";
import Heart from "../components/icon/Heart";
import Post from "../components/icon/Post";
import Spacer from "../components/Spacer";

const Home:React.FC = () => {
  return (
    <Layout title="Main-Page">
      <div className="mt-24 container">
        <TopWrapper />
      </div>
      <div className="mt-6 mx-64 container">
        <section id="TopContainer">
          <TopContainer />
        </section>
        <section id="container">
          <Container  number={1}
                      title="Sign Up"
                      text01="まずはアカウント登録をしてみよう！"
                      text02="所要時間約1分！"
                      text03="ゲストユーザー機能を使ってみてもOK！"
                      image={<Human/>} //アイコン画像
          />
          <Container  number={2}
                      title="Music"
                      text01="ログインできたら検索エンジンに"
                      text02="お気に入りの曲を入れてみよう！"
                      text03="新たな音楽との出会いが始まるよ！"
                      image={<Music/>}
          />
          <Container  number={3}
                      title="Like"
                      text01="好みにぴったりな一曲に出会えたら、"
                      text02="ハートのいいね！ボタンを押してみよう！"
                      text03="聞きたい曲をストック出来るよ！"
                      image={<Heart/>}
          />
          <Container  number={4}
                      title="Post"
                      text01="このアプリで名曲に出会えたら、"
                      text02="是非他の人にもシェアしてみよう！"
                      text03=""
                      image={<Post/>}
          />
          <Spacer />
        </section>
      </div>
      <div className="container">
        <section id="gallery">
          <Gallery />
        </section>
      </div>
    </Layout>
  );
}
export default Home;