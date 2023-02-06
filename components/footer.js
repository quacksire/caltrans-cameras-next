import {Button, Grid, Spacer, Text} from "@nextui-org/react";
import { useRouter } from 'next/router'
export default function Footer() {

    return (
        <>
            <Spacer y={2} />
            <Grid.Container justify="center">
                <Grid>
                    Made with <span style={{color: "red"}}>❤</span> by <a href="https://quacksire.dev">Quacksire</a>
                </Grid>
            </Grid.Container>
            <Spacer y={1} />

        </>
    )
}
