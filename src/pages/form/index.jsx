import React from "react";
import LoginForm from "../components/loginForm";
import {Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    teeth:{
        display: 'flex'
    },
    backImg: {
        width: '100vw',
        height:'100vh'
    },
    formImg:{
        width: "100%", height: "100%", objectFit: "cover", borderRadius:'40px'
    }

})

function Form() {
    const classes = useStyle()
    return (
        <div className={classes.teeth}>
            <img src={require('../../assets/LoginBack.png')} className={classes.backImg} alt="backgroundImage"/>

            <Grid container direction="row" justifyContent={"space-between"} style={{
                borderRadius: "40px",
                marginTop: "60px",                       //buradaki style kodlarını yukarı taşıyınca bozuluyor sebebini bulamadım
                position: "absolute",                    //bilen varsa yardımcı olabilir mi
                backgroundColor: 'white',
                width: '85%',
                marginLeft: '8%',
            }}>
                <Grid item xs={4}>
                    <LoginForm/>
                </Grid>
                <Grid item xs={8}>
                    <img src={require("../../assets/loginForm.jpeg")}
                         className={classes.formImg} alt="loginImage"/>
                </Grid>

            </Grid>
        </div>

    )
}

export default Form