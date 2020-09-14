import React from 'react';
import Link from "next/link";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';




// const epicImage = require('../../img/epicSeven.png')
// console.log(epicImage)


const useStyles = makeStyles((theme: Theme) => 
createStyles({
    root: {
      backgroundImage: 'url(/images/epicSeven.png)',
      // backgroundSize: "cover",
      // height: "500px",
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      margin: 'auto',
      height: '1000px',
      width: '100%',
      borderRadius: 8,
      display: 'flex',
      marginTop: '10px'
    }
  }),
);

const Homepage: React.FC = () => {
    const classes = useStyles()
    return (
        <>
        <CssBaseline/>
        <Container className={classes.root} >
          {/* <img src={epicImage} alt="" className={classes.root}/> */}
            {/* <Link href="/epicSeven">
                <a>Epic Seven Heroes</a>
            </Link> */}
        </Container>
        </>
    )
}



export default Homepage
