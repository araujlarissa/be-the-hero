import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  background: ${(props) => props.theme.colors.secundary};
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 30px;
  }
`;
