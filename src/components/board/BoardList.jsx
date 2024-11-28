/* SpringReact/src/components/board/BoardList.jsx */
import React, { useState, useEffect } from 'react';
import styles from '../../css/BoardList.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BoardList = () => {
    const [list, setList] = useState([]);

        useEffect(() => {
            axios
                .get('http://211.188.49.199:8090/SpringReact/board/boardList', {
                    withCredentials: true  // 쿠키를 포함한 인증 정보를 전송
                })
                .then(response => {
                    console.log(response.data);
                    setList(response.data);
                })
                .catch(error => console.error('데이터 가져오기 실패:', error)); 
        }, []);
    return (
        <div className={styles.BoardList}>
            <h1>게시물 목록</h1>
            <form>
            
            <table>
                <thead>
                <tr>
                    <th style={{width: '10%'}}>번호</th>
                    <th style={{width: '35%'}}>제목</th>
                    <th style={{width: '15%'}}>작성자</th>
                    <th style={{width: '10%'}}>조회수</th>
                    <th style={{width: '20%'}}>작성일</th>
                </tr>
                </thead>
                <tbody>
                    {
                        list.map(board => 
                            <tr key={ board.seq } >
                                <td>{ board.seq }</td>
                                <td><Link to={`/board/boardView?seq=${board.seq}`}>{ board.subject }</Link></td>
                                <td>{ board.id }</td>
                                <td>{ board.hit }</td>
                                <td>{ board.logtime }</td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
            </form>
        </div>
    );
};

export default BoardList;
