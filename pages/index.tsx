import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";
import { Resource } from "./api/Resource";

interface HomeProps {
  resources?: Resource[];
  message: string;
}

export default function Home(props: HomeProps) {
  console.log(props.message);

  if (!props.resources) {
    return null;
  }

  return (
    <Layout>
      <ResourceHighlight resources={props.resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={props.resources} />
      <Footer />
    </Layout>
  );
}

// is called every time you will visit the page.
// function is executed on the server.
export async function getServerSideProps() {
  console.log("server!");
  const resources = await fetch("http://localhost:3000/api/resources")
    .then((res) => {
      const data: Promise<Resource[]> = res.json();
      return data;
    })
    .catch((e) => {
      console.log(e);
      return undefined;
    });

  return {
    props: {
      resources,
    },
  };
}

// is called only once.
// function is executed at build time.
// export async function getStaticProps() {
//   // const resources = await fetch("http://localhost:3000/api/resources")
//   //   .then((res) => {
//   //     const data: Promise<Resource[]> = res.json();
//   //     return data;
//   //   })
//   //   .catch((e) => {
//   //     console.log(e);
//   //     return undefined;
//   //   });

//   return {
//     props: {
//       message: "static",
//     },
//   };
// }
