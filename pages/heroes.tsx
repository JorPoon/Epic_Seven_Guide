import fetch from 'isomorphic-unfetch'
import HeroesDetail from "../components/heroes/HeroesDetail"
import { Container, Grid } from "@material-ui/core";
import NavBar from "../components/nav/NavBar"
import BackToTop from "../components/nav/BackToTop"



const heroes = (props) => {

    return (
        <Container >
            <NavBar/>
            <h1> Heroes</h1>
            <Grid container justify="space-evenly" alignItems="center" direction="row" alignContent="space-around">
                {props.results.map(hero => {
                    return (  
                                <HeroesDetail 
                                    attribute={hero.attribute}
                                    name={hero.name}
                                    role={hero.role}
                                    assets={hero.assets.icon}
                                    rarity={hero.rarity}
                                />
                            )
                })}
                <BackToTop/>
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