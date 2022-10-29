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



import {Container, Text, Grid} from "@nextui-org/react";
import dynamic from 'next/dynamic'
const StreamPlayer = dynamic(() => import('../../../components/StreamPlayer'), {
    ssr: false,
})
//import StreamPlayer from "../../../components/StreamPlayer"
function Camera({ camera }) {
    if (camera.error) {
        return (
            <Container fluid center>
                <Text h1 color="white"> {camera.error} </Text>
                <br />

            </Container>
        )
    }

    return (
            <Container fluid center>
                <Text h1 color="white"> {camera.location.locationName} </Text>
                <br />
                <Grid.Container gap={2} justify="center">
                    <Grid xs={4}>
                        <StreamPlayer />
                    </Grid>
                    <Grid xs={4}>

                    </Grid>
                </Grid.Container>

            </Container>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://caltrans-cameras-cams.quacksire.workers.dev')
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
export async function getStaticProps({ params }) {
    //console.log(params)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    try {
        const res = await fetch(`https://caltrans-cameras-cams.quacksire.workers.dev/d${params.district}`)
        const cameras = await res.json()
        let realIndex;
        cameras.forEach((cam, index) => {
            if (cam.cctv.index === params.index) {
                realIndex = index
            }
        })
        const camera = cameras[realIndex].cctv

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
