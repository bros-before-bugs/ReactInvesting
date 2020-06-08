import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

import api from "../services/api";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      disabledButton:"",
    };
  }

  handleSubmit = async () => {
    try {
      const { name, email, subject, message } = this.state;

      const params = {
        name,
        email,
        subject,
        message,
      };
      const response = await api.post("/users", params);
      alert(`Seu contato foi registrado com Sucesso ${response.data.name} !`);
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.textParapraph}>
              Envie sua dúvida, Sugestão ou Registre-se para receber as
              novidades do App
            </Text>
            <Text style={styles.getStartedText}>Nome*</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(name) => this.setState({ name })}
              value={name}
              label="Nome"
              placeholder="Insira o Nome"
              placeholderTextColor="#ffff"
            />
            <Text style={styles.getStartedText}>Email*</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(email) => this.setState({ email })}
              value={email}
              label="Email"
              placeholder="Insira o Email"
              placeholderTextColor="#ffff"
            />
            <Text style={styles.getStartedText}>Assunto*</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(subject) => this.setState({ subject })}
              value={subject}
              label="Assunto"
              placeholder="Insira o Assunto"
              placeholderTextColor="#ffff"
            />
            <Text style={styles.getStartedText}>Mensagem*</Text>
            <TextInput
              style={[styles.inputStyle, { height: 100 }]}
              onChangeText={(message) => this.setState({ message })}
              value={message}
              label="Mensagem"
              placeholder="Insira a Mensagem"
              placeholderTextColor="#ffff"
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 12 }}>
            {/*           <Button
            onPress={onPressLearnMore}
            title="Enviar"
            color="#0070ff"
            style={styles.buttonStyle}
            accessibilityLabel="Learn more about this purple button"
          /> */}
          </View>
          <View>
            <TouchableOpacity
              style={styles.helpLink}
              style={styles.submit}
              onPress={() => this.handleSubmit()}
              underlayColor="#fff"
              disabled={name.length>0 && email.length>0 && subject.length>0 && message.length>0
                ? false:true}
            >
              <Text style={styles.submitText}>Enviar</Text>
            </TouchableOpacity>
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

export default Contact;
