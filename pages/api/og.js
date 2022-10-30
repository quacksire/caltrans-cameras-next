import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
export const config = {
    runtime: 'experimental-edge',
};

export default function handler(req) {
    try {
        const { searchParams } = new URL(req.url);

        // ?route=SR-1&nearby=Fort Bragg&image=
        const route = searchParams.get('route') || null;
        const nearby = searchParams.get('nearby') || null;
        const image = searchParams.get('image') || null;



        return new ImageResponse(
            (
                <div
                    style={{
                        backgroundColor: 'black',
                        backgroundSize: '150px 150px',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <img
                            alt="Vercel"
                            height={200}
                            src={`https://shields.caltranscameras.app/${route}.svg`}
                            style={{ margin: '0 30px' }}
                            width={232}
                        />
                    </div>
                    <div
                        style={{
                            fontSize: 60,
                            fontStyle: 'normal',
                            letterSpacing: '-0.025em',
                            color: 'white',
                            marginTop: 30,
                            padding: '0 120px',
                            lineHeight: 1.4,
                            whiteSpace: 'pre-wrap',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        Near {nearby}
                    </div>
                </div>
            ),
            {
                width: 2400,
                height: 1260,
            },
        );
    } catch (e) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image | ${e}`, {
            status: 500,
        });
    }
}
