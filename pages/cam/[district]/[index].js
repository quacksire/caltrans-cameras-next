// pages/cam/[cid].js
/*
{
     "cctv":
     {
       "index": "1",
       "recordTimestamp":
       {
         "recordDate": "2021-07-22",
         "recordTime": "06:50:03",
         "recordEpoch": "1626961803"
       },
       "location":
       {
         "district":       "1",
         "locationName":   "SR-20 : At SR-1 - Looking East (C020)",
         "nearbyPlace":    "Fort Bragg",
         "longitude":      "-123.80779",
         "latitude":       "39.42002",
         "elevation":      "95",
         "direction":      "East",
         "county":         "Mendocino",
         "route":          "SR-20",
         "routeSuffix":    "",
         "postmilePrefix": "R",
         "postmile":       "0.01",
         "alignment":      "",
         "milepost":       "0.01"
       },
       "inService": "true",
       "imageData":
       {
         "imageDescription":  "",
         "streamingVideoURL": "",
         "static":
         {
           "currentImageUpdateFrequency":   "15",
           "currentImageURL":               "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/sr20atsr1lookingeast.jpg",
           "referenceImageUpdateFrequency": "60",
           "referenceImage1UpdateAgoURL":   "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-1.jpg",
           "referenceImage2UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-2.jpg",
           "referenceImage3UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-3.jpg",
           "referenceImage4UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-4.jpg",
           "referenceImage5UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-5.jpg",
           "referenceImage6UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-6.jpg",
           "referenceImage7UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-7.jpg",
           "referenceImage8UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-8.jpg",
           "referenceImage9UpdatesAgoURL":  "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-9.jpg",
           "referenceImage10UpdatesAgoURL": "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-10.jpg",
           "referenceImage11UpdatesAgoURL": "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-11.jpg",
           "referenceImage12UpdatesAgoURL": "https:\/\/cwwp2.dot.ca.gov\/data\/d1\/cctv\/image\/sr20atsr1lookingeast\/previous\/sr20atsr1lookingeast-12.jpg"
         }
       }
     }
    },
    */



import {Container, Text, Grid, Card, Col, Loading} from "@nextui-org/react";
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Back from "../../../components/Back"
import Shield from "../../../components/Shield"
//const StreamPlayer = dynamic(() => import('../../../components/StreamPlayer'), {
//    ssr: false,
//})
//import StreamPlayer from "../../../components/StreamPlayer"
import useSWR from 'swr'
import {useRouter} from "next/router";

const fetcher = (...args) => fetch(...args, {crossOrigin: "anonymous"}).then((res) => res.json())
// anonymous
const center = {
    display: "flex",
    alignItems: "center"
}

function Camera({ camera }) {
    if (!camera || camera.error) {
        return (
            <Container fluid>
                <Text h1 color="white"> Page Not Available </Text>
                <br />

            </Container>
        )
    }

    let ogTitle;
    if (camera.location.direction) {
        ogTitle = `${camera.location.direction}bound ${camera.location.route}`
    } else {
        ogTitle = camera.location.route
    }

    return (
        <>
            <Head>
                <title>{camera.location.direction && `${camera.location.direction}bound`} {camera.location.route}</title>
                <meta property="og:title" content={ogTitle} />
                {/* Twitter */ }
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ciderapp" />
                <meta name="twitter:creator" content="@duckdoquack" />
                <meta name="twitter:title" content={ogTitle} />
                <meta property="twitter:image" content={`/api/og?route=${camera.location.route}&nearby=${camera.location.nearbyPlace}`} />

                <meta property="og:image" content={`/api/og?route=${camera.location.route}&nearby=${camera.location.nearbyPlace}`} />
                <link rel="icon" href={`https://shields.caltranscameras.app/${camera.location.route}.svg`} sizes="any" type="image/svg+xml" />
                <meta name="viewport" content="width=device-width initial-scale=1.0" />
            </Head>


            <Container fluid>
                <Grid.Container gap={2} justify="center">
                    <Grid>
                        <Back />
                    </Grid>
                    <Grid>
                        <Text h1 color="white"> <Shield route={camera.location.route} />{String(camera.location.locationName).split(":")[1]} </Text>
                    </Grid>
                </Grid.Container>

                <br />
                <Grid.Container gap={2} justify="center">
                    <Grid xs={4}>
                        <Card css={{ w: "100%", h: "100%" }}>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={camera.imageData.static.currentImageURL}
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                />
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card css={{ w: "100%", h: "100%" }}>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Col>
                                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                                        {camera.location.direction && `${camera.location.direction}bound`} {camera.location.route}
                                    </Text>
                                    <Text h3 color="white">
                                        Near {camera.location.nearbyPlace} in {camera.location.county} County
                                    </Text>
                                </Col>
                            </Card.Header>
                        </Card>
                    </Grid>
                </Grid.Container>

            </Container>
        </>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://caltrans-cameras.quacksire.workers.dev/`)
    const cameras = await res.json()



    // cctv.location.
    // [route, county, nearbyPlace, milepost, direction]

    // Get the paths we want to pre-render based on posts
    const paths = cameras.map((cam) => ({
        params: { district: cam.cctv.location.district, index: cam.cctv.index },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params, req, res }) {
    //console.log(params)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    try {
        const res = await fetch(`https://caltrans-cameras.quacksire.workers.dev/c/${params.district}/${params.index}`)
        let camera = await res.json()
        camera = camera[0]
        // Pass post data to the page via props
        return { props: { camera } }
    } catch (e) {
        let pageError = {
            error: "Render Error"
        }
        return { props: { pageError } }
    }
}


export default Camera
