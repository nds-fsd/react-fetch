import React, { useState } from 'react';

function Modal({textOpen}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{textOpen}</button>
      {isOpen && (
        <>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <div>Modal Content</div>
        </>
      )}
    </>
  );
}

export default Modal;
