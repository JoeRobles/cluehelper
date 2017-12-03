import React, {Component} from 'react';
import ClueCard from './ClueCard';

class ClueCards extends Component {
  render() {
    let ulclass = 'items-list';
    if (this.props.head) {
      ulclass += ' col-xs-4';
    }
    let lihead = '';
    if (this.props.head) {
      lihead = <li className="text-center"><strong>{this.props.card.toUpperCase()}S</strong></li>
    }

    return(
      <ul className={ulclass}>
        {lihead}
        {this.props.cards.map((card, index) => {
          return (
            <li className="img-hover" key={index}>
              <ClueCard
                card={card}/> <a onClick={() => {this.props.execute(card, 0, this.props.card + 's')}}>{this.props.label}</a>
            </li>
          );
        })}
      </ul>
    )
  }
}

export default ClueCards;
