import { StatusBar } from 'expo-status-bar';
import { NativeEventEmitter } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const StudentCard = (props) =>{
    return(
        <View style ={styles.card}>
            <Text style={styles.text}>Name: {props.name} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: "#AACDDC",
        borderRadius: 10
    },
    text: {
        fontSize: 30
    }
});


export default StudentCard;