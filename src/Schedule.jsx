import React, { useEffect, useState, useRef } from 'react';
import './App.css'
import styled from 'styled-components';
import axios from 'axios';
import Header from './Common/Header';

const StyledDiv = styled.div`
  font-family: 'NanumGothic';

  .row {
    text-align: center;
    margin-left: 190px;
  }
  .bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgb(38,31,68) !important;
  }
  .bg-shape {
    position: relative;
    height: 200px;
    margin-bottom: 30px;
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
  .title {
    margin-right: 190px;
    font-family: "NanumGothicBold";
  }
  .bg-light th {
    background-color: #eae9ec;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
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
    width: 250px;
    height: 150px;
    padding: 15px;
  }
`;

const Schedule = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const [schedules, setSchedules] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/schedules', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setSchedules(response.data);
        console.log('진행일정 데이터를 가져왔습니다.');
      } catch (error) {
        console.error('진행일정 데이터를 가져오지 못했습니다.', error);
      }
    }
    getData();
  }, []);

  return (
    <StyledDiv>
      <div>
        <Header />
        <div className="bg-shape bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="py-lg-14 py-12 text-center mb-4" style={{ padding: '50px 0' }}>
                  <h1 className="text-white display-4 mb-3 title">진행일정</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-12 mt-lg-n18 mt-n10">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-12">
                <div className="card rounded-3 mb-4">
                  <div className="table-responsive border-0">
                    <table className="table mb-0 text-nowrap">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="py-2 border-bottom-0">
                            단계
                          </th>
                          <th scope="col" className="py-2 border-bottom-0">
                            시작일정
                          </th>
                          <th scope="col" className="py-2 border-bottom-0">
                            종료일정
                          </th>
                          <th scope="col" className="py-2 border-bottom-0">
                            상태
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedules.map((data, index) => (
                          <tr key={index}>
                            <td className="align-middle">{data.step}</td>
                            <td className="align-middle">{data.startDate}</td>
                            <td className="align-middle">{data.endDate}</td>
                            <td className="align-middle">{data.scheduleState}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-wrapper">
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
                  <p>리액트로 모달 구현하기</p>
                  <button className="btn btn-primary text-white" onClick={() => setModalOpen(false)}>
                    닫기
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Schedule;
