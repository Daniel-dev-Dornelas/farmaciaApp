import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

type BlueButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const BlueButton: React.FC<BlueButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BlueButton;
