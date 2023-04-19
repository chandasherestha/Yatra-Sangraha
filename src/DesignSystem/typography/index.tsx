import React from 'react';
import { Text, TextStyle } from 'react-native';

interface TypographyProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const Typography: React.FC<TypographyProps> = ({ children, style }) => {
  return (
    <Text style={[{ fontFamily: 'Poppins' ,color:'red' }, style]}>{children}</Text>
  );
};

export default Typography;
