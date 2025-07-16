import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log("C")} label="C" color={colors.lightkGray} blackText />
        <CalculatorButton onPress={() => console.log("+/-" )} label="+/-" color={colors.lightkGray} blackText />
        <CalculatorButton onPress={() => console.log("del")} label="del" color={colors.lightkGray} blackText />
        <CalculatorButton onPress={() => console.log("/" )} label="/" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ () => console.log("7")} label="7" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("8")} label="8" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("9")} label="9" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("X")} label="X" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ () => console.log("4")} label="4" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("5")} label="5" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("6")} label="6" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("-")} label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ () => console.log("1")} label="1" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("2")} label="2" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("3")} label="3" color={colors.lightkGray} />
        <CalculatorButton onPress={ () => console.log("+")} label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log("0")} label="0" color={colors.lightkGray} doubleSize />
        <CalculatorButton onPress={() => console.log(".")} label="." color={colors.lightkGray} />
        <CalculatorButton onPress={() => console.log("=")} label="=" color={colors.orange} />
      </View>
    </View>
  );
};
