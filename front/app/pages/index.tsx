import Layout from "../components/Layout";
import TopWrapper from "../components/TopWrapper";
import Container from "../components/Container";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <Layout title="Main-Page">
      <div className="mt-24 container">
        <TopWrapper />
      </div>
      <div className="mt-6 mx-64 container">
        <section id="container">
          <Container />
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