import React, {Component} from 'react';

class AddPlayer extends Component {
  render() {
    return (
      <div className="row">
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Enter player's name"
            type="text"
            onChange={this.props.onChange}
            value={this.props.player.name}
          />
          {
            (this.props.players.indexOf(this.props.player) === -1) ?
              <span className="input-group-btn">
                <button
                  className="btn btn-primary"
                  onClick={this.props.onClick}
                  type="button">Add</button>
              </span> :
              null
          }
        </div>
      </div>
    )
  }
}

export default AddPlayer;
