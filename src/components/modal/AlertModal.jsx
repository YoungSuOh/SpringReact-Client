// SpringReact/src/components/modal/AlertModal.jsx

import React from 'react';
import styles from '../../css/AlertModal.module.css';

const AlertModal = ({ isAlertOpen, onAlertOk, message }) => {
  if (!isAlertOpen) return null; // 모달이 열리지 않으면 렌더링하지 않음

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Alert</h2>
        <p>{message}</p> {/* 부모로부터 전달된 메시지 표시 */}
        <div className={styles.modalButtons}>
          <button className={styles.okBtn} onClick={onAlertOk}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
