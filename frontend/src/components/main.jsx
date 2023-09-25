import React , { useContext,useEffect } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
    const { getToken } = useContext(AuthContext);
    const [ searchParams,setSearchParams ] = useSearchParams();

    const getItem = async () => {
        const code=searchParams.get('code');  
  
        if(localStorage.getItem('studName') === null && code)
          await getToken(code);
    }

    useEffect(()=>{
        getItem();
        document.body.classList.add("disable-scrolling");
    },[]);

    return (
        <div>
        main
        </div>
    )
}

export default HomePage;