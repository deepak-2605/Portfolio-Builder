import React from 'react';
import AuthContext from './AuthContext';

const AuthState = (props) => {
    const url = "http://localhost:5000";

    const userLogin = async()=>{
        window.location.href = `${url}/auth/microsoft`;
    }

    const getToken = async(code)=>{
        const response = await fetch(`${url}/auth/microsoft/getToken`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Code': code
            }
        });

        const json=await response.json();
        console.log(json.studInformation)
        localStorage.setItem('studName',json.studInformation.givenName);
        localStorage.setItem('studId',json.studInformation.mail);
        localStorage.setItem('studRoll',json.studInformation.surname);
        localStorage.setItem('studJob',json.studInformation.jobTitle);
    }

    const logout=async()=>{
        
        const tenantID = process.env.MICROSOFT_GRAPH_TENANT_ID;
        const logoutEndpoint = `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.REACT_APP_FRONTEND_URL}`;
        window.location.href = logoutEndpoint;
    }

    return (<AuthContext.Provider value={{ userLogin,getToken }}>
                {props.children}
            </AuthContext.Provider>)
}

export default AuthState;