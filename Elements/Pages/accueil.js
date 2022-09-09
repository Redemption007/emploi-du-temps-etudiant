import * as React from 'react';
import NavBar from '../Context/navbar.js'


const Accueil = ({ navigation }) => {
    return (
      <NavBar navigation={navigation}/>
    );
  };

module.exports = Accueil