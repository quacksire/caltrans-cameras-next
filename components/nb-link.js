import { Navbar } from "@nextui-org/react";
import { useRouter } from 'next/router'
export default function NavbarItem({ props }) {
    const router = useRouter()
        //if (router.pathname === props.href || !props.href) {
        //    return <Navbar.Link isActive href={props.href}> {props.children} </Navbar.Link>
        //} else {
        //    return <Navbar.Link href={props.href}> {props.children} </Navbar.Link>
        //}
}
