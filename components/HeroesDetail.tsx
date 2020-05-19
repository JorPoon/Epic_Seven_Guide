import React from 'react';
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
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    media: {
        maxWidth: "100%",
        maxheight: "auto", 
        paddingTop: '75%', 
        backgroundColor: "black",
        backgroundRepeat: "no-repeat"

    },
    content: {
        background: "white"
    },
    aTag: {
        textDecoration: "none"
    }
}))


const HeroesDetail: React.FC <Details> = ({name, attribute, role, assets, rarity}) => {
   const classes = useStyles()
    return (
        //Need to change how to link up pages dynamically(maybe)
        <Link href="/hero/[id]" as={`/hero/${name.toLowerCase()}`}>
            <a className={classes.aTag}>
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
            </a>
        </Link>
    )
}


export default HeroesDetail