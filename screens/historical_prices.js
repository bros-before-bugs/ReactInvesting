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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  const iframe =
    '<iframe frameBorder="0" scrolling="no" width="400" height="420" src="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=C58D15F86B0B48F2A393FA198819B881&symbol=AAPL&dividends=true&splits=true&palette=Financial-Light&width=400px"></iframe>';
  const uriIFrame = '';
  //   const state = {
  //     data: '',
  //     loading: false,
  //   };
  var getHistoricalPrices = () => {
    fetch(
      'https://api.stockdio.com/data/financial/info/v1/GetCompanyInfo?app-key=C58D15F86B0B48F2A393FA198819B881&symbol=AAPL',
    )
      .then(response => response.json())
      .then(resposeJson => {
        setData(resposeJson.data.symbol);
        setLoading(false);
      });
  };
  return (
    <Container>
        <Content>
            <Grid>
                <Row style={styles.searchRow}>
                <Item rounded>
                    <Input
                    onChangeText={() => {
                        getHistoricalPrices();
                    }}
                    placeholder="ticker da ação. Ex: PETR4"
                    />
                </Item>
                </Row>
                {/* <Row>
                <Text>{data}</Text>
                </Row> */}
                <Row style={{}}>
                <WebView
                    scalesPageToFit={false}
                    bounces={false}
                    javaScriptEnabled
                    style={{height: 420, width: 950, marginTop: 0, paddingTop: 0}}
                    source={{
                    html: `${iframe}`,
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
