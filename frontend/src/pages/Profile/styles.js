import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    color: ${(props) => props.theme.colors.textBold};
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;
  }

  @media screen and (max-width: 700px) {
    ul {
      grid-template-columns: 1fr;
    }

    header span {
      display: none;
    }

    header img {
      height: 54px;
      margin-right: 20px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.textBold};
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(88%);
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
  }

  button:hover {
    border-color: ${(props) => props.theme.colors.textMedium};
  }
`;
