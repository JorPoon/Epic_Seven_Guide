import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuTab from './MenuTab'


import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       position: "fixed",
//       bottom: theme.spacing(2),
//       right: theme.spacing(2),
//     },
//   }),
// );

// function ScrollTop(props) {
//     const { children, window } = props;
//     const classes = useStyles();
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//       target: window ? window() : undefined,
//       disableHysteresis: true,
//       threshold: 100,
//     });

const NavBar: React.FC = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        <Link href="/index" as="/">  
                            Gachapon Games
                        </Link>
                    </Typography>    
                    <MenuTab name="Epic Seven"/>
                    {/* <MenuTab name="Exos Heroes"/> */}
                    <MenuTab name="Fate Grand"/>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor"/>
        </>
    )
}


export default NavBar