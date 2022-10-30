// posts will be populated at build time by getStaticProps()
import { Grid } from "@nextui-org/react";
import CameraCard from "../../components/CameraCard";

export default function Browse({ cameras, district }) {
    return (
        <>
            <h1> District {district} </h1>
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

export async function getServerSidePaths() {
    //https://caltrans-cameras.quacksire.workers.dev/list

    // Call an external API endpoint to get posts
    let districts = [
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
        params: { district: district},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
export async function getServerSideProps({params, res, req}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1000, stale-while-revalidate=900'
    )
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const request = await fetch(
        `https://caltrans-cameras.quacksire.workers.dev/d${params.district}`
    );
    let cameras = await request.json();
    let district = params.district
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            cameras,
            district
        },
    };
}
