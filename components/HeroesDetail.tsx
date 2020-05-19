import React, {FunctionComponent} from 'react';
import Link from "next/link";
import { Card, CardMedia, CardContent, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

interface Details {
    name: string,
    attribute: string
    role: string,
    assets?: string,
    rarity: number
}

const useStyles = makeStyles((theme) => ({
    cardWidth: {
        minWidth: 300,
        margin: 10,
    },
    media: {
        display: "block",
        maxWidth: "100%",
        height: "100%", 
        paddingTop: '75%', 
    },
    content: {
        background: "orange"
    }
}))


const HeroesDetail: React.FC <Details> = ({name, attribute, role, assets, rarity}) => {
   const classes = useStyles()
    return (
        <Link href="/hero/[id]" as={`/hero/${name.toLowerCase()}`}>
            <Card className={classes.cardWidth}>
                <CardHeader title={name}/>
                <CardMedia
                    className={classes.media}
                    image={assets}
                />
                <CardContent className={classes.content} >
                     
                    <p> Type: {attribute}</p>
                    <p> Class: {role === "manauser" ? "soul weaver" : role}</p>
                    <p> Rarity: {rarity} stars</p>
                </CardContent>
            </Card>
        </Link>
    )
}


export default HeroesDetail