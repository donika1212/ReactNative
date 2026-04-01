import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

const CustomButton = ({ title, onPress }) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BABF94',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    text: {
        color: '#A98B76',
        fontsize: 16
    }
});

export default CustomButton;