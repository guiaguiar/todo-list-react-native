import { Image, Pressable } from "react-native";

type Props = {
    isSelected: boolean;
    setSelected: (value: boolean) => void;
}

export function RadioButton({ isSelected, setSelected }: Props) {

    return (

        <Pressable style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: isSelected ? 0 : 2,
            borderColor: isSelected ? 'transparent' : '#4EA8DE',
            backgroundColor: isSelected ? '#5E60CE' : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            elevation: 1,
            shadowColor: 'black',
        }}
            onPress={() => setSelected(!isSelected)}
        >
            {
                isSelected ?
                    <Image source={require('../../../../assets/check.png')} />
                    : null
            }
        </Pressable>
    )
}