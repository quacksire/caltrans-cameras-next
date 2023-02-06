import {Button, Grid, Loading, Spacer} from "@nextui-org/react";
import CameraCard from "../components/CameraCard";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./menu";
import Image from "next/image";
import Center from "../components/Center";

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

  return (
    <>
      <Center>
          <h1> Caltrans Cameras </h1>
      </Center>

      <Spacer y={1} />
      <Menu />
      <Spacer y={1} />
        <Center>
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
        Overhead Message Signs
      </Button>
        </Center>


      {/*<Button
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
          </Button> */}
    </>
  );
}
