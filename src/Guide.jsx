import React, { useEffect, useState } from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Common/Header';
import styled from 'styled-components';

const Guide = ({ userId }) => {
  const [data, setData] = useState({ text: '', id: '' });

  useEffect(() => {
    axios.get('/api/graduation/guide')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
      });
  }, []);

  const StyledDiv = styled.div`
    font-family: 'Nanum Gothic';

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
  `;

  return (
    <StyledDiv>
      <div>
        <Header />
        <div className="bg-shape bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="py-lg-14 py-12 text-center mb-4" style={{ padding: '50px 0' }}>
                  <h6 className="text-white display-4 mb-3">안내 및 내규</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 col-12">
                <h1 className="fw-bold mb-3">This is a H1, Perfect's for titles.</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stress, for the United States element ante. Duis cursus, mi quis viverra ornare, eros pain, sometimes none at all, freedom of the living creature was as the profit and financial
                  security. Jasmine neck adapter and just running it lorem makeup sad smile of the television set.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Guide;
