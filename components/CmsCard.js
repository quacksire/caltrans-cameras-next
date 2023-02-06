import {Card, Grid, Text} from "@nextui-org/react";
import Shield from "./Shield";
import {useEffect, useState} from "react";
export default function CmsCard(props) {
    let cms = props.cms.cms;

    const [page, setPage] = useState(0);


    useEffect(() => {
        //console.log(String(cms.message.display).includes("Extended"))
        if (String(cms.message.display).includes("Extended")) {
            setTimeout(() => {
                if (page === 0) {
                    setPage(1);
                } else {
                    setPage(0);
                }
            }, parseInt(cms.message.displayTime) * 1000)
        }
    })

    return (
        <Card css={{ mw: "330px" }}>
            <Card.Header>
                <Grid.Container>
                    <Grid>
                        <Shield route={cms.location.route} />
                    </Grid>
                    <Grid>
                        <Text h4 css={{ paddingLeft: "10px", paddingTop: "10px"}}>{cms.location.nearbyPlace}</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$9" }}>
                <Text
                    css={{
                        py: "$10",
                        backgroundColor: "black",
                        textAlign: "center",
                        lineHeight: "1.1",
                        thickness: "5px",
                        fontWeight: "500",
                        color: "yellow",
                        align: "center",
                    }}
                >
                    {page === 0 ? cms.message.phase1.phase1Line1 || ". " : cms.message.phase2.phase2Line1 || "."}
                    <br />
                    {page === 0 ? cms.message.phase1.phase1Line2 || "." : cms.message.phase2.phase2Line2 || "."}
                    <br />
                    {page === 0 ? cms.message.phase1.phase1Line3 || "." : cms.message.phase2.phase2Line3 || "."}
                </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
                    <Text small css={{ color: "$accents5"}}>Last updated on {" "} {new Date(`${cms.recordTimestamp.recordDate} ${cms.recordTimestamp.recordTime}`).toLocaleString()}</Text>
            </Card.Footer>
        </Card>
    );
}
