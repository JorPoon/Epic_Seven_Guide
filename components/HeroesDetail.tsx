import React, {FunctionComponent} from 'react';
import Link from "next/link";
import { Card, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

interface Details {
    name: string,
    attribute: string
    role: string,
    assets?: string
}

const useStyles = makeStyles((theme) => ({
    cardWidth: {
        minWidth: 325
    },
    media: {
        width: 375,
        height: 130
    }
}))


const HeroesDetail: React.FC <Details> = ({name, attribute, role, assets}) => {
   const classes = useStyles()
    return (
        <Link href="/hero/[id]" as={`/hero/${name.toLowerCase()}`}>
            <Card className={classes.cardWidth}>
                <CardMedia
                    className={classes.media}
                    image={assets}
                />
                <h3>{name}</h3>  
                <p>{attribute}</p>
                <p>{role}</p>
            </Card>
        </Link>
    )
}


export default HeroesDetail