import { useRef, useState  } from 'react';
import { Animated, Text, View } from 'react-native';
import icon from './assets/neko.png'


export function Cau1() {

  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)
      });

  function onPress(evt){
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
      x: x,
      y: y,
      marginLeft: x-100,
      marginTop: y-360
    })
    
  }
  const {marginTop, marginLeft} = location;
  return (
    <View
      onStartShouldSetResponder={()=>true}
      onResponderGrant={onPress}
      style={{flex: 1}}
      >

      <Text style={{margin: 130, width: 200}}>Show something!</Text>
     
      <Animated.Image
       source = {icon}
       style={{marginLeft: marginLeft, marginTop: marginTop, height: 200, width: 200}}
       >

      </Animated.Image>

    </View>
  );
}