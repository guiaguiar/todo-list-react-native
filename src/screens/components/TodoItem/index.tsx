import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "../RadioButton";

import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
  handleFinishedCount: (value: boolean) => void;
}

export function TodoItem({ name, onRemove, handleFinishedCount }: Props) {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isDeleteFocused, setIsDeleteFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.radioButton}>
        <RadioButton isSelected={isFinished} setSelected={() => {
          {
            handleFinishedCount(!isFinished);

            setIsFinished(!isFinished);
          }
        }} />
      </View>

      <Text style={{ ...styles.name, textDecorationLine: isFinished ? 'line-through' : 'none', color: isFinished ? '#808080' : '#FFF' }}>
        {name}
      </Text>

      <TouchableOpacity style={{ ...styles.thrashButton, backgroundColor: isDeleteFocused ? '#333333' : '#1F1E25' }} onPress={() => {
        Alert.alert("Remover", `Remover a tarefa?`, [
          {
            text: 'Sim',
            onPress: () => {
              onRemove();
              if (isFinished) {
                handleFinishedCount(false);
              }
            }
          },
          {
            text: 'Não',
            style: 'cancel'
          }
        ])
      }}
        activeOpacity={1}
        onPressIn={() => setIsDeleteFocused(true)}
        onPressOut={() => setIsDeleteFocused(false)}
      >
        {isDeleteFocused ?
          <Image source={require('../../../../assets/thrash-red.png')} /> :
          <Image source={require('../../../../assets/thrash.png')} />}

      </TouchableOpacity>
    </View>
  )
}