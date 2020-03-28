import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.textMedium};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 0 24px;

  &:hover {
    border-color: ${(props) => props.theme.colors.textMedium};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 140px;
  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.textMedium};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;

  &:hover {
    border-color: ${(props) => props.theme.colors.textMedium};
  }
`;
