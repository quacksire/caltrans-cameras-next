import Image from "next/image";
import {Button, Card, Collapse, Container, Grid, Loading, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

import {counties, countyDistricts, districts, routes} from "../components/lib/lists";
import Shield from "../components/Shield";





export default function Menu() {
    let router = useRouter();

    return (
        <Container>
            <Collapse
                title="By District"
            >
                <Grid.Container gap={1} justify="center">
                    {districts.map((district) => (
                        <Grid key={district}>
                            <Button
                                flat
                                color="primary"
                                id={`nav-btn-${district}`}
                                auto
                                href={`/cams/${district}`}
                                onHover={() => {
                                    router.prefetch(`/cams/district/${district}`);
                                }}
                                onClick={() => {
                                    router.push(`/cams/district/${district}`);
                                    document.getElementById(`nav-btn-${district}`).innerHTML = `<Loading css={{zIndex: "100"}} color="secondary" type="points-opacity" />`;
                                }}
                            >
                                District {district}
                            </Button>
                            </Grid>
                        ))}
                </Grid.Container>
            </Collapse>
            <Collapse
                title="By Route"
                contentLeft={<Image width={32} height={32} src={'https://shields.caltranscameras.app/SR-blank.png'} />}
            >
                <Grid.Container gap={1} justify="center">
                    {routes.map((route, index) => (
                        <Grid key={route}>
                            <Button
                                css={{zIndex: "5"}}
                                flat
                                color="primary"
                                id={`nav-btn-${route}`}
                                auto
                                href={`/cams/route/${route}`}
                                onHover={() => {
                                    router.prefetch(`/cams/route/${route}`);
                                }}
                                onClick={() => {
                                    router.push(`/cams/route/${route}`);
                                    document.getElementById(`nav-btn-${route}`).innerHTML = `<Loading css={{zIndex: "100"}} color="secondary" type="points-opacity" />`;
                                }}
                            >
                                <Shield css={{zIndex: "10"}} width={32} height={32} route={route}></Shield>
                            </Button>
                        </Grid>
                    ))}
                </Grid.Container>

            </Collapse>
            <Collapse
                title="By County"
            >
                <Grid.Container gap={1} justify="center">
                    {counties.map((county, index) => (
                        <Grid key={county}>
                            <Button
                                flat
                                color="primary"
                                id={`nav-btn-${county}`}
                                auto
                                href={`/cams/county/${String(county).toLowerCase().replace(" ", "-")}`}
                                onHover={() => {
                                    router.prefetch(`/cams/county/${String(county).toLowerCase().replace(" ", "-")}`);
                                }}
                                onClick={() => {
                                    router.push(`/cams/county/${String(county).toLowerCase().replace(" ", "-")}`);
                                    document.getElementById(`nav-btn-${county}`).innerHTML = `<Loading css={{zIndex: "100"}} color="secondary" type="points-opacity" />`;
                                }}
                            >
                                {county}
                            </Button>
                        </Grid>
                    ))}
                </Grid.Container>
            </Collapse>

        </Container>
    )
}
