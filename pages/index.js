import {Button, Grid, Loading} from "@nextui-org/react";
import CameraCard from "../components/CameraCard";
import Link from "next/link";
import {useRouter} from "next/router";
import Head from "next/head";

export default function Home({ districts }) {
    const router = useRouter()
    console.log(districts)
  return (
      <>
          <Head>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                    crossOrigin="anonymous" />
          </Head>
        <h1> Hello. This is under construction. Check Back Later</h1>
          <Grid.Container gap={2} justify="center">
                  {districts.map((district) => (
                      <Grid key={district}>
                              <Button flat color="primary" id={`nav-btn-${district}`}auto href={`/cams/${district}`} onHover={() => {router.prefetch(`/cams/${district}`)}} onClick={() => {
                                  router.push(`/cams/${district}`);
                                  document.getElementById(`nav-btn-${district}`).innerHTML = `<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>`}}
                                  >
                                  District {district}
                              </Button>
                      </Grid>
                  ))}
              <Grid>
                  <Button flat color="primary" id={`nav-btn-cms`} auto href={`/cms`} onHover={() => {router.prefetch(`/cms}`)}} onClick={() => {
                      router.push(`/cms`);
                      document.getElementById(`nav-btn-cms`).innerHTML = <Loading />}}
                  >
                      Changeable Message Signs
                  </Button>
              </Grid>
          </Grid.Container>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                  crossOrigin="anonymous"></script>
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
