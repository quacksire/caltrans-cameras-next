// posts will be populated at build time by getStaticProps()
import { Grid} from "@nextui-org/react";
import CmsCard from "../components/CmsCard";

export default function Browse({ cms }) {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <h1> Changeable Message Signs </h1>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={1} justify="center">
        {cms.map((sign) => (
          <Grid key={sign.cms.index}>
            <CmsCard cms={sign}></CmsCard>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let districts = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let data = [];
  //console.log("Checking", districts.length, "Districts");
  for (var i = 0; i <= districts.length - 1; i++) {
    let short;
    if (
      String(districts[i]).charAt("0") === "0" &&
      String(districts[i]) !== "0"
    ) {
      short = districts[i].charAt(1);
    } else {
      short = districts[i];
    }

    const res = await fetch(
      `https://cwwp2.dot.ca.gov/data/d${short}/cms/cmsStatusD${districts[i]}.json`
    );

    let cameras = await res.json();
    //console.log("+", cameras.data.length);
    data.push(...cameras.data);
  }

  let cms = data;
  //console.log(cms)
  //let district = params.district
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time //
  return {
    props: {
      cms,
      //district
    },
  };
}
