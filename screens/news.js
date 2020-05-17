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

function News({navigation}) {
  
  const appKey = "C58D15F86B0B48F2A393FA198819B881";
  const [iframe, setIframe] = useState('<iframe frameBorder="0" scrolling="no" width="400" height="1200" src="https://api.stockdio.com/visualization/financial/charts/v1/News?app-key=C58D15F86B0B48F2A393FA198819B881&symbol=PETR4&stockExchange=Bovespa&palette=Financial-Light&onload=st_37c277a5a3d54b92bba6493ab88177ec&width=400px&culture=Portuguese"></iframe>');
  
  var getNews = (ticker) => {
    if(ticker.length < 5)
        return;
    setIframe(`<iframe frameBorder="0" scrolling="no" width="400" height="1200" src="https://api.stockdio.com/visualization/financial/charts/v1/News?app-key=${appKey}&symbol=${ticker}&stockExchange=Bovespa&palette=Financial-Light&title=Noticias&onload=st_37c277a5a3d54b92bba6493ab88177ec&width=400px&culture=Portuguese"></iframe>`)
  };
  return (
    <Container>
        <Content>
            <Grid>
                <Row style={styles.searchRow}>
                <Item rounded>
                    <Input
                    onChangeText={(ticker) => {
                        getNews(ticker);
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

export default News;
