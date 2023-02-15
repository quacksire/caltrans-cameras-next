import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

export default function Shield(props) {
  return (
  <Tooltip content={props.route}>
    <Image
      src={`https://shields.caltranscameras.app/${props.route}.svg`}
      alt={props.route}
      width={props.width || 50}
      height={props.height || 50}
      style={{ p: 5 }}
      blurDataURL={`https://shields.caltranscameras.app/${props.route}.svg`}
     />
   </Tooltip>
  );
}
