'use strict';

import React,{Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import styles from '../styles/homeStyle';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={{uri: this.props.image}} />
                <Text style={styles.text}>This is card {this.props.name}</Text>
            </View>
        )
    }
}

class NoMoreCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more cards</Text>
            </View>
        )
    }
}

const cards = [
    {name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
    {name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
    {name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
    {name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
    {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
    {name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
    {name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
    {name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
    {name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
];

const cards2 = [
    {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
    {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
    {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
    {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: cards,
            outOfCards: false
        }
    }

    handleYup (card) {
        console.log("yup")
    }

    handleNope (card) {
        console.log("nope")
    }

    cardRemoved (index) {
        console.log(`The index is ${index}`);

        let CARD_REFRESH_LIMIT = 3;

        if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
            console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

            if (!this.state.outOfCards) {
                console.log(`Adding ${cards2.length} more cards`);

                this.setState({
                    cards: this.state.cards.concat(cards2),
                    outOfCards: true
                })
            }
        }
    }

    render() {
        return (
            <SwipeCards
                cards={this.state.cards}
                loop={false}

                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                showYup={true}
                showNope={true}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                cardRemoved={this.cardRemoved.bind(this)}
            />
        )
    }
}