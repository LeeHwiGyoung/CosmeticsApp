/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';


class Skin extends Component {
state = {
    list: '',
    skinBool0:true,
    skinBool1: true,
    skinBool2: true,
    skinBool3: true,
    skinBool4: true,
    skinBool5: true,
    skinBool6: true,
    skinBool7: true,
    skinBool8: true,
    skinBool9: true
} 

List = (idx) => {
    if(idx == 0 ){
   this.state.skinBool0 ?
        this.setState({
            skinBool0 : false
        })
      :   
        this.setState({
            skinBool0 :true
        })
    }
    else if (idx ==1){
       this.state.skinBool1 ?
        this.setState({
            skinBool1 : false
          })
         :   
        this.setState({
         skinBool1 :true
         })
    }
    else if (idx ==2){
        this.state.skinBool2 ?
         this.setState({
             skinBool2 : false
           })
          :   
         this.setState({
          skinBool2 :true
          })
     }
     else if (idx ==3){
        this.state.skinBool3 ?
         this.setState({
             skinBool3 : false
           })
          :   
         this.setState({
          skinBool3 :true
          })
     }
     else if (idx ==4){
        this.state.skinBool4 ?
         this.setState({
             skinBool4 : false
           })
          :   
         this.setState({
          skinBool4 :true
          })
     }
     else if (idx ==5){
        this.state.skinBool5 ?
         this.setState({
             skinBool5 : false
           })
          :   
         this.setState({
          skinBool5 :true
          })
     }
     else if (idx ==6){
        this.state.skinBool6 ?
         this.setState({
             skinBool6 : false
           })
          :   
         this.setState({
          skinBool6 :true
          })
     }
     else if (idx ==7){
        this.state.skinBool7 ?
         this.setState({
             skinBool7 : false
           })
          :   
         this.setState({
          skinBool7 :true
          })
     }
     else{
        this.state.skinBool8 ?
         this.setState({
             skinBool8 : false
           })
          :   
         this.setState({
          skinBool8 :true
          })
     }
    }

    SkinList_0 = () => (
        this.state.skinBool0 ?
        <Text style = {styles.TrueTextView}> 블랙헤드 </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 블랙헤드 </Text>
    )
    SkinList_1 = () => (
        this.state.skinBool1 ?
        <Text style = {styles.TrueTextView}> 기름짐  </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 기름짐  </Text>
    )
    SkinList_2 = () => (
        this.state.skinBool2 ?
        <Text style = {styles.TrueTextView}> 각질+모공  </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 각질+모공  </Text>
    )
    SkinList_3 = () => (
        this.state.skinBool3 ?
        <Text style = {styles.TrueTextView}> 여드름,트러블   </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 여드름,트러블  </Text>
    )
    SkinList_4 = () => (
        this.state.skinBool4 ?
        <Text style = {styles.TrueTextView}> 건조함,당김  </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 건조함,당김  </Text>
    )
    SkinList_5 = () => (
        this.state.skinBool5 ?
        <Text style = {styles.TrueTextView}> 홍조 </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 홍조 </Text>
    )
    SkinList_6 = () => (
        this.state.skinBool6 ?
        <Text style = {styles.TrueTextView}> 처짐,탄력 </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 처짐,탄력 </Text>
    )
    SkinList_7 = () => (
        this.state.skinBool7 ?
        <Text style = {styles.TrueTextView}> 피부톤(어두운 피부) </Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 피부톤(어두운 피부) </Text>
    )
        SkinList_8 = () => (
        this.state.skinBool8 ?
        <Text style = {styles.TrueTextView}> 주름</Text> 
        :
        <Text style = {styles.FlaseTextbiew}> 주름</Text>
    )



    render(){
        return(
            <View style = {styles.mainView}>
                <TouchableOpacity
                     onPress = {()=>this.List(0)} >
                    {this.SkinList_0()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(1)} >
                    {this.SkinList_1()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(2)} >
                    {this.SkinList_2()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(3)} >
                    {this.SkinList_3()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(4)} >
                    {this.SkinList_4()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(5)} >
                    {this.SkinList_5()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(6)} >
                    {this.SkinList_6()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(7)} >
                    {this.SkinList_7()}
                </TouchableOpacity>
                <TouchableOpacity
                     onPress = {()=>this.List(8)} >
                    {this.SkinList_8()}
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.submit}
                    onPress = {()=>{
                        this.props.navigation.navigate('CheckList')
                    }}
                >
                    <Text>다음</Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

 const styles= StyleSheet.create({
    mainView: {
        paddingTop: 50,
        width:'100%',
        left : 10
    },
    TrueTextView : {
        paddingTop:10,
        fontSize : 13.5,
        //fontStyle : ,
       color: "#abadaa"
 },
 FlaseTextbiew:{
    paddingTop:10,
    fontSize : 13.5,
    //fontStyle : ,
   color: "#000000"
 },
 submit:{
    width: '50%',
    backgroundColor: '#f5eccb',
    borderColor:'black',
    marginTop: 30,
    left: 80,
    borderWidth: 0.5,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
}
})  

export default Skin;