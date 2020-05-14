import Homepage from "../components/Homepage"
import { Container, Grid } from '@material-ui/core'

const Index = (props) => {
    return (
        <Container>
            <Grid container alignItems="center" justify="center" direction="column">
                <h1>EPIC SEVEN INFO PUB</h1>
                <Homepage />
            </Grid>
        </Container>
    )
}



export default Index