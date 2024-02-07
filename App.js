import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  return (
	<>
    	<View style={styles.container}>
      		<Text>Guess rusbé - Só a Ideia</Text>
		<StatusBar style="auto" />

	  	<Image source={{uri: "https://clipart-library.com/images_k/illuminati-triangle-transparent/illuminati-triangle-transparent-4.png"}} />
	</View>
	<View style={[styles.container, { flex: 0.2} ]}>
		<View style={[styles.container, {borderRadius:0.5, flexDirection: 'row'} ]}>
			<Button 
	  			title="Trilha"
	  			color="steelblue"
	  			style={styles.btn}
	  			
	  		/> 
			<Button 
	  			title="Home"
	  		/> 
			<Button 
	  			title="Menu"
	  			color="darkblue"
	  		/> 


	  	</View>



	</View>
	</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexGrow: 10,
    color: 'black',
  }
});
