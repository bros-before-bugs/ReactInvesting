import React, { useState } from 'react';
import {Container, Item, Input, Content, Grid, Row, Text, Card, CardItem, Left, Body, Toast} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchRow: {
    alignItems: 'center',
    padding: 30,
  },
  CardInfo: {
      marginLeft: 5,
      marginRight: 5,
  },
  cardItem: {
    borderBottomColor: '#eee',
    borderBottomWidth: 2
  },
  textTitle:{
      paddingLeft: 5,
      fontWeight: "bold"
  },
  textContent: {
      paddingLeft: 10,
      lineHeight: 25
  },
  toaster: {
      backgroundColor: 'red'
  }
});

function CompanyInfo({navigation}) {
    const [ticker, setTicker] = useState('-')
    const [company, setCompany] = useState('-')
    const [description, setDescription] = useState('-')
    const [site, setSite] = useState('-')

    let setCompanyInformation = (data) => {
        setTicker(data.symbol)
        setCompany(data.company)
        setDescription(data.description)
        setSite(data.website)
    }

    let resetCompanyInformation = () => {
        setTicker('-')
        setCompany('-')
        setDescription('-')
        setSite('-')
    }

    let getCompanyInfo = async (ticker) => {
        try {
            if(ticker.length < 5)
                return;
            let response = await fetch(`https://api.stockdio.com/data/financial/info/v1/GetCompanyInfo?app-key=C58D15F86B0B48F2A393FA198819B881&stockExchange=Bovespa&symbol=${ticker.toUpperCase()}`)
            let json = await response.json()
            let statusCode = parseInt(json.status.code)
            if(statusCode != '0'){
                Toast.show({
                    text: json.status.message,
                    buttonText: 'Ok',
                    useNativeDriver: true,
                    duration: 3000,
                    style: styles.toaster
                })
                resetCompanyInformation()
            }
            else {
                setCompanyInformation(json.data)
            }
        } catch (error) {
            Toast.show({
                text: 'Ocorreu um erro inesperado',
                buttonText: 'Ok',
                useNativeDriver: true,
                duration: 3000,
                style: styles.toaster
            })
            resetCompanyInformation()
            // console.error(error)
        }
    }
  return (
    <Container>
      <Content>
        <Grid>
          <Row style={styles.searchRow}>
            <Item rounded>
              <Input
                onChangeText={(tickerRequest) => {getCompanyInfo(tickerRequest)}} 
                placeholder="ticker da ação. Ex: PETR3" />
            </Item>
          </Row>
        </Grid>
        <Card style={styles.CardInfo}>
            <CardItem style={styles.cardItem}>
                <Text style={styles.textTitle}>Ticker:</Text>
                <Text style={styles.textContent}>{ticker}</Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
                <Text style={styles.textTitle}>Empresa:</Text>
                <Text style={styles.textContent}>{company}</Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
                <Body>
                    <Text style={styles.textTitle}>Descrição: </Text>
                    <Text style={styles.textContent}>
                        {description}
                    </Text>
                </Body>
            </CardItem>
            <CardItem style={styles.cardItem}>
                <Text style={styles.textTitle}>Site: </Text>
                <Text style={styles.textContent}>{site} </Text>
            </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default CompanyInfo;
