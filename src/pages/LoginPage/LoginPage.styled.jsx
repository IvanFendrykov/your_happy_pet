import styled from 'styled-components';

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  height: 100vh;
  background-color: white);
  `;

const LoginFormWrapper = styled.div`
  padding: 60px 75px;
  width: 608px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 12px;
    max-width: 280px;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`;

export {
  LoginPageWrapper,
  LoginFormWrapper,
};