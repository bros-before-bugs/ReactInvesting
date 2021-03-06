import React, {useState} from 'react';
import {Container, Item, Input, Content, Grid, Row, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = StyleSheet.create({
  searchRow: {
    alignItems: 'center',
    padding: 30,
  },
});

function HistoricalPrices({navigation}) {
    
  const [iframe, setIframe] = useState('');
  
  var getHistoricalPrices = (ticker) => {
    if(ticker.length < 5)
        return;
    setIframe(`<iframe frameBorder="0" scrolling="no" width="400" height="420" src="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalLookup?app-key=C58D15F86B0B48F2A393FA198819B881&stockExchange=Bovespa&symbol=${ticker.toUpperCase()}&includeVolume=true&showCurrency=true&palette=Healthy&showUserMenu=false&culture=Portuguese-Brasil&showLogo=Title"></iframe>`)
  };
  return (
    <Container>
        <Content>
            <Grid>
                <Row style={styles.searchRow}>
                <Item rounded>
                    <Input
                    onChangeText={(ticker) => {
                        getHistoricalPrices(ticker);
                    }}
                    placeholder="ticker da ação. Ex: PETR4"
                    />
                </Item>
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

export default HistoricalPrices;
