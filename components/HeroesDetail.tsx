import React, {FunctionComponent} from 'react';
import Link from "next/link";
import { Card, CardMedia } from '@material-ui/core'
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
        minWidth: 225,
        margin: 10,
        alignContent: "center",
        justifyItems: "center"

    },
    media: {
        width: 275,
        height: 130
    }
}))


const HeroesDetail: React.FC <Details> = ({name, attribute, role, assets, rarity}) => {
   const classes = useStyles()
    return (
        <Link href="/hero/[id]" as={`/hero/${name.toLowerCase()}`}>
            <Card className={classes.cardWidth}>
                <CardMedia
                    className={classes.media}
                    image={assets}
                />
                <h3>{name}</h3>  
                <p> Type: {attribute}</p>
                <p> Class: {role === "manauser" ? "soul weaver" : role}</p>
                <p> Rarity: {rarity} stars</p>
            </Card>
        </Link>
    )
}


export default HeroesDetail