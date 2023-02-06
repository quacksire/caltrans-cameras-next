
import { Grid } from "@nextui-org/react";
export default function Center(props) {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid>
                {props.children}
            </Grid>
        </Grid.Container>
    );
}
