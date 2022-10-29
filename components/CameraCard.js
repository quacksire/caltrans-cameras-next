import {Card, Col, Text} from "@nextui-org/react";
import Link from "next/link";

export default function Load(props) {
  let cam = props.camera.cctv;

  return (
     <Link href={`/cam/${cam.location.district}/${cam.index}`}>
    <Card isPressable isHoverable variant="flat" css={{ mw: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text
            size={12}
            weight="bold"
            transform="uppercase"
            color="#ffffffAA"
            css={{ backgroundColor: "black" }}
          >
            {cam.location.route}
          </Text>
          <Text h4 color="white" css={{ backgroundColor: "black" }}>
            {cam.location.nearbyPlace}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={cam.imageData.static.currentImageURL}
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
    </Card>
     </Link>
  );
}
