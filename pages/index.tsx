import Homepage from "../components/landing/Homepage"
import { Grid, Toolbar, Typography } from '@material-ui/core'
import NavBar from "../components/nav/NavBar"
import BackToTop from "../components/nav/BackToTop"

const Index = (props) => {
    return (
        <>
        <NavBar/> 
            <Grid container alignItems="center" justify="center" direction="column">
                <Typography variant="h1">Gachapon Games</Typography>
                <Homepage />
            </Grid>
        <BackToTop/>
        </>
    )
}



export default Index