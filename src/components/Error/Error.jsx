import React from 'react';
import errorBg from '../../assets/error-background-1.jpg'

const Error = () => {
    const styles = {
        backgroundImage: `url(${errorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        textAlign : 'center'
      };
    return (
        <>
            <div style={styles}>
            <div className=' container text-white'>
                <h1 className='' style={{fontSize: '80px'}}><span className='text-warning'>404</span></h1>
                <div style={{width:'70px', height:'2px',  background:'#777', margin: '10px auto'}}></div>
                <p>Page Not Found!</p>
                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted</p>
                
            </div>
        </div>
        </>
    );
};

export default Error;