import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Header = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F3E3D0",
        padding: 15
    },

    title:{
        fontsize: 20,
        color: "#81A6C6",
        textAlign: "center"
    }
});

export default Header;