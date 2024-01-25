import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Common/Header';

const StyledDiv = styled.div`
  font-family: 'NanumGothic';

  .row {
    text-align: center;
    margin-left: 190px;
  }
`;

const Schedule = () => {
  return (
    <StyledDiv>
      <div>
        <Header />
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
                        <tr>
                          <td className="align-middle">e5BZptmrBl</td>
                          <td className="align-middle">2021-12-07</td>
                          <td className="align-middle">
                            American Express ending in 1234
                          </td>
                          <td className="align-middle">$5.00</td>
                          <td className="align-middle">
                            <a href="#">
                              <i className="fe fe-download"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">4aS1taQR4F</td>
                          <td className="align-middle">2021-11-07</td>
                          <td className="align-middle">
                            American Express ending in 1234
                          </td>
                          <td className="align-middle">$5.00</td>
                          <td className="align-middle">
                            <a href="#">
                              <i className="fe fe-download"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Schedule;
