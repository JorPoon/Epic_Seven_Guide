import React from 'react';
import Link from "next/link";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: "url(img/epicSevenBg.png)",
      backgroundSize: "cover",
      height: "500px",
    }
  }),
);

const Homepage: React.FC = () => {
    const classes = useStyles()
    return (
        <>
        <CssBaseline/>
        <Container className={classes.root}>
            <Link href="/epicSeven">
                <a>Epic Seven Heroes</a>
            </Link>
        </Container>
        </>
    )
}



export default Homepage
