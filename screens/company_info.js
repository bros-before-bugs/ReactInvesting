import React from 'react';
import {Container, Item, Input, Content, Grid, Row, Text, Card, CardItem, Left, Body} from 'native-base';
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
  textTitle:{
      paddingLeft: 5,
      fontWeight: "bold"
  },
  textContent: {
      paddingLeft: 10
  }
});

function CompanyInfo({navigation}) {
  return (
    <Container>
      <Content>
        <Grid>
          <Row style={styles.searchRow}>
            <Item rounded>
              <Input placeholder="ticker da ação. Ex: PETR3" />
            </Item>
          </Row>
        </Grid>
        <Card style={styles.CardInfo}>
            <CardItem bordered>
                <Text style={styles.textTitle}>Ticker:</Text>
                <Text style={styles.textContent}>PETR4</Text>
            </CardItem>
            <CardItem bordered>
                <Text style={styles.textTitle}>Empresa:</Text>
                <Text style={styles.textContent}>Petrobrás</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text style={styles.textTitle}>Descrição: </Text>
                    <Text style={styles.textContent}>
                        Petróeo Brasileiro SA engages in the oil and gas exploration, production, and distribution activities. It operates through the following segments: Exploration and Production; Refining, Transportation, and Marketing; Distribution; Gas & Power; Biofuel; International; and Corporate. The Exploration and Production segment involves crude oil, natural gas liquids, and natural gas exploration, development, and production.
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Text style={styles.textTitle}>Site: </Text>
                <Text style={styles.textContent}>www.petrobras.com </Text>
            </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default CompanyInfo;
