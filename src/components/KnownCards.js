import React, {Component} from 'react';
import ClueCards from './ClueCards';

class KnownCards extends Component {
  render() {
    return (
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
            {this.props.players.map((player, index) => {
              return (
                <tr key={index}>
                  <th className="text-center">{index + 1}</th>
                  <td>{player.name}</td>
                  <td>
                    <ClueCards
                      execute={this.props.execute}
                      cards={player.rooms}
                      card="room"
                      label="Remove"
                      head={false}/>
                  </td>
                  <td>
                    <ClueCards
                      execute={this.props.execute}
                      cards={player.suspects}
                      card="suspect"
                      label="Remove"
                      head={false}/>
                  </td>
                  <td>
                    <ClueCards
                      execute={this.props.execute}
                      cards={player.weapons}
                      card="weapon"
                      label="Remove"
                      head={false}/>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default KnownCards;
