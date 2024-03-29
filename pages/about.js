import {Button, Container, Grid, Spacer, Text} from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import Center from "../components/Center";

export default function About() {

    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Center>
            <Container>
                <Text h1>About Caltrans Cameras</Text>
                <Spacer y={1} />
                <Text h4> A consolidated collection of all public available Cameras and other road related data in the state of California </Text>
                <Text h4 b blockquote> Not affiliated with Caltrans or any other government agency. </Text>
                <Text h4> Hosting is provided by <Link href={'https://railway.app?referralCode=quack'} target={'_blank'} rel={'noreferrer'}>Railway</Link> while highway shield images are hosted on R2 with <Link href={'https://www.cloudflare.com/products/r2/'} target={"_blank"} rel={'noreferrer'}>Cloudflare</Link></Text>
                <Spacer y={2} />
                <Link href={`https://nextjs.org/`} target={'_blank'} rel={'noreferrer'}><Image src={`/madeWithNext.png`} width={100} height={50} quality={100} /></Link>
                <Text h4> This site is open source and <Link href={"https://github.com/quacksire/caltrans-cameras-next/tree/SSG"} target={"_blank"} rel={'noreferrer'}>contributions are welcome!</Link> </Text>
                <Spacer y={2} />
                <Text h4> If you have any questions, comments, or concerns, please contact <Link href="mailto:hello@caltranscameras.app" target={"_blank"} rel={'noreferrer'}>hello at caltranscameras dot app</Link> </Text>
                <Text h4> If you would like to support this project, please consider <Link href="https://ko-fi.com/quacksire" target={"_blank"} rel={'noreferrer'}>buying me a snack</Link> </Text>

            </Container>
            </Center>

        </>
    )
}
