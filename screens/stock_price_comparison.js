import React, { useState } from 'react';
import { Container, Item, Input, Content, Grid, Row, Text, Button, Col, Icon, Toast } from 'native-base';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function InvalidTickerException(message){
    this.message = message;
    this.name = "InvalidTickerException";
}

const styles = StyleSheet.create({
    searchRow: {
        alignItems: 'center',
        padding: 30,
    },
    // AddTicker Feature
    addTickerButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        borderWidth: 3,
        borderColor: '#65497A',
        backgroundColor: '#9B7DE3',
        alignContent: "center",
        justifyContent: "center"
    },
    addTickerText: {
        fontSize: 15
    },
    AddTickerIcon: {
        fontSize: 15,
    },
    // TickerSearched Feature
    TickerSearchedRow: {
        justifyContent: 'space-evenly'
    },
    TickerSearchedButton: {
        height: 30
    },
    TickerSearchedIcon: {
        fontSize: 15
    },
    Toaster: {
        backgroundColor: 'red'
    }
});

const colors = ['0009F0', 'F05D18', 'BD00EB']; // blue, orange, purple

function StockPriceComparison({ navigation }) {

    const [iframe, setIframe] = useState('');
    const [tickerSearchedObject, setTickerSearchedObject] = useState({})
    const [tickerSearchedJSXList, setTickerSearchedJSXList] = useState([])
    const [typedTicker, setTypedTicker] = useState('');

    let buildTickerSearchedButton = (ticker) => {
        let tickerSearchedButton =
            <Button onPress={() => removeSearchedTicker(ticker)} rounded style={{ height: 30, backgroundColor: `#${colors[Object.keys(tickerSearchedObject).length]}` }}>
                <Text style={styles.TickerSearchedText}>{ticker}</Text>
                <Icon style={styles.TickerSearchedIcon} type="FontAwesome" name="remove" />
            </Button>;
        return tickerSearchedButton;
    };

    let addSearchedTicker = () => {
        try 
        {
            validateTicker();
            validateQuantityOfSearchedTickers();

            tickerSearchedObject[typedTicker] = buildTickerSearchedButton(typedTicker);
            setTickerSearchedObject(tickerSearchedObject);
            setTickerSearchedJSXList(Object.values(tickerSearchedObject))
            console.log("=========================== addSearchedTicker =====================");
            console.log(`tickerSearchedObject -> values.length: ${Object.values(tickerSearchedObject)}`);
            console.log(`tickerSearchedObject -> keys: ${Object.keys(tickerSearchedObject)}`);
            setTypedTicker('');
            showStockComparison();
        } 
        catch (error) 
        {
            showErrorMessage(error.message);
        }
    }

    let validateTicker = () => {
        if(typedTicker.length < 5){
            throw new InvalidTickerException('É preciso inserir um ticker válido')
        }
        
    }

    let validateQuantityOfSearchedTickers = () => {
        if (Object.keys(tickerSearchedObject).length >= 3){
            throw new InvalidTickerException('Só é possível comparar 3 ações ao mesmo tempo.');
        }
    }

    let removeSearchedTicker = (ticker) => {
        delete tickerSearchedObject[ticker];
        setTickerSearchedObject(tickerSearchedObject);
        setTickerSearchedJSXList(Object.values(tickerSearchedObject))

        showStockComparison();
        console.log("=========================== removeSearchedTicker =====================");
        console.log(`tickerSearchedObject -> values.length: ${Object.values(tickerSearchedObject).length}`);
        console.log(`tickerSearchedObject -> keys: ${Object.keys(tickerSearchedObject)}`);
        console.log("ticker:" + ticker)
    }

    let saveTipedTicker = (text) => {
        setTypedTicker(text);
    }

    let showStockComparison = () => {
        const tickers = Object.keys(tickerSearchedObject);
        let symbol = tickers[0];
        let comparisonTickers = tickers.splice(1).join(';');

        // if (Object.values(tickerSearchedObject).length > 1) {
        // }
        setIframe(`<iframe frameBorder='0' scrolling='no' width='400' height='420' src='https://api.stockdio.com/visualization/financial/charts/v1/ComparePrices?app-key=C58D15F86B0B48F2A393FA198819B881&stockExchange=Bovespa&symbol=${symbol.toUpperCase()}&compare=${comparisonTickers.toUpperCase()}&addVolume=false&culture=Portuguese-Brasil&palette=Financial-Light&baseColor=0009f0&compare1Color=f05d18&compare2Color=bd00eb&width=400px&allowPeriodChange=false'></iframe>`)
    }

    let showErrorMessage = (message) => {
        Toast.show({
            text: message,
            buttonText: 'Ok',
            useNativeDriver: true,
            duration: 3000,
            style: styles.Toaster
        })
    }

    return (
        <Container>
            <Content>
                <Grid>
                    <Row style={styles.searchRow}>
                        <Col style={{ width: '70%', padding: 10 }}>
                            <Item rounded>
                                <Input
                                    onChangeText={(ticker) => {
                                        saveTipedTicker(ticker);
                                    }}
                                    placeholder="ticker da ação. Ex: PETR4"
                                    value={typedTicker}
                                />
                            </Item>
                        </Col>
                        <Col style={{ width: '30%', padding: 10 }}>
                            <Button
                                style={styles.addTickerButton}
                                onPress={addSearchedTicker}
                            >
                                <Icon
                                    style={styles.AddTickerIcon}
                                    type="FontAwesome"
                                    name="plus" />
                            </Button>
                        </Col>
                    </Row>
                    <Row style={styles.TickerSearchedRow}>
                        {tickerSearchedJSXList}
                    </Row>
                    <Row style={{}}>
                        <WebView
                            scalesPageToFit={false}
                            bounces={false}
                            javaScriptEnabled
                            style={{ height: 420, width: 950, marginTop: 0, paddingTop: 0 }}
                            source={{
                                html: iframe,
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
