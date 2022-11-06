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
      <Navbar isBordered variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Caltrans Cameras
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/"> Home </Navbar.Link>
          <Navbar.Link href="/cams/1">Cameras</Navbar.Link>
          <Navbar.Link href="/cms">CMS</Navbar.Link>
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
