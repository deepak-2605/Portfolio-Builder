import React from 'react';
import AuthContext from './AuthContext';

const AuthState = (props) => {
    const url = "http://localhost:5000"

    const getToken = async(code)=>{
        const response = await fetch(`${url}/auth/microsoft/getToken`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Code': code
            }
        });

        const json=await response.json();
        localStorage.setItem('studName',json.studInformation.givenName);
        localStorage.setItem('studId',json.studInformation.mail);
        localStorage.setItem('studRoll',json.studInformation.surname);
        localStorage.setItem('studJob',json.studInformation.jobTitle);
    }

    return (<AuthContext.Provider value={{}}>
                {props.children}
            </AuthContext.Provider>)
}

export default AuthState;