import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    justify-content: center;

    section {
      position: absolute;
      margin: 0 auto;
    }

    img.heroes {
      display: none;
    }
  }
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
