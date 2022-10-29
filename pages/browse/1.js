// posts will be populated at build time by getStaticProps()
import { Grid } from "@nextui-org/react";
import CameraCard from "../../components/CameraCard";

function Browse({ cameras }) {
  return (
    <>
      <h1> District 1 </h1>
      <Grid.Container gap={1} justify="center">
        {cameras.map((camera) => (
          <Grid key={camera.cctv.location.locationName}>
            <CameraCard camera={camera} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `https://cwwp2.dot.ca.gov/data/d1/cctv/cctvStatusD01.json`
  );
  let cameras = await res.json();

  cameras = cameras.data;
  cameras = cameras.splice(0, 90);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cameras,
    },
  };
}

export default Browse;
