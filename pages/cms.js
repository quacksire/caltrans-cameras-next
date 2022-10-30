// posts will be populated at build time by getStaticProps()
import {Grid, Text, Card, Row} from "@nextui-org/react";
import CameraCard from "../components/CameraCard";
import Back from "../components/Back";
import Shield from "../components/Shield";
import Head from "next/head";



export default function Browse({ cms, district }) {
    return (
        <>

            <Grid.Container gap={2} justify="center">
                <Grid>
                    <h1> Changeable Message Signs </h1>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={1} justify="center">
                {cms.map((sign) => (
                            <Grid key={sign.cms.location.locationName}>
                                <Card css={{mw: "330px"}}>
                                    <Card.Header>
                                        <Text b> <Shield route={sign.cms.location.route}/>{sign.cms.location.route}</Text>
                                    </Card.Header>
                                    <Card.Divider/>
                                    <Card.Body css={{py: "$10"}}>
                                        <Text css={{py: "$10", backgroundColor: "black", textAlign: "center", lineHeight: "1.1", thickness:"4px", fontWeight:"500", fontFamily:"Raleway Dots", color: "yellow", align: "center"}}>
                                            {sign.cms.message.phase1.phase1Line1}
                                            <br />
                                            {sign.cms.message.phase1.phase1Line2}
                                            <br/>
                                            {sign.cms.message.phase1.phase1Line3}
                                        </Text>
                                    </Card.Body>
                                    <Card.Divider/>
                                    <Card.Footer>
                                        <Row justify="flex-end">
                                            {sign.cms.recordTimestamp.recordDate} {sign.cms.recordTimestamp.recordTime}
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                ))}
            </Grid.Container>
        </>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
/*
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

    // cms.location.
    // [route, county, nearbyPlace, milepost, direction]

    // Get the paths we want to pre-render based on posts
    const paths = districts.map((district) => ({
        params: { district: district},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

 */
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    let districts = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    let data = [];
    //console.log("Checking", districts.length, "Districts");
    for (var i = 0; i <= districts.length - 1; i++) {
        let short;
        if (
            String(districts[i]).charAt("0") == "0" &&
            String(districts[i]) != "0"
        ) {
            short = districts[i].charAt(1);
        } else {
            short = districts[i];
        }

        const res = await fetch(
            `https://cwwp2.dot.ca.gov/data/d${short}/cms/cmsStatusD${districts[i]}.json`
        );

        let cameras = await res.json();
        //console.log("+", cameras.data.length);
        data.push(...cameras.data);
    }

    let cms = data
    //console.log(cms)
    //let district = params.district
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time //
    return {
        props: {
            cms
            //district
        },
    };
}
