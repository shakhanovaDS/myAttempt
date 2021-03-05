import { Button, Card, Elevation } from "@blueprintjs/core";
import React, {useState} from "react";
import '../Style/signin.css';
import {useDispatch, useSelector} from "react-redux";
import {setLogged} from "../redux/reducers/reposReducer";
const jwt = require('jsonwebtoken')
export default function Sign () {
    const dispatch = useDispatch();
    const[password, setPassword] = useState("");
    const[login, setLogin] = useState("");
    const[confirmedPassword, setConfirmedPassword] = useState("");

    function comparePassword(){
        alert(password === confirmedPassword)
        return password === confirmedPassword;
    }

    function passwordHandler(e){
        setPassword(e.target.value)
    }

    function confirmedPasswordHandler(e){
        setConfirmedPassword(e.target.value)
    }

    function submitHandler(){
        if (login !== ""){
            const token = jwt.sign(
                {userId: 1},
                'hello',
                {expiresIn: '1h'}
            )
            dispatch(setLogged(1))
            alert("logged")
        }
        else {
            dispatch(setLogged(0))
        }

    }

    function loginHandler(e){
        setLogin(e.target.value)
    }

    return(
        <div>

            {/*<div className='videobg'>*/}
            {/*    <video width="100%" height="auto" preload="auto" autoPlay="autoplay"*/}
            {/*           loop="loop">*/}
            {/*        <source src="../Bokeh.mp4" type="video/mp4"/>*/}

            {/*    </video>*/}
            {/*</div>*/}

            <div style={{'float':'left', 'margin-left':'20%', 'width':'25%', 'margin-top':'10%'}} class="bp3-card .modifier">
            <Card interactive={true} elevation={Elevation.TWO}>
                <h3 className='text'>Регистрация</h3>
                <p className='text'> Придумайте логин</p>
                <div className="bp3-input-group .modifier myinput">
                    <input type="text" className="bp3-input" placeholder="Enter your login..." onChange={loginHandler} />
                </div>
                <p className='text'>Придумайте пароль</p>
                <div class="bp3-input-group .modifier myinput">
                    <input type="password" class="bp3-input" placeholder="Enter your password..." onChange={passwordHandler} />
                <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock"/>
                </div>
                <p className='text'>Повторите пароль</p>
                <div className="bp3-input-group .modifier myinput">
                    <input type="password" className="bp3-input" placeholder="Repeat your password..." onChange={confirmedPasswordHandler} />
                    <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock"/>
                </div>
                <p className='text'><Button onClick={submitHandler}>Submit</Button></p>
            </Card>
            </div>

                <div style={{'float':'right', 'margin-right':'20%', 'width':'25%', 'margin-top':'10%'}} class="bp3-card .modifier">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <h3 className='text'>Вход</h3>
                    <p className='text'>Ваш логин</p>
                    <div className="bp3-input-group .modifier myinput">
                        <input type="text" className="bp3-input" placeholder="Enter your login..."
                               onChange={loginHandler}/>
                    </div>
                    <p className='text'>Ваш пароль</p>
                    <div className="bp3-input-group .modifier myinput">
                        <input type="password" className="bp3-input" placeholder="Enter your password..."
                               onChange={confirmedPasswordHandler}/>
                        <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock"/>
                    </div>
                    <p className='text'><Button onClick={submitHandler}>Submit</Button></p>
                </Card>
            </div>
        </div>

    )
}
