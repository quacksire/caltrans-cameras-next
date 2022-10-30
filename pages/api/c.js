// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Weather.js
export default async function handler(req, res) {
    let request = fetch(`https://caltrans-cameras.quacksire.workers.dev/c/${req.query.i}/${req.query.d}`, {
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
