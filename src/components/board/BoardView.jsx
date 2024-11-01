/* SpringReact/src/components/board/BoardView.jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const BoardView = () => {
    const [board, setBoard] = useState(null); 

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const seq = params.get('seq'); // 'seq' 파라미터 값 가져오기

    useEffect(() => {
        // seq에 해당하는 게시물 상세 정보 요청
        axios
            .get(`http://localhost:8080/SpringReact/board/boardView?seq=${seq}`)
            .then((response) => {
                console.log(response.data);
                setBoard(response.data); // 게시물 데이터 설정
            })
            .catch((error) => console.error('게시물 조회 실패:', error));
    }, [seq]);

    // 데이터가 없을 때 로딩 메시지 표시
    if (!board) return <p>Loading...</p>;

    return (
        <div>
            <h2>게시물 상세 정보</h2>
            <p><strong>글번호:</strong> {board.seq}</p>
            <p><strong>작성자:</strong> {board.id}</p>
            <p><strong>글제목:</strong> {board.subject}</p>
            <p><strong>글내용:</strong></p>
            <div style={{ whiteSpace: 'pre-wrap' }}>{board.content}</div> {/* 줄바꿈 유지 */}
        </div>
    );
};

export default BoardView;
