import React, { Component } from 'react';
import { Text, View ,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
   export default class HelloWorldApp extends Component {
  static navigationOptions={
    title:'INPUT USERS',
  }

  constructor(props){
    super(props)
    this.state={
      TextInputName:'',
      TextInputEmail:'',
      TextInputPhoneNumber:''
    }
  }

  InsertUsers=()=>{
    const{TextInputName}=this.state;
    const{TextInputEmail}=this.state;
    const{TextInputPhoneNumber}=this.state;

    fetch('http://192.168.1.76/tr_reactnative/insert.php',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'content-Type':'application/json'
      },
      body:JSON.stringify({
        name:TextInputName,
        email:TextInputEmail,
        phone_number:TextInputPhoneNumber,
      })
    }).then((response)=>response.json())
    .then((responseJson)=>{
      alert(responseJson);
    }).catch((error)=>{
      console.error(error);
    })

  }

  ViewUsersList=()=>{
    this.props.navigation.navigate('')
  }

  render() {
    return (
      <View style ={style.Container}>
      <TextInput
      placeholder='Enter name'
      onChangeText={TextInputvalue=>this.setState({TextInputName:TextInputvalue})}
       underlineColorAndroid='transparent'
       style={style.TextInputStyle}
       />
      <TextInput
      placeholder='Enter Email'
      onChangeText={TextInputvalue=>this.setState({TextInputEmail:TextInputvalue})}
       underlineColorAndroid='transparent'
       style={style.TextInputStyle}
       />
       <TextInput
      placeholder='Enter Phone Number'
      onChangeText={TextInputvalue=>this.setState({TextInputPhoneNumber:TextInputvalue})}
       underlineColorAndroid='transparent'
       style={style.TextInputStyle}
       />
       <TouchableOpacity activeopacity={.4} style={style.TouchableOpacityStyle} onPress={this.InsertUsers}>
        <Text style={style.TextStyle}>Save</Text>
       </TouchableOpacity>

       <TouchableOpacity activeopacity={.4} style={style.TouchableOpacityStyle} onPress={this.ViewUsersList}>
        <Text style={style.TextStyle}>Save</Text>
       </TouchableOpacity>
      </View>
    );
  }
}



const style =StyleSheet.create({
  Container:{
    alignItems:'center',
    flex:1,
    marginTop:5,
    backgroundColor:'#fff'

  },
  TextInputStyle:{
    textAlign:'center',
    marginBottom:7,
    height:40,
    width:'90%',
    borderWidth:1,
    borderRadius:5,
    borderColor:'#FF5722'
  },

  TextStyle:{
    color:'#fff',
    textAlign:'center'
  },

  TouchableOpacityStyle:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width:'90%',
    backgroundColor:'#00BCD4'

  }
})