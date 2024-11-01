// day03/src/components/ConfirmModal.jsx
import React from 'react';
import '../css/confirmModal.css';

const Modal = ({ isOpen, onClose, children  }) => {
  if (!isOpen) return null; // 모달이 열리지 않으면 렌더링하지 않음

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Confirm</h2>
        <p>{children}</p> {/* 부모로부터 전달된 내용 표시 */}
        <div className="modalButtons">
            <button className="cancelBtn" onClick={onClose}>
                취소
            </button>
            <button className="confirmBtn" onClick={onConfirm}>
                확인
            </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
