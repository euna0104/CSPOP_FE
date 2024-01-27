import React, { useEffect, useState, useRef } from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Common/Header';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: 'NanumGothic';

  .bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgb(38,31,68) !important;
  }
  .bg-shape {
    position: relative;
    height: 200px;
  }
  .bg-shape:after {
    background:url(/img/curve-shape.svg);
    background-position-x:center;
    background-repeat:no-repeat;
    background-size:cover;
    bottom:-15px;content:"";
    height:62px;
    position:absolute;
    width:100%
  }
  .row {
    --bs-gutter-x: 2rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--bs-gutter-x)*-.5);
    margin-right: calc(var(--bs-gutter-x)*-.5);
    margin-top: calc(var(--bs-gutter-y)*-1);
    margin-bottom: 60px;
  }
  .title {
    font-family: "NanumGothicBold";
  }
  .modal-open-button, .modal-close-btn {
      cursor: pointer;
      margin-left: auto;
    }
  .modal-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal-content {
    background-color: #ffffff;
    width: 700px;
    height: 650px;
    padding: 15px;
  }
  textarea {
    width: 650px;
    height: 500px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

const Guide = ({ userId }) => {
  const accessToken = sessionStorage.getItem('accessToken');
  const [data, setData] = useState({ text: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const { text } = data;

  useEffect(() => {
    const getGuidance = async () => {
      try {
        const response = await axios.get(`/api/guidancdboards`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setData(response.data);
        console.log('안내및내규를 불러왔습니다.');
      } catch (error) {
        console.log('안내및내규를 불러오지 못했습니다.', error);
      }
    };
    getGuidance();
  }, [accessToken]);

  const handleDataChange = (e) => {
    setData({ text: e.target.value });
  };

  const guidanceUpdate = async () => {
    try {
      const response = await axios.put(`/api/admins/guidanceboards`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      alert('게시물이 수정되었습니다.');
      setData(response.data);
      setModalOpen(false);
    } catch (error) {
      console.error(error);
      alert('게시물 수정에 실패하였습니다.');
    }
  };

  return (
    <StyledDiv>
      <div>
        <Header />
        <div className="bg-shape bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="py-lg-14 py-12 text-center mb-4" style={{ padding: '50px 0' }}>
                  <h6 className="text-white display-4 mb-3 title">안내 및 내규</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12" style={{ padding: '50px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 col-12">
                <p className="mb-4">{text}</p>
              </div>
            </div>
          </div>
          <div className="btn-wrapper d-flex justify-content-center">
            <button className="btn btn-primary text-white" onClick={() => setModalOpen(true)}>
              수정
            </button>
          </div>
          {
            modalOpen &&
            <div className="modal-container" ref={modalBackground} onClick={e => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}>
              <div className="modal-content">
                <p className="d-flex justify-content-center">안내 및 내규 수정</p>
                <div className="d-flex justify-content-center">
                  <textarea
                    value={text}
                    onChange={handleDataChange}
                    type="text-area"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary text-white" onClick={guidanceUpdate}>
                    완료
                  </button>
                </div>
              </div>
            </div>
            }
        </div>
      </div>
    </StyledDiv>
  );
};

export default Guide;
