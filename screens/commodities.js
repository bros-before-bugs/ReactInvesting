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

function FutureIndices({navigation}) {
    
  const [iframe, setIframe] = useState('<iframe frameBorder="0" scrolling="yes" width="400" height="620" src="https://api.stockdio.com/visualization/financial/charts/v1/PricesChangeBoard?app-key=C58D15F86B0B48F2A393FA198819B881&stockExchange=COMMODITIES&symbols=GC;SI;CO;CL;CR&includeSymbol=false&showCurrency=true&culture=Portuguese-Brasil&palette=Financial-Light&title=Watch%20List&showLogo=No&onload=st_0c703776ca1146e79be15f3127dee6a0"></iframe>');
  
  return (
    <Container>
        <Content>
            <Grid>
                <Row style={{}}>
                <WebView
                    scalesPageToFit={false}
                    bounces={false}
                    javaScriptEnabled
                    style={{height: 620, width: 950, marginTop: 0, paddingTop: 0}}
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

export default FutureIndices;
