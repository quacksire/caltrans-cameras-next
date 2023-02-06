import Image from "next/image";

export default function Shield(props) {
  return (
    <Image
      src={`https://shields.caltranscameras.app/${props.route}.svg`}
      alt={props.route}
      width={props.width || 50}
      height={props.height || 50}
      style={{ p: 5 }}
      blurDataURL={`https://shields.caltranscameras.app/${props.route}.svg`}
    />
  );
}
