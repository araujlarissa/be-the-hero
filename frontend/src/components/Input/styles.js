import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.textBold};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 0 24px;

  &:hover {
    border-color: ${(props) => props.theme.colors.textMedium};
  }
`;
