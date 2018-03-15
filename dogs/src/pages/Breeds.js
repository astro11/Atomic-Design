import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  getBreeds = this.getBreeds.bind(this);

  componentDidMount() {
    this.getBreeds();
  }

  getBreeds() {
    axios.get("https://dog.ceo/api/breeds/list")
    .then(response => response.data.message)
    .then(breeds => this.filterBreeds(breeds))
    .then(filteringBreeds => {
      this.setState({
        breeds: this.filteringBreeds
      });
      return filteringBreeds;
    })
  }

  getFirtstImg(dogs) {
    let firstDog = dogs[0];
  }
 
  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: "hound",
      retriever: "retriever",
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter"
    }

    return breeds.filter(breed => choiceBreeds[breed]);
  }
  
  render() {
    return
    <Options />
  }
} 

export default Breeds;