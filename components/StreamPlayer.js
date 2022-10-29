import React from 'react';
import { Player, Video, Ui, Hls, ClickToPlay } from '@vime/react';

export default function StreamPlayer(props) {
    return (
        <Player>
            <Video>
                <Hls version="latest">
                    <source crossOrigin="" src="https://wzmedia.dot.ca.gov/D3/5_twin_cities.stream/playlist.m3u8" type="application/vnd.apple.mpegurl" />
                </Hls>
            </Video>

            <Ui>
                <ClickToPlay />
            </Ui>
        </Player>
    );
}
