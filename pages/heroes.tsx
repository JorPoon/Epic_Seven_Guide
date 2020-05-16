import fetch from 'isomorphic-unfetch'
import HeroesDetail from "../components/HeroesDetail"
import { Container, Grid } from '@material-ui/core'



const heroes = (props) => {

    return (
        <Container>
            <Grid container justify="center" alignItems="center" direction="column">
                <h1>Heroes</h1>
                {props.results.map(hero => {
                    return (  
                                <HeroesDetail 
                                    attribute={hero.attribute}
                                    name={hero.name}
                                    role={hero.role}
                                    assets={hero.assets.thumbnail}
                                />
                            )
                })}
            </Grid>
        </Container>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.epicsevendb.com/hero')
    const list = await res.json() 

    return {
        props: list
    }
}

export default heroes