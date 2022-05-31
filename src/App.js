import React from 'react';
import {View, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card/index';

const photo = 'https://avatars.githubusercontent.com/u/56978439?s=96&v=4'

const App = () => {

  function handleSocialMidia(social_midia) {
    switch(social_midia) {
      case 'linkedin':
        Alert.alert('Meu Linkedin:','https://www.linkedin.com/in/gabrieldutra23/')
      break
      case 'github':
        Alert.alert('Meu Github:','https://github.com/Dutra3')
      break
      case 'instagram':
        Alert.alert('Meu Instagram:','https://www.instagram.com/gabrieldutra3/')
      break
    }
  }

  return (
    <>
      <View style={style.page}>
        
        <View style={style.container_header}>
          <Image 
            accessibilityLabel='Gabriel sorrindo com um fundo indefinido'
            style={style.photo}
            source={{uri: photo}} 
            />
          <Text accessibilityLabel='Gabriel Dutra' style={style.name}>GABRIEL DUTRA</Text>
          <Text accessibilityLabel='Estudante Analíse e Desenvolvimento de Sistemas' style={style.ocupation}>Estudante Analíse e Desenvolvimento de Sistemas</Text>
          <View style={style.social_midias}>
            <TouchableOpacity onPress={() => handleSocialMidia('github')}>
              <Icon name='github' size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialMidia('linkedin')}>
              <Icon name='linkedin' size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialMidia('instagram')}>
              <Icon name='instagram' size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo='Formação Academica'>
          <Text style={style.card_content_text}>Economia - UFSC</Text>
          <Text style={style.card_content_text}>ADS - Estácio</Text>
        </Card>
        <Card titulo='Expeciencia Profissional'>
          <Text style={style.card_content_text}>Automega Renault - Coordenador FI</Text>
          <Text style={style.card_content_text}>Automega Renault - Auxiliar FI</Text>
          <Text style={style.card_content_text}>LabTrans/UFSC - Bolsista</Text>
        </Card>

      </View>
    </>
  );
};


export default App;

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
  },
  container_header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ocupation: {
    color: '#939393',
    marginBottom: 10,
  },
  social_midias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
})