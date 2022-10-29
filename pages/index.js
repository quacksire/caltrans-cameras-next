import {Button, Grid} from "@nextui-org/react";
import CameraCard from "../components/CameraCard";
import Link from "next/link";

export default function Home({ districts }) {
  return (
      <>
        <h1> Hello. This is under construction. Check Back Later</h1>
          <Grid.Container gap={2} justify="center">
                  {districts.map((district) => (
                      <Grid key={district}>
                          <Link href={`/cams/${district}`}>
                              <Button color="primary" auto>
                                  District {district}
                              </Button>
                          </Link>
                      </Grid>
                  ))}
          </Grid.Container>

      </>
  )
}
export async function getStaticProps() {
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
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            districts,
        },
    };
}
