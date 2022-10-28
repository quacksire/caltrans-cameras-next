// posts will be populated at build time by getStaticProps()
import { Grid } from "@nextui-org/react";
import CameraCard from "../../components/CameraCard";

function Browse({ cameras }) {
  return (
    <>
      <h1> All </h1>
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
    `https://caltrans-cameras-cams.quacksire.workers.dev/`
  );
  let cameras = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cameras,
    },
  };
}

export default Browse;
