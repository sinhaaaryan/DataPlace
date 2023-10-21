import React from 'react';

interface ImgProps extends React.HTMLProps<HTMLImageElement> {
  src: string;
  alt: string;
}

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div className="voices">
        <div className="voice">Voice 1</div>
        <div className="voice">Voice 2</div>
        <div className="voice">Voice 3</div>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
    </div>
  );
};
