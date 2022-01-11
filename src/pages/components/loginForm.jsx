import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import {useLocation} from "react-router-dom";
import validator from 'validator';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const useStyle = makeStyles({       //sayfa csslerini mui üzerinden yapamamı sağlayıyor.
    lfTxt: {

        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center"
    },
    lfInput: {
        border: "1px solid",
        boxSizing: "border-box",
        borderRadius: "400px",
        width: "400px",
        height: "50px",

    },
    lfTitle: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "38px",
        lineHeight: "46px",
        color: "#414042",
        marginTop: "42px",
        marginLeft: "1px"
    },
    button: {
        width: "400px",
        height: "50px",
        background: "#A93159",
        borderRadius: "40px",
        color: "white",
        cursor: "pointer",
        marginTop: "10px ",
        marginBottom: "10px",
    },
    teeth: {
        marginLeft: "25px"
    }
})

function LoginForm() {
    const navigate = useNavigate()
    const classes = useStyle()                  //yazdığımız cssleri gerekli yerlere tanımlamak için değişkene atıyoruz
    const location = useLocation()              //Hangi url de olduğumuzu bulmamızı sağlıyor.
    const [password, setPassword] = useState('')
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
        lastName: ''
    })

    async function login() {
        if (!validator.isEmail(data.email)) return alert("email hatalı")
        await axios.get('https://61c7a49f903185001754748c.mockapi.io/users').then(response => {              //apiye istek atıp verileri getiriyorum
            const userData = response.data.find(r => (r.email === data.email && r.password === data.password))   //gelen veriler kullanıcının girdiği verilere eşit ise verileri dönüyor
            return userData ? navigate('/') : alert("Email veya şifre hatalı. Lütfen tekrar deneyiniz")          //giriş yaptıktan sonra hatalı değil ise landing page yönlendiriyorum
        }).catch(response => {
            console.log(response.status, "boom")
        })
    }

    async function register() {
        if (!validator.isEmail(data.email)) return alert("email hatalı")                                                //emaili, şifreyi ve birçok veriyi kontrol etmemizi sağlayan güzel bir paket
        if (data.password === '' || data.name === '' || data.lastName === '') return alert("tüm alanları doldurun")
        if (data.password !== password) return alert("şifreler eşleşmiyor")
        if (!validator.isStrongPassword(data.password, {
            minLength: 5,
            minUppercase: 0,
            minLowercase: 0,
            minSymbols: 0
        })) return alert("şifre koşulları sağlamıyor")
        const response = await axios.get('https://61c7a49f903185001754748c.mockapi.io/users').then(response => {    //aynı email ile kayıt olunması diye kayıt olunacak emaili kontrol ediyorum
            return response.data.find(r => (r.email === data.email))
        })
        if (response) return alert("email mevcut")
        await axios.post('https://61c7a49f903185001754748c.mockapi.io/users', data).then(r =>                       //Kullanıcıyı kayıt edip landin page yönlendiriyor
            r ?  navigate("/") : alert("BOOM")
        )
    }

    return (
        <div className={classes.teeth}>
            <p className={classes.lfTitle}> {location.pathname === '/login' ? 'Login' : 'Register'}</p>
            <p className={classes.lfTxt}>Email</p>
            <input className={classes.lfInput} onChange={event => setData(prevState => ({
                ...prevState,
                email: event.target.value
            }))}/>
            <p className={classes.lfTxt}>Password</p>
            <input className={classes.lfInput} onChange={event => setData(prevState => ({
                ...prevState,
                password: event.target.value
            }))}/>
            {location.pathname === '/register' ?                //kullanıcı register sayfasında ise farklı sayfa render etmek için kontrol
                <>
                    <p className={classes.lfTxt}>Password</p>
                    <input className={classes.lfInput} onChange={event => setPassword(event.target.value)}/>
                    <p className={classes.lfTxt}>First Name</p>
                    <input className={classes.lfInput} onChange={event => setData(prevState => ({
                        ...prevState,
                        name: event.target.value
                    }))}/>
                    <p className={classes.lfTxt}>Last Name</p>
                    <input className={classes.lfInput} onChange={event => setData(prevState => ({
                        ...prevState,
                        lastName: event.target.value
                    }))}/>
                </>
                : null}
            {location.pathname === '/login' ?               //kullanıcı form sayfasında ise farklı sayfa render etmek için kontrol
                <>
                    <p className={classes.lfTxt}>Forgot Password?</p>
                    <button className={classes.button} onClick={login}>Sign In</button>
                    <p className={classes.lfTxt}>Don’t have an account yet? &nbsp; <a href="/register">Register for
                        free</a></p>
                </>
                :
                <button className={classes.button} onClick={register}>Sign Up</button>
            }

        </div>
    )
}

export default LoginForm