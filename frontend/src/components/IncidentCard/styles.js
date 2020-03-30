import styled from 'styled-components';

export const StyledIncidentCard = styled.li`
  background: ${(props) => props.theme.colors.secundary};
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.textBold};
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: ${(props) => props.theme.colors.textMedium};
    line-height: 21px;
    font-size: 16px;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;
  }

  button:hover {
    opacity: 0.8;
  }
`;
