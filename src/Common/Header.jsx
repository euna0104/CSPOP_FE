import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: 'NanumGothicBold';

  .bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgb(38,31,68) !important;
  }
`;

const linkStyles = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px'
};

const Header = () => {

  return (
    <StyledDiv>
    <div className="header position-sticky border-3 border-top border-primary bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-default">
          <a href="/api/home" className="navbar-brand">
            <img src="/img/cspop_logo.png" width="110" height="40" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbar-default">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item bold">
                <Link to="/api/noticeboards" className="nav-link" style={linkStyles}>
                  공지사항
                </Link>
              </li>
              <li className="nav-item bold">
                <Link to="/api/graduation/guide" className="nav-link" style={linkStyles}>
                  안내및내규
                </Link>
              </li>
              <li className="nav-item bold">
                <Link to="/api/graduation/schedule" className="nav-link" style={linkStyles}>
                  진행일정
                </Link>
              </li>
              <li className="nav-item bold">
                <Link to="/api/graduation/graduate_management" className="nav-link" style={linkStyles}>
                  졸업자조회
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </StyledDiv>
  );
};

export default Header;
