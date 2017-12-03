import React, {Component} from 'react';
import ClueCards from './ClueCards';

class RemainCards extends Component {
  render() {
    return (
      <div className="row">
        <ClueCards
          execute={this.props.execute}
          cards={this.props.rooms}
          card="room"
          label="Me"
          head={true}/>
        <ClueCards
          execute={this.props.execute}
          cards={this.props.suspects}
          card="suspect"
          label="Me"
          head={true}/>
        <ClueCards
          execute={this.props.execute}
          cards={this.props.weapons}
          card="weapon"
          label="Me"
          head={true}/>
      </div>
    )
  };
}

export default RemainCards;
