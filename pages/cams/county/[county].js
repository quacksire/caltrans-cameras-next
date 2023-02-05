// posts will be populated at build time by getStaticProps()
import { Grid, Text } from "@nextui-org/react";
import CameraCard from "../../../components/CameraCard";
import Back from "../../../components/Back";
import Shield from "../../../components/Shield";
import {counties} from '../../../components/lib/lists'
import Image from "next/image";

export default function Browse({ camerasByCounty, county, error }) {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <h1> Cameras in {county} County </h1>
        </Grid>
      </Grid.Container>


      {camerasByCounty.length > 0 ? (
          <Grid.Container gap={1} justify="center">
            {camerasByCounty.map((camera) => (
                <Grid key={camera.cctv.location.locationName}>
                  <CameraCard camera={camera} />
                </Grid>
            ))}
          </Grid.Container>
      ) : (
          <Grid.Container gap={1} justify="center">
            <Text h3> No cameras found in {county} </Text>
          </Grid.Container>
      )}

      {error && (
            <Grid.Container gap={1} justify="center">
                <Text h3> {error} </Text>
            </Grid.Container>
      )}

    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

export async function getStaticPaths() {
  //https://caltrans-cameras.quacksire.workers.dev/list

  // Call an external API endpoint to get posts


  // cctv.location.
  // [route, county, nearbyPlace, milepost, direction]

  // Get the paths we want to pre-render based on posts
  const paths = counties.map((county) => ({
    params: { county: `${String(county).toLowerCase().replace(' ', '-')}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps({ params, res, req }) {

  let county = params.county.replace('-', ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

  try {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const request = await fetch(
        `https://caltrans-cameras.quacksire.workers.dev/`
    );
    let cameras = await request.json();
    //console.log(cameras);
    //cameras = cameras[0].pagedResult;

    let camerasByCounty = cameras.filter((camera) => {
      return camera.cctv.location.county === county;
    });

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time //
    return {
      props: {
        camerasByCounty,
        county,
      },
    };
  } catch (error) {
    return {
      props: {
        camerasByCounty: [],
        county: county,
        error: JSON.stringify(error),
      },
    };
  }
}
