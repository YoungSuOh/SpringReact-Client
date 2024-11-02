import React, { useState } from 'react';
import styles from '../../css/BoardWriteForm.module.css';
import axios from 'axios';
import AlertModal from '../modal/AlertModal.jsx';
import { useNavigate } from 'react-router-dom';

const BoardWriteForm = () => {
    const [isAlertOpen, setIsAlertModalOpen] = useState(false); // 모달 상태
    const [alertMessage, setAlertMessage] = useState(''); // 알림 메시지 상태 추가

    const openAlertModal = () => setIsAlertModalOpen(true);
    const closeAlertModal = () => setIsAlertModalOpen(false);

    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const [subjectDiv, setSubjectDiv] = useState('');
    const [contentDiv, setContentDiv] = useState('');

    const navigate = useNavigate();

    const resetForm = () => {
        setSubject('');
        setContent('');
        setSubjectDiv('');
        setContentDiv('');
    };

    const onBoardWriteSubmit = (e) => {
        e.preventDefault();

        // 유효성 검사
        subject === '' && setSubjectDiv('제목 입력');
        content === '' && setContentDiv('내용 입력');

        if (subject === '' || content === '') return;

        const boardData = {
            subject: subject,
            content: content
        };

        // axios.post(url, data, config);
        // 첫 번째 인자: 요청할 URL.
        // 두 번째 인자: **본문 데이터 (data)**로 보낼 객체. POST 요청에서 이 자리에 데이터를 넣어 보냅니다.
        // 세 번째 인자: 추가적인 설정 (config) 객체로, headers, params 등이 포함됩니다.        
        axios.get('http://211.188.49.199:8090/SpringReact/board/boardWrite', {
            params: {
                subject: boardData.subject,
                content: boardData.content
            },
            withCredentials: true
        })
        .then((response) => {
            setAlertMessage('글쓰기 완료');
            openAlertModal();
            resetForm();
        })
        .catch((error) => {
            setAlertMessage('게시물 작성에 실패했습니다.');
            openAlertModal();
            console.error('Error:', error);
        });

    };

    const handleAlertOk = () => {
        closeAlertModal();
        navigate('/board/boardList');
    };


    return (
        <div className={styles.BoardWriteForm}>
            <form onSubmit={onBoardWriteSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="subject">제목</label>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                                <div id={styles.subjectDiv}>{subjectDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="content">내용</label>
                            </th>
                            <td>
                                <textarea
                                    id="content"
                                    value={content}
                                    rows={10}
                                    cols={50}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                />
                                <div id={styles.contentDiv}>{contentDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <div className={styles.btnDiv}>
                                    <button type="submit">글쓰기</button>
                                    <button type="button" onClick={resetForm}>
                                        초기화
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <AlertModal
                isAlertOpen={isAlertOpen}
                onAlertOk={handleAlertOk}
                message={alertMessage}
            />
        </div>
    );
};

export default BoardWriteForm;
