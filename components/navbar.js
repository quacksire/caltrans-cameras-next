import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { useRouter } from "next/router";
export default function NavBar() {
  const collapseItems = [
    "Home",
    "Cameras",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  let router = useRouter();

  return (
    <>
      <Navbar isBordered variant="floating" css={{ zIndex: 5}}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Caltrans Cameras
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight="true"
          isCursorHighlightRounded="true"
          hideIn="xs"
        >
          <Navbar.Link
            href="#"
            onHover={() => {
              router.prefetch(`/`);
            }}
            onClick={() => {
              setTimeout(() => {
                router.push(`/`);
              }, 50);
            }}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            onHover={() => {
              router.prefetch(`/cams/1`);
            }}
            onClick={() => {
              setTimeout(() => {
                router.push(`/cams/1`);
              }, 50);
            }}
          >
            Cameras
          </Navbar.Link>
          <Navbar.Link
            href="#"
            onHover={() => {
              router.prefetch(`/cms`);
            }}
            onClick={() => {
              setTimeout(() => {
                router.push(`/cms`);
              }, 50);
            }}
          >
            CMS
          </Navbar.Link>
          <Navbar.Link href="#"></Navbar.Link>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>

        <Navbar.Content>
          <Navbar.Link color="inherit" href="/about">
            About
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
