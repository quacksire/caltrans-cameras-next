// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
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
  console.log("Checking", districts.length, "Districts");
  res.status(100);
  for (var i = 0; i <= districts.length - 1; i++) {
    res.send(100);
    let short;
    if (
      String(districts[i]).charAt("0") == "0" &&
      String(districts[i]) != "0"
    ) {
      short = districts[i].charAt(1);
    } else {
      short = districts[i];
    }

    const res = await fetch(
      `https://cwwp2.dot.ca.gov/data/d${short}/cctv/cctvStatusD${districts[i]}.json`
    );

    let cameras = await res.json();
    console.log("+", cameras.data.length);
    data.push(...cameras.data);
  }
  res.send(data);
}
