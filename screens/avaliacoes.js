import React, { Component, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  FlatList,
  Alert,
} from "react-native";
//import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

import backendApi from "../services/backendApi";

export class Avaliacoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await backendApi.get("/users");
      console.log(response.data)
      this.setState({ users:response.data})
       /*
      const responseFinal = response.data;
      this.setState({ users:responseFinal})
      console.log(response.data) */
      /* alert(`Seu contato foi registrado com Sucesso ${response} !`); */
      
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  _renderItem = ({item}) => {
    return  (
        <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
            <Text style={{marginLeft: 10}}>{item.name}</Text>
        </TouchableOpacity>
    )
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 1.5, width: '100%', backgroundColor: 'rgb(69, 166, 247)' }}
      />
    );
  };

  GetItem(item,message) {
    Alert.alert(item,message);
  }

  render() {
    const { users } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.textParapraph}>
              Acompanhe aqui os feedbacks do aplicativo
            </Text>
            <View style={styles.container}>
                 
                {/* {this.state.users.map(user => (
                  <View key={user._id}>
                    <Text>{user.name}</Text>
                    <Text>Assunto</Text> 
                    <Text>{user.subject}</Text>
                  </View>
                ))} */}
              
                <FlatList 
                  style={styles.list}
                  data={users}
                  ItemSeparatorComponent={this.FlatListItemSeparator}
                  keyExtractor={user => user._id}
                  renderItem={({ item }) =>(
                      <View style={styles.listItem}> 
                      <TouchableOpacity
                        style={styles.helpLink}
                        onPress={this.GetItem.bind(this, 'Assunto: '+item.subject,'Mensagem: '+item.message)}
                      >
                        <View style={styles.groupContainer}>
                          <Text style={styles.getStartedText}>Usuario(a): {item.name}{"\n"}Assunto: {item.subject}</Text>
                          <Icon name="list" size={26} color="rgb(69, 166, 247)" />
                        </View>
                      </TouchableOpacity>
                      </View>
                  )}
                />     
            </View>

           {/*  <View style={styles.container}>
              <FlatList
                  data= {users}
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                  renderItem= {item=> this.renderItem(item)}
                  keyExtractor= {item=>item.id.toString()}
              />
            </View> */}

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
  groupContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent:"space-between",
  },
  container2: {
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "rgba(0, 112, 255, 0.39)",
  },
  getStartedContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
  listItem:{
    flex: 1,
    justifyContent: "center",
    marginLeft:10,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "justify",
  },
  textParapraph: {
    fontSize: 15,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    marginBottom: 25,
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
});

export default Avaliacoes;
