import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #24292e;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #fbfbfb;
  font-weight: bold;
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #adb5bd;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
