import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    color: ${(props) => props.theme.colors.textBold};
    margin-top: 80px;
    margin-bottom: 24px;
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
    border-color: ${(props) => props.theme.colors.textMedium}; /* Regular */
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;

  li {
    background: ${(props) => props.theme.colors.secundary};
    padding: 24px;
    border-radius: 8px;
    position: relative;
  }

  li strong {
    display: block;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.textBold};
  }

  li p + strong {
    margin-top: 32px;
  }

  li p {
    color: ${(props) => props.theme.colors.textMedium};
    line-height: 21px;
    font-size: 16px;
  }

  li button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;
  }

  li button:hover {
    opacity: 0.8;
  }
`;
