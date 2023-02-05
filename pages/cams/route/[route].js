// posts will be populated at build time by getStaticProps()
import { Grid, Text } from "@nextui-org/react";
import CameraCard from "../../../components/CameraCard";
import Back from "../../../components/Back";
import Shield from "../../../components/Shield";
import {routes} from '../../../components/lib/lists'
import Image from "next/image";

export default function Browse({ camerasByRoute, route }) {
    return (
        <>
            <Grid.Container gap={2} justify="center">
                <Grid>
                    <h1> Cameras along <Image width={45} height={45} src={`https://shields.caltranscameras.app/${route}.svg`} /> {route} </h1>
                </Grid>
            </Grid.Container>

            {camerasByRoute.length > 0 ? (
                <Grid.Container gap={1} justify="center">
                    {camerasByRoute.map((camera) => (
                        <Grid key={camera.cctv.location.locationName}>
                            <CameraCard camera={camera} />
                        </Grid>
                    ))}
                </Grid.Container>
            ) : (
                <Grid.Container gap={1} justify="center">
                    <Text h3> No cameras found along <Image width={20} height={20} src={`https://shields.caltranscameras.app/${route}.svg`} /> {route} </Text>
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
    const paths = routes.map((route) => ({
        params: { route: `${route}` },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}
export async function getStaticProps({ params, res, req }) {

    let route = params.route;
    try {// Call an external API endpoint to get posts.
        // You can use any data fetching library
        const request = await fetch(
            `https://caltrans-cameras.quacksire.workers.dev/`
        );
        let cameras = await request.json();
        //console.log(cameras);
        //cameras = cameras[0].pagedResult;

        let camerasByRoute = cameras.filter((camera) => {
            return camera.cctv.location.route === route;
        });

        // By returning { props: { posts } }, the Blog component
        // will receive `posts` as a prop at build time //
        return {
            props: {
                camerasByRoute,
                route,
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
