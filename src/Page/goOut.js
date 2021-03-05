import React from "react";
import {useDispatch} from "react-redux";
import {setLogged} from "../redux/reducers/reposReducer";

export default function GoOut() {
    const dispatch = useDispatch();
    dispatch(setLogged(0))
    return <h2>You've gone</h2>
}