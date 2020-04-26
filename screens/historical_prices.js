import React from 'react';
import {Container, Item, Input, Content, Grid, Row} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchRow: {
    alignItems: 'center',
    padding: 30,
  },
});

function HistoricalPrices({navigation}) {
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
      </Content>
    </Container>
  );
}

export default HistoricalPrices;
