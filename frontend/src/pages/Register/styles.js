import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 80px ${(props) => props.theme.colors.border};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }

  div {
    display: flex;
  }

  div input + input {
    margin-left: 8px;
  }
`;
