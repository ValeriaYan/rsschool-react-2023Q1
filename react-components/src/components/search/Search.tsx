import React, { useState, useEffect } from 'react';

function Search() {
  const [value, setValue] = useState(localStorage.getItem('value') || '');

  useEffect(() => {
    return () => {
      if (value) {
        localStorage.setItem('value', value);
      }
    };
  });

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    console.log(value);
  }

  return (
    <>
      <div className="search">
        <input type="search" onChange={onInputChange} value={value} />
        <svg
          fill="#eeeeee"
          width="20px"
          height="20px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"></path>
        </svg>
      </div>
    </>
  );
}

export { Search };
