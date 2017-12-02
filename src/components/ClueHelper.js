import React, {Component} from 'react';

class ClueHelper extends Component {
  constructor(props) {
    super(props);
    this.theRooms = {
      kitchen: {
        id: 'kitchen',
        name: 'Cocina'
      },
      dining: {
        id: 'dining',
        name: 'Comedor'
      },
      guest: {
        id: 'guest',
        name: 'Habitación de huéspedes'
      },
      observatory: {
        id: 'observatory',
        name: 'Observatorio'
      },
      yard: {
        id:'yard',
        name: 'Patio'
      },
      living: {
        id: 'living',
        name: 'Sala'
      },
      spa: {
        id: 'spa',
        name: 'Spa'
      },
      theater: {
        id: 'theater',
        name: 'Teatro'
      },
      hall: {
        id: 'hall',
        name: 'Vestíbulo'
      },
    };
    this.theSuspects = {
      peacock: {
        id: 'peacock',
        name: 'Señora Azulino'
      },
      white: {
        id: 'white',
        name: 'Señora Blanco'
      },
      scarlet: {
        id: 'scarlet',
        name: 'Señorita Escarlata'
      },
      plum: {
        id: 'plum',
        name: 'Profesor Moradillo'
      },
      mustard: {
        id: 'mustard',
        name: 'Entrenador Mostaza'
      },
      green: {
        id: 'green',
        name: 'Señor Verdi'
      },
    };
    this.theWeapons = {
      bat: {
        id: 'bat',
        name: 'Bate'
      },
      candlestick: {
        id: 'candlestick',
        name: 'Candelabro'
      },
      knife: {
        id: 'knife',
        name: 'Cuchillo'
      },
      rope: {
        id: 'rope',
        name: 'Cuerda'
      },
      axe: {
        id: 'axe',
        name: 'Hacha'
      },
      wrench: {
        id: 'wrench',
        name: 'Pesas'
      },
      gun: {
        id: 'gun',
        name: 'Pistola'
      },
      trophy: {
        id: 'trophy',
        name: 'Trofeo'
      },
      poison: {
        id: 'poison',
        name: 'Veneno'
      },
    };
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
    this.players = [
      {
        name: 'Me',
        rooms: [],
        suspects: [],
        weapons: [],
      }
    ];
    this.suggestions = [
      {
        whos: this.players[2],
        room: this.rooms[2],
        weapon: this.theWeapons.wrench,
        suspect: this.theSuspects.peacock,
        wrong: {
          is: true,
          who: this.players[3]
        }
      }
    ];
    this.state = {
      rooms: this.rooms,
      suspects: this.suspects,
      weapons: this.weapons,
      players: this.players,
      player: {},
    };
    this.updatePlayerName = this.updatePlayerName.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.removeRoom = this.removeRoom.bind(this);
    this.addSuspect = this.addSuspect.bind(this);
    this.removeSuspect = this.removeSuspect.bind(this);
    this.addWeapon = this.addWeapon.bind(this);
    this.removeWeapon = this.removeWeapon.bind(this);
  }

  updatePlayerName(event) {
    this.setState({
      player: {
        name: event.target.value,
        suspects: [],
        weapons: [],
        rooms: []
      }
    });
  }

  addPlayer() {
    if (this.state.player !== '') {
      this.setState({
        players: this.state.players.concat(this.state.player),
        player: {name: ''}
      });
    }
  }

  addRoom(room, player) {
    let rooms = this.state.rooms;
    let index = rooms.indexOf(room);
    if (index > -1) {
      rooms.splice(index, 1);
      this.setState({
        rooms: rooms
      });

      let playerRooms = this.players[player].rooms;
      playerRooms.push(room);
      this.players[player].rooms.concat(playerRooms);
    }
  }

  removeRoom(room, player){
    let playerRooms = this.players[player].rooms;
    let index = playerRooms.indexOf(room);
    if (index > -1) {
      playerRooms.splice(index, 1);
      this.players[player].rooms = playerRooms;

      this.setState({
        rooms: this.state.rooms.concat(room)
      });
    }
  }

  addSuspect(suspect, player) {
    let suspects = this.state.suspects;
    let index = suspects.indexOf(suspect);
    if (index > -1) {
      suspects.splice(index, 1);
      this.setState({
        suspects: suspects
      });

      let playerSuspects = this.players[player].suspects;
      playerSuspects.push(suspect);
      this.players[player].suspects.concat(playerSuspects);
    }
  }

