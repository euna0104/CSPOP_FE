import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Home = () => {
  const StyledDiv = styled.div`
    .p-lg-8 {
        padding: 3.5rem!important;
    }
    * {
        box-sizing: border-box;
    }
    .row {
        --bs-gutter-x: 2rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-left: calc(var(--bs-gutter-x)*-.5);
        margin-right: calc(var(--bs-gutter-x)*-.5);
        margin-top: calc(var(--bs-gutter-y)*-1);
    }
    .align-items-center {
        align-items: center!important;
    }
    .min-vh-100 {
        min-height: 100vh!important;
    }
    .d-flex {
        display: flex!important;
    }
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: .5rem;
        font-weight: 550;
        line-height: 1.2;
        color: var(--bs-heading-color);
    }
    .bg-home {
        --bs-bg-opacity: 1;
        background-color: rgb(38,31,68);
    }
    .btn-primary {
        background-color: #ff5938;
        border-color: #ff5938;
        color: #fff;
    }
    .btn {
        border: 1px solid transparent;
        border-radius: .25rem;
        display: inline-block;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.6;
        padding: .6rem 1rem;
        text-align: center;
        text-decoration: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        user-select: none;
        vertical-align: middle;
    }
  `;

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const accessToken = sessionStorage.getItem('accessToken');
  const refreshToken = sessionStorage.getItem('refreshToken');

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken]);

  const handleHome = () => {
       navigate('/api/home');
     };
  const handleLogin = () => {
     navigate('/api/Login');
   };
   const handleLogout = async () => {
     try {
       await axios.post('/api/logout', { refreshToken });
       sessionStorage.removeItem('accessToken');
       sessionStorage.removeItem('refreshToken');
       setIsLoggedIn(false);
       alert('로그아웃 되었습니다.');
       navigate('/api/home');
     } catch (error) {
       console.error('Error during logout:', error);
       }
   };
  const handleNotice = () => {
    if (isLoggedIn) {
      navigate('/api/noticeboards');
    } else {
        alert('로그인이 필요합니다.');
    }
  };

  return (
    <StyledDiv>
      <div className="min-vh-100 d-flex align-items-center"
      style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/img/home.jpg)',
      backgroundSize: 'cover' }}>
        <div className="container">
              <div className="row">
                <div className="offset-lg-3 col-lg-6 col-12">
                  <a href="/api/home" className="mb-4 d-flex justify-content-center">
                    <img src="/img/cspop_logo.png" width="160" height="55" alt="" />
                  </a>
                  <div className="bg-home p-4 p-lg-8 rounded-3">
                    <form>
                      <h2 className="mb-3 text-white font-weight-bold">경기대학교 졸업시스템</h2>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white-50">
                          경기대학교 컴퓨터공학부 학생들을 위한 졸업시스템입니다.
                        </label>
                      </div>
                      <br />
                      <div className="d-grid">
                        <button className="btn btn-primary" type="submit" onClick={handleNotice}>
                          Graduation Start
                        </button>
                      </div>
                      <div className="d-lg-flex justify-content-between mt-4 mb-3">
                        <p className="text-muted font-14">
                          <a href="signup.html">Sign up</a>
                        </p>
                        <p className="font-14">
                          <a href="password-reset.html">Forget Password</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </StyledDiv>
  );
};

export default Home;
