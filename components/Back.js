import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router'
export default function Back() {
    const router = useRouter()
    return <Button shadow bordered color="primary" auto css={{ d: 'flex', flexWrap: 'nowrap' }} onClick={() => router.back()}>{"< Back"}</Button>;
}
