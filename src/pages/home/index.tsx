import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import { styles } from './styles';

const Home: React.FC = () => {
  const handlePress = () => {
    console.log('Botão da Home pressionado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home</Text>
      <Text style={styles.description}>
        Esta é uma tela inicial simples em React Native.
      </Text>
      <Button title="Toque aqui" onPress={handlePress} />
    </View>
  );
};



export default Home;
