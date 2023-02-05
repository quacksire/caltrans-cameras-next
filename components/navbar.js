import { Navbar, Button, Link, Text, Dropdown, Collapse } from "@nextui-org/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
export default function NavBar() {
  let router = useRouter();


  return (
    <>
      <Navbar isCompact isBordered variant="sticky" maxWidth={"fluid"} css={{zIndex: "100"}}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Caltrans Cameras
          </Text>

        </Navbar.Brand>
          <Navbar.Content
              enableCursorHighlight
              activeColor="secondary"
              variant="underline"
          >
            <Navbar.Link  onPress={() => { router.push("/menu")}}>Menu</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">About</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
