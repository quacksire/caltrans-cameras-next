import {Card, Col, Grid, Text} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import Shield from "./Shield";
import center from "./cssCenter";
export default function Load(props) {
  let cam = props.camera.cctv;

  return (
    <Link href={`/cam/${cam.location.district}/${cam.index}`}>
      <Card isPressable isHoverable variant="flat" css={{ mw: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col css={center}>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
              css={{ backgroundColor: "black" }}
            >
              <Grid.Container>
                <Grid>
                  <Shield route={cam.location.route} width={36} height={36} />
                </Grid>
                <Grid>
                  <Text h6 css={{ paddingLeft: "10px", paddingTop: "7px"}}> {cam.location.route}</Text>
                </Grid>
              </Grid.Container>
            </Text>
            <Text h4 color="white" css={{ backgroundColor: "black" }}>
              {cam.location.nearbyPlace}
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src={
            cam.imageData.static.currentImageURL || "https://picsum.photos/340"
          }
          objectFit="cover"
          width={260}
          height={320}
          showSkeleton
          alt="Card image background"
        />
      </Card>
    </Link>
  );
}
