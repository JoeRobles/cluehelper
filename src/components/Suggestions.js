import React, {Component} from 'react';
import ClueCard from './ClueCard';

class Suggestions extends Component {
  render() {
    return (
      <div className="row">

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Who's</th>
                <th className="text-center">Room</th>
                <th className="text-center">Suspect</th>
                <th className="text-center">Weapon</th>
                <th className="text-center">Wrong</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center"><button onClick={this.props.add} className="btn btn-primary">Add</button></td>
                <td>
                  <select name="whos" onChange={this.props.whos}>
                    <option>None</option>
                    {this.props.players.map((player, index) => {
                      return (
                        <option value={index} key={index}>{player.name}</option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <select name="room" onChange={this.props.room}>
                    <option>None</option>
                    {this.props.rooms.map((room, index) => {
                      return (
                        <option value={index} key={index}>{room.name}</option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <select name="suspect" onChange={this.props.suspect}>
                    <option>None</option>
                    {this.props.suspects.map((suspect, index) => {
                      return (
                        <option value={index} key={index}>{suspect.name}</option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <select name="weapon" onChange={this.props.weapon}>
                    <option>None</option>
                    {this.props.weapons.map((weapon, index) => {
                      return (
                        <option value={index} key={index}>{weapon.name}</option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <select name="who" onChange={this.props.who}>
                    <option>None</option>
                    {this.props.players.map((player, index) => {
                      return (
                        <option value={index} key={index}>{player.name}</option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              {this.props.suggestions.map((suggestion, index) => {
                return (
                  <tr key={index}>
                    <th className="text-center">{index + 1}</th>
                    <td>{suggestion.whos.name}</td>
                    <td>
                      <ClueCard
                        card={suggestion.room}/>
                    </td>
                    <td>
                      <ClueCard
                        card={suggestion.suspect}/>
                      </td>
                    <td>
                      <ClueCard
                        card={suggestion.weapon}/>
                    </td>
                    <td>
                      {
                        (suggestion.wrong.is) ?
                        suggestion.wrong.who.name :
                        null
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Suggestions;
