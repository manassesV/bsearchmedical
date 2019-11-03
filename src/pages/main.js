import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Grid, Col } from 'native-base';
export default class FooterTabsIconTextExample extends Component {

   static navigationOptions = { header: null }

  render() {
    return (
   
      <Container style={styles.container}>
         <Image
          style={{height:100 , width: 75}}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />

        <Content />

     

         
        <Grid style={styles.styleGrid1}>
          <Col style={styles.styleCol}>


          </Col>


          <Col style={styles.styleCol}>


          </Col>
        </Grid>


        <Grid style={styles.styleGrid2}>
        <Col style={styles.styleCol}>


          </Col>
          <Col style={styles.styleCol}>


          </Col>
        </Grid>
         <Footer>
        <FooterTab>
            <Button  active vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon type="FontAwesome" name="home"/>
              <Text style={styles.textFooter}> Home </Text>
            </Button>
            <Button  badge vertical onPress={() => this.props.navigation.navigate('Alerts')}>
            <Badge ><Text>10</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" />
              <Text style={styles.textFooter}>Alertas</Text>
            </Button>
            <Button  vertical onPress={() => this.props.navigation.navigate('Infor')}>
              <Icon type="FontAwesome" name="user" />
              <Text style={styles.textFooter}>Usuário</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Logout')}>
              <Icon type="FontAwesome" name="power-off" />
              <Text style={styles.textFooter}>Sair</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',
   

  },




  textFooter: {
 fontSize: 8,

  },


  styleGrid1: {
      marginTop: "-60%",

  },
    styleGrid2: {
      
  marginTop: "-20%",
  },

  styleCol: {
   marginRight: 10,
   marginLeft: 10,
   backgroundColor: '#fff', 
   height: 100
},

  



  
})