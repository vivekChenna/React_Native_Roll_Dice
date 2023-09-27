/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  Image,
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

function App(): JSX.Element {
  const [img, setImg] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    let number = Math.floor(Math.random() * 6) + 1;

    switch (number) {
      case 1:
        setImg(DiceOne);
        break;
      case 2:
        setImg(DiceTwo);
        break;
      case 3:
        setImg(DiceThree);
        break;
      case 4:
        setImg(DiceFour);
        break;
      case 5:
        setImg(DiceFive);
        break;
      case 6:
        setImg(DiceSix);
        break;

      default:
        setImg(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={img} />
      <Pressable style={styles.clickDiv} onPress={() => rollDice()}>
        <Text style={styles.clickText}>Click Me to Roll Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickDiv: {
    borderBlockColor: '#000',
    borderWidth: 2,
    padding: 6,
  },
  clickText: {
    color: '#000345',
    fontSize: 20,
  },
});

export default App;
