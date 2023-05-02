import React from 'react';
import banner from '../../assets/banner.jpg'
import HeadingTitle from '../HeadingTitle/headingTitle';


const Home = () => {
    const styles = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        alignItems: 'center'
      };
    return (
        <>
        <div style={styles}>
            <div className=' container text-white'>
                <h1 className='' style={{fontSize: '60px'}}>Food Made with <span className='text-warning'>Love</span></h1>
                <p>We are fluent in making appetizing meals. Don’t settle for mediocre, <br /> choose Gourmand! Take a slice of our perfect culinary heaven!</p>
                <button className='btn btn-warning'>Contact now</button>
            </div>
        </div>
        <div className='bg-white py-5'>
            <HeadingTitle
                title = 'who we are'
                description= 'Everything You Want to Know'
            ></HeadingTitle>
        </div>
        </>
    );
};

export default Home;