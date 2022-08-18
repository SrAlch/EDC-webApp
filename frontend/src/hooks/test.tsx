import React from "react";
import {useState, useEffect} from "react";

const initialState = {
    name: "",
    address:""
};

export const useTestFetch = () => {
    const [test, setTest] = useState(initialState);

    useEffect( () => {
        fetch('http://localhost:5000/test', {
            method :'GET',
            headers : {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(response => setTest(response))
    }, []);

    return { test, setTest}
};