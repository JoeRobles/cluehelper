import React, {Component} from 'react';

class ClueCard extends Component {
  render() {
    return (
      <span className="img-hover">
        <img
          alt={this.props.card.id + ' image'}
          className="card card-hover"
          src={'images/' + this.props.card.id + '.png'}
        /> {this.props.card.name}
      </span>
    );
  }
}

export default ClueCard;
