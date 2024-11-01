/* SpringReact/src/App.jsx */
import React from 'react';
import './css/style.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import LoginForm from './components/member/LoginForm';
import BoardWriteForm from './components/board/BoardWriteForm';
import BoardList from './components/board/BoardList';
import BoardView from './components/board/BoardView';

const App = () => {
  return (
    <BrowserRouter>
            <>
                <div className='menunav'>
                    <ul>
                        <li><Link to='/'>메인화면</Link></li>
                        <li><Link to='/loginForm'>로그인</Link></li>
                        <li><Link to='/logout'>로그아웃</Link></li>
                        <li><Link to='/board/boardWriteForm'>글쓰기</Link></li>
                        <li><Link to='/board/boardList'>목록</Link></li>
                    </ul>
                </div>
            </>
            {/* 화면에 보이는 영역 */}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/loginForm" element={<LoginForm />} />
              <Route path="/board/boardWriteForm" element={<BoardWriteForm />} />
              <Route path="/board/boardList" element={<BoardList />} />
              <Route path="/board/boardView" element={<BoardView />} />
            </Routes>
        </BrowserRouter>
  );
};

export default App;