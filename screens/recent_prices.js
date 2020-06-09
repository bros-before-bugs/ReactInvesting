import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import stockDioApi from "../services/stockdioApi";

const stockdioApiKey = 'C58D15F86B0B48F2A393FA198819B881';

export class RecentPrices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: "",
      recentprices: []
    };
  }

  handleSubmit = async () => {
    try {
      const { ticker } = this.state;

      if(ticker.length < 5){
        Alert.alert("Ticker inválido", "Por favor, informe tickers válidos para realizar a pesquisa");
        return;
      }
      
      var requestUrl = `getlatestprices?app-key=${stockdioApiKey}&stockExchange=Bovespa&symbols=${ticker}`;
      let response = await stockDioApi.get(requestUrl);
      console.log(response.data);
      console.log(response.data.data.prices.values);

      this.setState({
        ticker: "",
        recentprices: response.data.data.prices.values,
      });

    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  printDate(date) {
    var spliitedDate = date.split('-');
    var year = spliitedDate[0];
    var month = spliitedDate[1];
    var spliitedDateTime = spliitedDate[2].split('T');
    var day = spliitedDateTime[0];
    var time = spliitedDateTime[1];

    return `${day}/${month}/${year} às ${time}`;
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 1.5, width: '100%', backgroundColor: 'rgb(69, 166, 247)' }}
      />
    );
  };

  render() {
    const { ticker, recentprices } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.textParapraph}>
              Informe os tickers separados por ;
            </Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ticker) => this.setState({ ticker })}
              value={ticker}
              label="Ticker"
              placeholder="ex: ITSA4;PETR4;BBAS3"
              placeholderTextColor="#ffff"
            />
            <TouchableOpacity
              style={styles.helpLink}
              style={styles.submit}
              onPress={() => this.handleSubmit()}
              underlayColor="#fff"
              // disabled={ticker.length < 5}
            >
              <Text style={styles.submitText}>Pesquisar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <FlatList 
              style={styles.list}
              data={recentprices}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              keyExtractor={price => price[0]}
              renderItem={({ item }) =>(
                <View style={styles.listItem}> 
                  <Card>
                    <CardItem header bordered>
                      <Text style={styles.cardHeader}>{item[0]}</Text>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                        <Text>{item[2]}</Text>
                      </Body>
                    </CardItem>
                    <CardItem footer bordered>
                      <Text>{this.printDate(item[1])}</Text>
                    </CardItem>
                  </Card>
                </View>
              )}
            />     
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardHeader: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  listItem:{
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  inputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 4,
    backgroundColor: "rgba(0, 112, 255, 0.39)",
    color: "#ffff",
  },
  contentContainer: {
    paddingTop: 5,
  },
  getStartedContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginVertical: 5,
  },
  textParapraph: {
    fontSize: 15,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    marginBottom: 25,
    marginTop: 50
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  buttonStyle: {
    borderRadius: 40,
    overflow: "hidden",
  },
  submit: {
    width: 100,
    marginHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "rgb(69, 166, 247)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },  
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default RecentPrices;
