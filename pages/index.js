import { Button, Grid, Loading } from "@nextui-org/react";
import CameraCard from "../components/CameraCard";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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

  districts.forEach(async (district) => {
    router.prefetch(`/cams/${district}`);
  });

  return (
    <>
      <h1> Hello. This is under construction. Check Back Later</h1>
      <Grid.Container gap={2} justify="center">
        {districts.map((district) => (
          <Grid key={district}>
            <Button
              flat
              color="primary"
              id={`nav-btn-${district}`}
              auto
              href={`/cams/${district}`}
              onHover={() => {
                router.prefetch(`/cams/${district}`);
              }}
              onClick={() => {
                router.push(`/cams/${district}`);
                document.getElementById(`nav-btn-${district}`).innerHTML =
                  "Loading";
              }}
            >
              District {district}
            </Button>
          </Grid>
        ))}
        <Grid>
          <Button
            flat
            color="primary"
            id={`nav-btn-cms`}
            auto
            href={`/cms`}
            onHover={() => {
              router.prefetch(`/cms`);
            }}
            onClick={() => {
              router.push(`/cms`);
              document.getElementById(`nav-btn-cms`).innerHTML = "Loading";
            }}
          >
            Changeable Message Signs
          </Button>
        </Grid>
      </Grid.Container>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
    </>
  );
}
