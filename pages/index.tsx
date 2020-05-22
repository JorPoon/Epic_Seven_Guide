import Homepage from "../components/landing/Homepage"
import { Container, Grid, Toolbar } from '@material-ui/core'
import NavBar from "../components/nav/NavBar"

const Index = (props) => {
    return (
        <>
        <NavBar/> 
        <Container>
            <Grid container alignItems="center" justify="center" direction="column">
                <h1>JMP GAMES</h1>
                <Homepage />
            </Grid>
        </Container>
        </>
    )
}



export default Index