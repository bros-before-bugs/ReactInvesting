import React, {useState} from 'react';
import {Container, Item, Input, Content, Grid, Row, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchRow: {
    alignItems: 'center',
    padding: 30,
  },
});

function HistoricalPrices({navigation}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
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
                placeholder="ticker da ação. Ex: PETR3"
              />
            </Item>
          </Row>
          <Row>
            <Text>{data}</Text>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
}

export default HistoricalPrices;
