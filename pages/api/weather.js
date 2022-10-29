// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Weather.js
export default async function handler(req, res) {
    req.query.lng
    req.query.lat
    let request = fetch(`https://api.weather.gov/points/${req.query.lat},${req.query.lng}`, {
            headers: {
                'User-Agent': `Caltrans Cameras <sam+cc@quacksire.dev>`,
                'Accept': "application/ld+json"
            }
        }
    );
    let result = await request.json()
    console.log(result)

    res.send(result)
}
