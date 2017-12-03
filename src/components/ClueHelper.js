import React, {Component} from 'react';
import AddPlayer from './AddPlayer';
import KnownCards from './KnownCards';
import RemainCards from './RemainCards';
import Suggestions from './Suggestions';
import $ from 'jquery';
import {
  THE_ROOMS,
  THE_SUSPECTS,
  THE_WEAPONS,
  ME
} from './repository';

class ClueHelper extends Component {
  constructor(props) {
    super(props);
    this.theRooms = THE_ROOMS;
    this.theSuspects = THE_SUSPECTS;
    this.theWeapons = THE_WEAPONS;
    let rooms = [];
    for (let key in this.theRooms) {
      if (this.theRooms.hasOwnProperty(key)) {
        rooms.push(this.theRooms[key]);
      }
    }

    let suspects = [];
    for (let key in this.theSuspects) {
      if (this.theSuspects.hasOwnProperty(key)) {
        suspects.push(this.theSuspects[key]);
      }
    }

    let weapons = [];
    for (let key in this.theWeapons) {
      if (this.theWeapons.hasOwnProperty(key)) {
        weapons.push(this.theWeapons[key]);
      }
    }
    this.allRooms = rooms;
    this.allSuspects = suspects;
    this.allWeapons = weapons;

    this.rooms = [
      this.theRooms.kitchen,
      this.theRooms.dining,
      this.theRooms.guest,
      this.theRooms.observatory,
      this.theRooms.yard,
      this.theRooms.living,
      this.theRooms.spa,
      this.theRooms.theater,
      this.theRooms.hall,
    ];
    this.suspects = [
      this.theSuspects.peacock,
      this.theSuspects.white,
      this.theSuspects.scarlet,
      this.theSuspects.plum,
      this.theSuspects.mustard,
      this.theSuspects.green,
    ];
    this.weapons = [
      this.theWeapons.bat,
      this.theWeapons.candlestick,
      this.theWeapons.knife,
      this.theWeapons.rope,
      this.theWeapons.axe,
      this.theWeapons.wrench,
      this.theWeapons.gun,
      this.theWeapons.trophy,
      this.theWeapons.poison,
    ];
    this.players = [ME];
    this.suggestions = [];
    this.state = {
      player: {},
      players: this.players,
      rooms: this.rooms,
      room: {},
      suggestions: this.suggestions,
      suspects: this.suspects,
      suspect: {},
      weapons: this.weapons,
      weapon: {},
      who: {},
      whos: {},
      wrong: false
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.addCard = this.addCard.bind(this);
    this.addSuggestion = this.addSuggestion.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.updatePlayerName = this.updatePlayerName.bind(this);
    this.updateRoom = this.updateRoom.bind(this);
    this.updateSuspect = this.updateSuspect.bind(this);
    this.updateWeapon = this.updateWeapon.bind(this);
    this.updateWho = this.updateWho.bind(this);
    this.updateWhos = this.updateWhos.bind(this);
    this.updateWrong = this.updateWrong.bind(this);
  }

  updatePlayerName(event) {
    if (event.target.value !== '') {
      this.setState({
        player: {
          name: event.target.value,
          rooms: [],
          suspects: [],
          weapons: [],
        }
      });
    }
  }

  addPlayer() {
    if (this.state.player !== '') {
      this.setState({
        players: this.state.players.concat(this.state.player),
        player: {name: ''}
      });
    }
  }

  updateRoom(event) {
    this.setState({room: this.allRooms[event.target.value]});
  }

  updateSuspect(event) {
    this.setState({suspect: this.allSuspects[event.target.value]});
  }

  updateWeapon(event) {
    this.setState({weapon: this.allWeapons[event.target.value]});
  }

  updateWho(event) {
    this.setState({who: this.state.players[event.target.value]});
  }

  updateWhos(event) {
    this.setState({whos: this.state.players[event.target.value]});
  }

  updateWrong(event) {
    this.setState({
      wrong: event.target.checked,
      who: {}
    });
  }

  addCard(card, player, label) {
    let cards = this.state[label];
    let index = cards.indexOf(card);
    if (index > -1) {
      cards.splice(index, 1);
      let state = [];
      state[label] = cards;
      this.setState(state);

      let playerCards = this.players[player][label];
      playerCards.push(card);
      this.players[player][label].concat(playerCards);
    }
  }

  removeCard(card, player, label) {
    let playerCards = this.players[player][label];
    let index = playerCards.indexOf(card);
    if (index > -1) {
      playerCards.splice(index, 1);
      this.players[player][label] = playerCards;

      let state = [];
      state[label] = this.state[label].concat(card);
      this.setState(state);
    }
  }

  addSuggestion() {
    let wrong = true;
    if (this.state.wrong && $.isEmptyObject(this.state.who)) {
      wrong = false;
    }
    if (
      !$.isEmptyObject(this.state.room) &&
      !$.isEmptyObject(this.state.suspect) &&
      !$.isEmptyObject(this.state.weapon) &&
      !$.isEmptyObject(this.state.whos) &&
      wrong
    ) {
      let suggestion = {
        room: this.state.room,
        suspect: this.state.suspect,
        weapon: this.state.weapon,
        whos: this.state.whos,
        wrong: {
          is: this.state.wrong,
          who: this.state.who
        }
      };
      this.setState({
        suggestions: this.state.suggestions.concat(suggestion)
      });
    }
  }

  render() {
    return (
      <div>
        <RemainCards
          execute={this.addCard}
          rooms={this.state.rooms}
          suspects={this.state.suspects}
          weapons={this.state.weapons}/>
        <AddPlayer
          onChange={this.updatePlayerName}
          onClick={this.addPlayer}
          player={this.state.player}
          players={this.state.players}
        />
        <KnownCards
          players={this.state.players}
          execute={this.removeCard}
        />
        <Suggestions
          add={this.addSuggestion}
          updateWrong={this.updateWrong}
          players={this.state.players}
          rooms={this.allRooms}
          room={this.updateRoom}
          suggestions={this.state.suggestions}
          suspects={this.allSuspects}
          suspect={this.updateSuspect}
          weapons={this.allWeapons}
          weapon={this.updateWeapon}
          who={this.updateWho}
          whos={this.updateWhos}
          wrong={this.state.wrong}/>
      </div>
    );
  }
}

export default ClueHelper;
