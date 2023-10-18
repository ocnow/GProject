import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
 View,Text,TextInput,Button
} from 'react-native';

const styles = {
  input : {

  },
  container : {
    flex : 1,
    justifyContent : "center",
    backgroundColor : "#81D8D0"
  }
}

function App(): JSX.Element {
  const [text,setText] = useState("sample string");
  return (
    <View style={{flex:1,justifyContent:"flex-start",backgroundColor:"#81D8D0",borderBlockColor:"#FF0000",padding:10,gap:10}}>
     
      <TextInput
      style={{paddingRight:10,borderWidth: 1,borderColor:"#FF0000",justifyContent:"flex-start",textAlignVertical:"top",fontSize:30}}
    multiline={true}
    numberOfLines={10}
    onChangeText={(text) => setText(text)}
    value={text}/>

    <Button title='Submit Positive Message' onPress={() => {
      console.log("Thisi si something else");
    }}/>

    </View>
  );
}

export default App;
