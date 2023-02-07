import { Navbar, Button, Link, Text, Dropdown, Collapse } from "@nextui-org/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
export default function NavBar() {
  let router = useRouter();


  return (
    <>
      <Navbar isCompact maxWidth={"fluid"} variant={"sticky"} css={{zIndex: "100"}}>
        <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            variant="underline"
        >
          <Navbar.Link  onPress={() => { router.push("/")}}>Home</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content enableCursorHighlight>
          <Navbar.Link  onPress={() => { router.push("/about")}}>About</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
