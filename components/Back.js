import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router'
export default function Back() {
    const router = useRouter()

    return <Button shadow bordered color="primary" auto css={{ d: 'flex', flexWrap: 'nowrap', top: "50%",
        left: "50%",
        mozTransform: "translateX(-50%) translateY(-50%)",
        webkitTransform: "translateX(-50%) translateY(-50%)",
        transform: "translateX(-50%) translateY(-50%)"}} onClick={() => router.back()}>{"< Back"}</Button>;
}

