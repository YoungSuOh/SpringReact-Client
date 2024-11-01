import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='main'>
            <h1>망곰이의 홈페이지</h1>
            <h2>방문해주셔서 감사합니다.</h2>
            <Link to='/ProductList'>
            <img src="https://i.pinimg.com/736x/76/8b/c3/768bc3a37fa6dadba4cd7656b4e3f5c6.jpg" 
                alt="이거어때" 
                width="500" 
                 height="500" />

            </Link>
        </div>
    );
};

export default Main;