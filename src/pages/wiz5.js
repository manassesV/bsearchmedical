import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  DatePicker,
} from 'native-base';
import Answer from '../controller/anwescontroller';

 
export default class Wiz5 extends React.Component {
  static navigationOptions = { header: null }

   
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }

    this.save = this.save.bind(this);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
    

<View style={styles.output}>
      <Text>
          Agora preciso saber a sua data de nascimento você pode me dizer?
      </Text>


</View>

        <Image
          style={{ height: 200, width: 150, marginTop: -20,}}
          source={require('../../assets/chat.png')}
          resizeMode="contain"
        />

        <Item>
        <DatePicker
           full
            defaultDate={new Date(2000, 4,22)}
            minimumDate={new Date(1933, 1, 1)}
            maximumDate={new Date(2014, 12, 31)}
            locale={"pt-Br"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"slide"}
            androidMode={"default"}
            placeHolderText="Data de nascimento"
            textStyle={{ color: "write" }}
            placeHolderTextStyle={{ color: "#FFF" }}
            onDateChange={(date) => {this.setState({value: date})}}
            disabled={false}
            />
        </Item>
        <Button
          full
          success
          onPress={() => this.props.navigation.navigate('Wiz0')}
          style={styles.buttonLogin}>
          <Text>Proseguir</Text>
        </Button>


      </SafeAreaView>
    );
  }

  save = (value) => {

     var self  =  this;
     var controller = new Answer();
     
     controller.create(value,
     function(dados){
       self.props.navigation.navigate('Wiz5')

     },
     function(error){
       alert(error)
     });

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',
  },
  textInput: {
    height: 40,
    color: '#FFF',
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#FFF',
  },



  buttonLogin: {
    marginTop: 40,
  },

  output:{ 
  backgroundColor: "white",
  padding:20,
  borderRadius:100,
  marginBottom:2,
  width:"100%",
  marginTop: 20,
  position:"relative",
},

output_before:{
width:300,
height:0,
position:"absolute",
bottom:-25,

},

avatar_img:{
  width:170,
  borderRadius:100,
  marginBottom:20,
}









});
