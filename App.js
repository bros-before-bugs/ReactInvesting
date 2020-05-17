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
import { Root } from "native-base";
import CompanyInfo from './screens/company_info';
import HistoricalPrices from './screens/historical_prices';
import News from './screens/news';
import Commodities from './screens/commodities';
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
                onPress={() => navigation.navigate('News')}>
                <ImageBackground
                  source={require('./assets/img/news2.png')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Notícias
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('Commodities')}>
                <ImageBackground
                  source={require('./assets/img/commodities.png')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Commodities
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={styles.rowStyle}>
            <Col>
              <TouchableOpacity
                onPress={() => navigation.navigate('HistoricalPrices')}>
                <ImageBackground
                  source={require('./assets/img/dumb360x200.jpg')}
                  style={styles.touchableButtonImgBackground}
                  imageStyle={{borderRadius: 25}}>
                  <Text style={styles.touchableButtonText}>
                    Preços Históricos
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
      <Root>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
            name="CompanyInfo"
            component={CompanyInfo}
            options={{title: 'Informações da Empresa'}}
            />
            <Stack.Screen
            name="HistoricalPrices"
            component={HistoricalPrices}
            options={{title: 'Valores Históricos'}}
            />
            <Stack.Screen
            name="News"
            component={News}
            options={{title: 'Notícias'}}
            />
        </Stack.Navigator>
        </NavigationContainer>
      </Root>
  );
};

export default App;
