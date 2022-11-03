import { useRef, useState  } from 'react';
import { Animated, Text, View } from 'react-native';
import icon from './assets/hamster.png'
import icon2 from './assets/neko.png'


export function Cau3() {

    const [location, setLocation] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)
    });
    const [location1, setLocation1] = useState({
        marginLeft1: new Animated.Value(10),
        marginTop1: new Animated.Value(10)
    });
    const [location2, setLocation2] = useState({
        marginLeft2: new Animated.Value(10),
        marginTop2: new Animated.Value(10)
    });
    const [location3, setLocation3] = useState({
        marginLeft3: new Animated.Value(10),
        marginTop3: new Animated.Value(10)
    });

    const [count, setCount] = useState(getRndInteger(1,10))

    function onPress(evt){
        if(count != 11 ){

            var x = evt.nativeEvent.locationX;
            var y = evt.nativeEvent.locationY;
            setLocation({
              x: x,
              y: y,
              marginLeft: x,
              marginTop: y
            })

            const x1 = getRndInteger(0, 300)
            const y1 = getRndInteger(0, 250)
            const x2 = getRndInteger(0, 300)
            const y2 = getRndInteger(0, 250)
            const x3 = getRndInteger(0, 300)
            const y3 = getRndInteger(0, 250)

            setLocation1({
            marginLeft1: x1,
            marginTop1: y1
            })
            setLocation2({
            marginLeft2: x2,
            marginTop2: y2
            })
            setLocation3({
            marginLeft3: x3,
            marginTop3: y3
            })
            setCount(count-1)
        }
        else{
            setCount("Game over!")
            setLocation({
                marginLeft: x,
                marginTop: y
            })
        }
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const { marginTop, marginLeft } = location;
    const { marginTop1, marginLeft1 } = location1;
    const { marginTop2, marginLeft2 } = location2;
    const { marginTop3, marginLeft3 } = location3;
    return (
        <View style={{ flex: 1 }} onStartShouldSetResponder={()=>true} onResponderGrant={onPress}>
        <Text style={{marginLeft: 150, fontSize: 24}}>{count}!</Text>
            <Animated.Image
                source={icon2}
                style={{ marginLeft: marginLeft, marginTop: marginTop, height: 50, width: 50 }}
                onStartShouldSetResponder={() => true}
                onResponderGrant={onPress}
            ></Animated.Image>
            <Animated.Image
                source={icon}
                style={{ marginLeft: marginLeft1, marginTop: marginTop1, height: 50, width: 50 }}
                onStartShouldSetResponder={() => true}
                onResponderGrant={onPress}
            ></Animated.Image>
            <Animated.Image
                source={icon}
                style={{ marginLeft: marginLeft2, marginTop: marginTop2, height: 50, width: 50 }}
                onStartShouldSetResponder={() => true}
                onResponderGrant={onPress}
            ></Animated.Image>
            <Animated.Image
                source={icon}
                style={{ marginLeft: marginLeft3, marginTop: marginTop3, height: 50, width: 50 }}
                onStartShouldSetResponder={() => true}
                onResponderGrant={onPress}
            ></Animated.Image>

        </View>
    );
}