import React from 'react';

import { WrapButton, TextButton } from './styles';

const ButtonContact = ({ text, action }) => {
  return (
    <WrapButton onPress={action}>
      <TextButton>{text}</TextButton>
    </WrapButton>
  );
};

export default ButtonContact;
