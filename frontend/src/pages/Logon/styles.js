import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;

  h1 {
    color: ${(props) => props.theme.colors.textBold};
    font-size: 32px;
    margin-bottom: 32px;
  }
`;
