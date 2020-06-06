import React, {useState} from 'react';
import {Container, Item, Input, Content, Grid, Row, Text, Button, Col, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = StyleSheet.create({
  searchRow: {
    alignItems: 'center',
    padding: 30,
  },
  addTickerButton: {
    width: 48, 
    borderRadius: 24, 
    borderWidth: 3,
    borderColor: '#65497A',
    backgroundColor: '#9B7DE3'
  },
  addTickerText: {
    fontSize: 15
  }
});

function StockPriceComparison({navigation}) {
    
  const [iframe, setIframe] = useState('<iframe frameBorder="0" scrolling="no" width="400" height="420" src="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=C58D15F86B0B48F2A393FA198819B881&stockExchange=Bovespa&symbol=PETR3&addVolume=false&dividends=true&showUserMenu=false&culture=Portuguese-Brasil=false&splits=true&palette=Financial-Light&width=400px"></iframe>');
  
  var getHistoricalPrices = (ticker) => {
    if(ticker.length < 5)
        return;
    setIframe(`<iframe frameBorder="0" scrolling="no" width="400" height="420" src="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=C58D15F86B0B48F2A393FA198819B881&stockExchange=Bovespa&symbol=${ticker.toUpperCase()}&addVolume=false&dividends=true&showUserMenu=false&culture=Portuguese-Brasil=false&splits=true&palette=Financial-Light&width=400px"></iframe>`)
  };
  return (
    <Container>
        <Content>
            <Grid>
                <Row style={styles.searchRow}>
                    <Col style={{ width: '70%', padding: 10 }}>
                        <Item rounded>
                            <Input
                            onChangeText={(ticker) => {
                                getHistoricalPrices(ticker);
                            }}
                            placeholder="ticker da ação. Ex: PETR4"
                            />
                        </Item>
                    </Col>
                    <Col style={{ width: '30%', padding: 10 }}>
                        <Button 
                            style={styles.addTickerButton}>
                            <Text
                            style={styles.addTickerText}>+</Text>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Button>
                        <Text>PETR4</Text>
                        <Icon type="FontAwesome" name="home" />
                    </Button>
                </Row>
                <Row style={{}}>
                <WebView
                    scalesPageToFit={false}
                    bounces={false}
                    javaScriptEnabled
                    style={{height: 420, width: 950, marginTop: 0, paddingTop: 0}}
                    source={{ html: iframe,
                    }}
                    automaticallyAdjustContentInsets={true}
                />
                </Row>
            </Grid>
        </Content>
    </Container>
  );
}

export default StockPriceComparison;
