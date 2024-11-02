import React, { useState } from 'react';
import styles from '../../css/LoginForm.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [result, setResult] = useState('');

    const [idDiv, setIdDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');
    const [loginDiv, setLoginDiv] = useState('');

    const navigate = useNavigate();

    const onLoginSubmit = (e) => {
        e.preventDefault();

        setId('');
        setPwd('');

        id === '' && setIdDiv('아이디 입력')
        pwd === '' && setPwdDiv('비밀번호 입력')

        axios
            .post(
                'http://211.188.49.199:8090/SpringReact/member/login', // 프로토콜 추가
                { id, pwd },
                { withCredentials: true }  // 인증 정보를 포함하여 요청
            )
            .then(response => {
                console.log(response.data);
                response.data.trim() === "SUCCESS"
                    ? navigate('/')
                    : setResult('아이디나 비밀번호가 틀렸습니다.');
            })
            .catch(error => console.error('로그인 요청 중 오류 발생:', error));
    }

    return (
        <div className={styles.main}>
            <h2>로그인</h2>
            <form onSubmit={onLoginSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input
                                    type="text"
                                    value={id}
                                    onChange={(e) => {
                                        setId(e.target.value);
                                        setIdDiv('');
                                        setLoginDiv('');
                                    }}
                                />
                                <div id={styles.idDiv}>{idDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input
                                    type="password"
                                    value={pwd}
                                    onChange={(e) => {
                                        setPwd(e.target.value);
                                        setPwdDiv('');
                                        setLoginDiv('');
                                    }}
                                />
                                <div id={styles.pwdDiv}>{pwdDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div id={styles.loginDiv}>{loginDiv}</div>
                                <button type="submit">로그인</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div id={styles.loginDiv}>{result}</div>
        </div>
    );
};

export default LoginForm;