  removeSuspect(suspect, player){
    let playerSuspects = this.players[player].suspects;
    let index = playerSuspects.indexOf(suspect);
    if (index > -1) {
      playerSuspects.splice(index, 1);
      this.players[player].suspects = playerSuspects;

      this.setState({
        suspects: this.state.suspects.concat(suspect)
      });
    }
  }

  addWeapon(weapon, player) {

    let weapons = this.state.weapons;
    let index = weapons.indexOf(weapon);
    if (index > -1) {
      weapons.splice(index, 1);
      this.setState({
        weapons: weapons
      });

      let playerWeapons = this.players[player].weapons;
      playerWeapons.push(weapon);
      this.players[player].weapons.concat(playerWeapons);
    }
  }

  removeWeapon(weapon, player){
    let playerWeapons = this.players[player].weapons;
    let index = playerWeapons.indexOf(weapon);
    if (index > -1) {
      playerWeapons.splice(index, 1);
      this.players[player].weapons = playerWeapons;

      this.setState({
        weapons: this.state.weapons.concat(weapon)
      });
    }
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Cluedo Helper</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav"></ul>
          </div>
        </nav>
        <div className="row">
          <ul className="rooms-list col-xs-4">
            <li className="text-center"><strong>ROOMS</strong></li>
            {
              this.state.rooms.map((room, index) => {
                return (
                  <li key={index}>
                    <img
                      alt={room.id + ' image'}
                      className="room"
                     src={'images/' + room.id + '.png'}
                    />{room.name} <a onClick={() => {this.addRoom(room, 0)}}>Me</a>
                  </li>
                );
              })
            }
          </ul>
          <ul className="suspects-list col-xs-4">
            <li className="text-center"><strong>SUSPECTS</strong></li>
            {
              this.state.suspects.map((suspect, index) => {
                return (
                  <li key={index}>
                    <img
                      alt={suspect.id + ' image'}
                      className="suspect"
                      src={'images/' + suspect.id + '.png'}
                    />{suspect.name} <a onClick={() => {this.addSuspect(suspect, 0)}}>Me</a>
                  </li>
                );
              })
            }
          </ul>
          <ul className="weapons-list col-xs-4">
            <li className="text-center"><strong>WEAPONS</strong></li>
            {
              this.state.weapons.map((weapon, index) => {
                return (
                  <li key={index}>
                    <img
                      alt={weapon.id + ' image'}
                      className="weapon"
                      src={'images/' + weapon.id + '.png'}
                    />{weapon.name} <a onClick={() => {this.addWeapon(weapon, 0)}}>Me</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="row">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Enter player's name"
              type="text"
              onChange={this.updatePlayerName}
              value={this.state.player.name}
            />
            {
              (this.state.players.indexOf(this.state.player) === -1) ?
              <span className="input-group-btn">
                <button
                  className="btn btn-primary"
                  onClick={this.addPlayer}
                  type="button">Add</button>
              </span> :
              null
            }
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Rooms</th>
                  <th className="text-center">Suspects</th>
                  <th className="text-center">Weapons</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.players.map((player, index) => {
                    return (
                      <tr key={index}>
                        <th className="text-center">{index + 1}</th>
                        <td>{player.name}</td>
                        <td>
                          <ul className="rooms-list">
                            {player.rooms.map((room, index) => {
                              return (
                                <li key={index}>
                                  <img
                                    alt={room.id + ' image'}
                                    className="room"
                                    src={'images/' + room.id + '.png'}
                                  />{room.name} <a onClick={() => {this.removeRoom(room, 0)}}>Remove</a>
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                        <td>
                          <ul className="suspects-list">
                            {player.suspects.map((suspect, index) => {
                              return (
                                <li key={index}>
                                  <img
                                    alt={suspect.id + ' image'}
                                    className="suspect"
                                    src={'images/' + suspect.id + '.png'}
                                  />{suspect.name} <a onClick={() => {this.removeSuspect(suspect, 0)}}>Remove</a>
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                        <td>
                          <ul className="weapons-list">
                            {player.weapons.map((weapon, index) => {
                              return (
                                <li key={index}>
                                  <img
                                    alt={weapon.id + ' image'}
                                    className="weapon"
                                    src={'images/' + weapon.id + '.png'}
                                  />{weapon.name} <a onClick={() => {this.removeWeapon(weapon, 0)}}>Remove</a>
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          Suggestion
        </div>
      </div>
    );
  }
}

export default ClueHelper;
