import React , { useContext,useEffect, useState } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
    const { getToken , logOut } = useContext(AuthContext);
    const [ searchParams,setSearchParams ] = useSearchParams();
    const [studInfo,setStudInfo] = useState({ name : "" , email : "", roll : ""});


    const getItem = async () => {
        const code = searchParams.get('code');  

        if(localStorage.getItem('studName') === null && code)
          await getToken(code);
    }

    useEffect(()=>{
        getItem();
        document.body.classList.add("disable-scrolling");
    },[]);

    studInfo.roll=localStorage.getItem('studRoll');
    studInfo.name=localStorage.getItem('studName');

    const logOutHandler = async () => {
        localStorage.clear('studName','studId','studRoll','studJob');
        await logOut();
    }

    return (
        <div>
            <div className='w-full'>
                <div className='w-full h-48 bg-black text-white'>
                    <div className='text-end'>
                        <button className='bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 my-2 mr-5' onClick={logOutHandler}>Log Out
                        </button>
                    </div>
                    <div className='p-2 m-4'>
                        <div className='text-3xl font-bold p-2'>Welcome {studInfo.name} 👋</div>
                        <div className='text-2xl font-semibold p-2'>{studInfo.roll}</div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;