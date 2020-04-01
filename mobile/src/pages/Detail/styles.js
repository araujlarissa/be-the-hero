import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
  background: #1b1c1e;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailContainer = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #24292e;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #fbfbfb;
  font-weight: bold;
  margin-top: 24px;
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #adb5bd;
`;

export const ContactContainer = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #24292e;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fbfbfb;
  line-height: 30px;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #adb5bd;
  margin-top: 16px;
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;
