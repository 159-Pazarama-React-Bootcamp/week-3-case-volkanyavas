import React from "react";
import {Grid} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom'
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    teeth:{
        display:"flex"
    },
    landingContainer: {
        marginTop: "10%",
        marginLeft:"10%"
    },
    helloImg: {
        width: "182px", height: "58px"
    },
    icon: {
        marginLeft:"50%"
    },
    landingButton: {
        width: "530px",
        height: "90px",
        backgroundColor: "#EA5050",
        borderRadius: "100px",
        color: "white",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "168%",
        textDecorationLine:"underline",
        cursor:"pointer",
        marginTop:"10%"
    }

})


function Landing() {
    const navigate = useNavigate()
    const classes = useStyles()
    return (
        <div className={classes.teeth}>

            <Grid container justifyContent={"space-between"} direction="row" className={classes.landingContainer}>
                <Grid item xs={4}>
                    <img src={require("../../assets/Hello.png")} alt="hello" className={classes.helloImg}/>
                    <p>
                        I hope everyone is safe and sound.
                        I designed different type of lending pages,application. it can help others to develop more ideas
                        from this. I keep it simple and minimal. It can also help you find different options in
                        exploring and improving your skills.
                    </p>
                    <p>I am available for new projects. I hope you show me your support 😄</p>
                    <p>I wish you luck,<br/> Drax❤️</p>
                    <br/>
                    <ArrowDownwardIcon className={classes.icon}/>

                    <button className={classes.landingButton} onClick={event => navigate('/login')}>Buy me a coffee
                    </button>

                </Grid>
                <Grid item xs={7}>
                    <img src={require("../../assets/Frame.png")} alt="frame"/>
                </Grid>
            </Grid>


        </div>
    )
}

export default Landing