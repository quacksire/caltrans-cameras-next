import {Button, Grid, Spacer, Text} from "@nextui-org/react";
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Footer() {

    return (
        <>
            <Spacer y={2} />
            <Grid.Container justify="center">
                <Grid>
                    Made with <span style={{color: "red"}}>❤</span> by <Link href="https://quacksire.dev" target={'_blank'} rel={'noreferrer'}>Quacksire</Link>
                </Grid>
            </Grid.Container>
            <Spacer y={1} />

        </>
    )
}
