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


class Check extends Component {
state = {
    list: '',
    checkBoolean1: true,
    checkBoolean2: true,
    checkBoolean3: true,
    checkBoolean4: true,
    checkBoolean5: true,
    checkBoolean6: true,
    checkBoolean7: true,
    checkBoolean8: true,
    checkBoolean9: true,
    checkBoolean10: true,
    checkBoolean11: true,
    checkBoolean12: true,
    checkBoolean13: true,
    checkBoolean14: true,
  
}
checkNum = () => {
    for( var i = 0 ; i < 14; i++)
    {
        if(this.state.checkBoolean = true)
        {
            this.state.listNum = this.state.listNum + 1;
        }
    }
    if(this.state.listNum >= 0 && this.state.listNum <= 1)
    {
        this.setState({
            list : "악건성"
        })
    }
    else if(this.state.listNum >= 2 && this.state.listNum <= 4 )
    {
        this.setState({
            list : "건성"
        })
    }
    else if(this.state.listNum >= 5 && this.state.listNum <= 7 )
    {
        this.setState({
            list : "중성"
        })
    }
    else if(this.state.listNum >= 8 && this.state.listNum <= 10 )
    {
        this.setState({
            list : "지성"
        })
    }
    else if(this.state.listNum >= 11 && this.state.listNum <= 12 )
    {
        this.setState({
            list : "악지성"
        })
    }
}
    


Checklist_1 = () => (
    this.state.checkBoolean1 ?
    <Text style = {styles.TrueTextView}>1. 세안 후 아무것도 바르지 않아도 그다지 당기는 느낌이 없다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>1. 세안 후 아무것도 바르지 않아도 그다지 당기는 느낌이 없다. </Text>
)
Checklist_2 = () => (
    this.state.checkBoolean2 ?
    <Text style = {styles.TrueTextView}>2. 세안 후 3~4시간이 지났을 때 티슈에 유분(기름)이 묻어나온다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>2. 세안 후 3~4시간이 지났을 때 티슈에 유분(기름)이 묻어나온다. </Text>
)
Checklist_3 = () => (
    this.state.checkBoolean3 ?
    <Text style = {styles.TrueTextView}>3. 아무것도 바르지 않았을 때 모공이 눈에 정확히 보인다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>3. 아무것도 바르지 않았을 때 모공이 눈에 정확히 보인다.</Text>
)
Checklist_4 = () => (
    this.state.checkBoolean4 ?
    <Text style = {styles.TrueTextView}>4. 기름종이를 하루에 3회 이상 사용한다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>4. 기름종이를 하루에 3회 이상 사용한다.</Text>
)
Checklist_5 = () => (
    this.state.checkBoolean5 ?
    <Text style = {styles.TrueTextView}>5. 썬크림, 메이크업이 2시간 안에 다시 바를 정도로 지워진다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>5. 썬크림, 메이크업이 2시간 안에 다시 바를 정도로 지워진다.</Text>
)
Checklist_6 = () => (
    this.state.checkBoolean6 ?
    <Text style = {styles.TrueTextView}>6. 영양크림이나 수분크림을 바를 경우 트러블이 생긴다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>6. 영양크림이나 수분크림을 바를 경우 트러블이 생긴다.</Text>
)
Checklist_7 = () => (
    this.state.checkBoolean7 ?
    <Text style = {styles.TrueTextView}>7. 화장품 제형은 산뜻한(가벼운) 타입이 좋다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>7. 화장품 제형은 산뜻한(가벼운) 타입이 좋다.</Text>
)
Checklist_8 = () => (
    this.state.checkBoolean8 ?
    <Text style = {styles.TrueTextView}>8. 코 주변에 블랙헤드나 화이트헤드가 많이 있다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>8. 코 주변에 블랙헤드나 화이트헤드가 많이 있다.</Text>
)
Checklist_9 = () => (
    this.state.checkBoolean9 ?
    <Text style = {styles.TrueTextView}>9. 머리가 자주 가렵고, 비듬이 잘 생긴다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>9. 머리가 자주 가렵고, 비듬이 잘 생긴다.</Text>
)
Checklist_10 = () => (
    this.state.checkBoolean10 ?
    <Text style = {styles.TrueTextView}>10. 거울을 볼 때 각질보다 기름기가 먼저 들어온다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>10. 거울을 볼 때 각질보다 기름기가 먼저 들어온다.</Text>
)
Checklist_11 = () => (
    this.state.checkBoolean11 ?
    <Text style = {styles.TrueTextView}>11. 하루라도 머리를 안 감으면 금방 기름진다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>11. 하루라도 머리를 안 감으면 금방 기름진다.</Text>
)
Checklist_12 = () => (
    this.state.checkBoolean12 ?
    <Text style = {styles.TrueTextView}>12. 춥고 건조한 날씨에도 피부가 가렵거나 당기지 않는다.</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>12. 춥고 건조한 날씨에도 피부가 가렵거나 당기지 않는다.</Text>
)
Checklist_13 = () => (
    this.state.checkBoolean13 ?
    <Text style = {styles.TrueTextView}>13. 접촉에 피부가 민감하다(ex. 마스크)</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>13. 접촉에 피부가 민감하다(ex. 마스크)</Text>
)
Checklist_14 = () => (
    this.state.checkBoolean14 ?
    <Text style = {styles.TrueTextView}>14. 화학성분에 피부가 민감한 편이다.(ex. 화장품에 예민)</Text> 
    :
    <Text style = {styles.FlaseTextbiew}>14. 화학성분에 피부가 민감한 편이다.(ex. 화장품에 예민)</Text>
)

changeBoolean1 = (event) => {
    if(event) {
    this.setState({
      checkBoolean1: false
    })
    }
    else{
         this.setState({
         checkBoolean1: true
        })
    }
}
changeBoolean2 = (event) => {
    if(event) {
    this.setState({
      checkBoolean2: false
    })
    }
    else{
         this.setState({
         checkBoolean2: true
        })
    }
}
changeBoolean3 = (event) => {
    if(event) {
    this.setState({
      checkBoolean3: false
    })
    }
    else{
         this.setState({
         checkBoolean3: true
        })
    }
}
changeBoolean4 = (event) => {
    if(event) {
    this.setState({
      checkBoolean4: false
    })
    }
    else{
         this.setState({
         checkBoolean4: true
        })
    }
}
changeBoolean5 = (event) => {
    if(event) {
    this.setState({
      checkBoolean5: false
    })
    }
    else{
         this.setState({
         checkBoolean5: true
        })
    }
}
changeBoolean6 = (event) => {
    if(event) {
    this.setState({
      checkBoolean6: false
    })
    }
    else{
         this.setState({
         checkBoolean6: true
        })
    }
}
changeBoolean7 = (event) => {
    if(event) {
    this.setState({
      checkBoolean7: false
    })
    }
    else{
         this.setState({
         checkBoolean7: true
        })
    }
}
changeBoolean8 = (event) => {
    if(event) {
    this.setState({
      checkBoolean8: false
    })
    }
    else{
         this.setState({
         checkBoolean8: true
        })
    }
}
changeBoolean9 = (event) => {
    if(event) {
    this.setState({
      checkBoolean9: false
    })
    }
    else{
         this.setState({
         checkBoolean9: true
        })
    }
}
changeBoolean10 = (event) => {
    if(event) {
    this.setState({
      checkBoolean10: false
    })
    }
    else{
         this.setState({
         checkBoolean10: true
        })
    }
}
changeBoolean11 = (event) => {
    if(event) {
    this.setState({
      checkBoolean11: false
    })
    }
    else{
         this.setState({
         checkBoolean11: true
        })
    }
}
changeBoolean12 = (event) => {
    if(event) {
    this.setState({
      checkBoolean12: false
    })
    }
    else{
         this.setState({
         checkBoolean12: true
        })
    }
}
changeBoolean13 = (event) => {
    if(event) {
    this.setState({
      checkBoolean13: false
    })
    }
    else{
         this.setState({
         checkBoolean13: true
        })
    }
}
changeBoolean14 = (event) => {
    if(event) {
    this.setState({
      checkBoolean14: false
    })
    }
    else{
         this.setState({
         checkBoolean14: true
        })
    }
}
    render(){
        return(
            <View style = {styles.mainView}>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean1(this.state.checkBoolean1)} >
                      {this.Checklist_1()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean2(this.state.checkBoolean2)} >
                      {this.Checklist_2()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean3(this.state.checkBoolean3)} >
                      {this.Checklist_3()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean4(this.state.checkBoolean4)} >
                      {this.Checklist_4()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean5(this.state.checkBoolean5)} >
                      {this.Checklist_5()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean6(this.state.checkBoolean6)} >
                      {this.Checklist_6()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean7(this.state.checkBoolean7)} >
                      {this.Checklist_7()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean8(this.state.checkBoolean8)} >
                      {this.Checklist_8()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean9(this.state.checkBoolean9)} >
                      {this.Checklist_9()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean10(this.state.checkBoolean10)} >
                      {this.Checklist_10()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean11(this.state.checkBoolean11)} >
                      {this.Checklist_11()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean12(this.state.checkBoolean12)} >
                      {this.Checklist_12()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean13(this.state.checkBoolean13)} >
                      {this.Checklist_13()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean14(this.state.checkBoolean14)} >
                      {this.Checklist_14()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.submit}
                    onPress = {()=>{
                        this.props.navigation.navigate('Main')
                    }}
                >
                    <Text>제출</Text>
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

export default Check;