import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, ImageBackground, Image, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Grid,
  Col,
  Row,
  Thumbnail,
  Card,
  CardItem,
  View,
  Left,
} from 'native-base';
import CompanyInfo from './screens/company_info';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  touchableButtonText: {
    position: 'absolute',
    left: 20,
    top: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    color: '#fff',
    fontSize: 20,
  },
  touchableButtonImgBackground: {
    height: 200,
    width: '100%',
  },
  rowStyle: {
    margin: 10,
  },
});

function HomeScreen({navigation}) {
  return (
    <Container style={{backgroundColor: '#635DB7'}}>
      <Content>
        <Grid>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('CompanyInfo')}>
                <ImageBackground
                  source={require('./assets/img/info_empresas.png')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Informações da Empresa
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('CompanyInfo')}>
                <ImageBackground
                  source={require('./assets/img/comparativo.png')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Comparativo de Ações
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('CompanyInfo')}>
                <ImageBackground
                  source={require('./assets/img/dumb360x200.jpg')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Informações da Empresa
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('CompanyInfo')}>
                <ImageBackground
                  source={require('./assets/img/dumb360x200.jpg')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Informações da Empresa
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('CompanyInfo')}>
                <ImageBackground
                  source={require('./assets/img/dumb360x200.jpg')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Informações da Empresa
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('CompanyInfo')}>
                <ImageBackground
                  source={require('./assets/img/dumb360x200.jpg')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Informações da Empresa
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
}

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CompanyInfo" component={CompanyInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
