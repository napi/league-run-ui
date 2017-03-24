import React, {PropTypes} from 'react';
import fetch from "isomorphic-fetch";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';

class PostGame extends React.Component {
  static propTypes = {
    apiUrl: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: false,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false
    };
    this.state.rankList = [];
  }

  componentDidMount() {
    this._getData(this.props.apiUrl).then(data => {
      this.setState({ rankList: data });
    });
  }

  _getData(url) {
    return fetch(url)
      .then(response => response.json());
  }

  render() {
    return (
      <div className="post-game">
        <h1 className="header-postgame"></h1>
        <ol>
        {this.state.rankList.map( (item, index) => {
          if (index < 4) {
            let avatarCss = {
              backgroundImage: 'url(' + item.photoUrl + ')',
            };
            return (
              <li key={index} data-tier={index + 1} className={
                (index <= 2) ? 'top-ranker list-row' : 'rage-guy list-row'
              }>
                <div className="list-container">
                  <div className="list-detail-info">
                    <div className="list-name">
                      {(index == 3) ? 'Poor ' : ''} {item.firstName} {item.middleName} {item.lastName}
                    </div>
                    <div className="list-score"><span className="list-define">Total Score:</span> <span className="list-number">{item.totalCombo}</span></div>
                    <div className="list-combo"><span className="list-define">Max Combo:</span> <span className="list-number">{item.maxCombo}</span></div>
                    <div className="list-time"><span className="list-define">Traveling Time:</span> <span className="list-number">{item.travellingTime}</span></div>
                  </div>
                  <div className="list-avatar" style={avatarCss}></div>
                  <div className="list-rank">{(index <= 2) ? index + 1 : 'Loser'}</div>
                </div>
              </li>
            );
          }
        })}
        </ol>

      </div>
    );
  }
}

export default PostGame;