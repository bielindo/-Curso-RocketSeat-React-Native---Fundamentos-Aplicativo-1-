import {StyleSheet} from "react-native"


export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      padding: 24
    },
  
    eventName: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: 'gray',
      fontSize: 16
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FFF',
      padding: 16,
      fontSize: 16,
      marginRight: 12
     
    },

    buttonText: {
      color : "white",
      fontSize: 24
    },

    button: {
      width : 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },

    listEmptyText: {
      color: "#FFF",
      fontSize: 14,
      textAlign: 'center'
    }

  });