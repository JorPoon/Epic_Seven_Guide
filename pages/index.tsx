import Homepage from "../components/landing/Homepage"
import { Container, Grid } from '@material-ui/core'

const Index = (props) => {
    return (
        <Container>
            <Grid container alignItems="center" justify="center" direction="column">
                <h1>JMP GAMES</h1>
                <Homepage />
            </Grid>
        </Container>
    )
}



export default Index