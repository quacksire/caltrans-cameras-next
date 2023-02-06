// posts will be populated at build time by getStaticProps()
import { Grid, Text } from "@nextui-org/react";
import CameraCard from "../../../components/CameraCard";
import Back from "../../../components/Back";
import Shield from "../../../components/Shield";
import Head from "next/head";

export default function Browse({ cameras, district, error }) {
  return (
    <>
      <Head>
        <title>{`Cameras in District ${district}`}</title>
        <meta property="og:title" content={`Cameras in District ${district}`} />
        <meta property="og:description" content={`Caltrans Cameras in District ${district}`} />
        {/* Twitter */ }
        <meta name="twitter:creator" content="@duckdoquack" />
        <meta name="twitter:title" content={`Caltrans Cameras in District ${district}`} />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
      </Head>



      <Grid.Container gap={2} justify="center">
        <Grid>
          <h1> District {district} </h1>
        </Grid>
      </Grid.Container>

      {cameras?.length > 0 ? (<Grid.Container gap={1} justify="center">
        {cameras.map((camera) => (
            <Grid key={camera.cctv.location.locationName}>
              <CameraCard camera={camera} />
            </Grid>
        ))}
      </Grid.Container>) : (
      <Grid.Container gap={1} justify="center">
        <Text h3> No cameras found in District {district} </Text>
        <Text small> {error} </Text>
        </Grid.Container>
      )
      }

    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

export async function getStaticPaths() {
  //https://caltrans-cameras.quacksire.workers.dev/list

  // Call an external API endpoint to get posts
  let districts = [
    "1",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  // cctv.location.
  // [route, county, nearbyPlace, milepost, direction]

  // Get the paths we want to pre-render based on posts
  const paths = districts.map((district) => ({
    params: { district: district },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps({ params, res, req }) {
  let district = params.district;
  try {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const request = await fetch(
      `https://caltrans-cameras.quacksire.workers.dev/d${params.district}`
    );
    let cameras = await request.json();
    //console.log(cameras);
    cameras = cameras[0].pagedResult;


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time //
    return {
      props: {
        cameras,
        district,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        district,
        cameras: [],
        error: JSON.stringify(error),
      },
    };
  }
}
