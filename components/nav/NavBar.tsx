import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const NavBar: React.FC = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        JMP GAMES
                    </Typography>
                    <Link href="/index" as="/">
                        <a>Home</a>
                    </Link>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}


export default NavBar