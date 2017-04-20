import React, {PropTypes} from 'react';
import fetch from "isomorphic-fetch";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class PostGame extends React.Component {
  static propTypes = {
    lastGameInfo: PropTypes.string.isRequired,
    isRunning: PropTypes.string.isRequired,
    getPlayer: PropTypes.string.isRequired,
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
    this.state.jukebox = [];
    this.state.music = '3piece-JazzParty';
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 5000);
    this._fetch('http://localhost:8888/manage/noteList').then(res => {
      this.setState({jukebox: res.noteList});
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const {lastGameInfo, isRunning, getPlayer} = this.props;

    this._fetch(isRunning).then(res => {
      if (!res.result) { // end of game
        this._fetch(lastGameInfo).then(data => {
          if (data.length > 0) {
            this._setLastGameInfo(data);
          }
        });
      } else { // running game
        this._fetch(getPlayer).then(data => {
          this._setRunningGameInfo(data);
        })
      }
    });
  }

  _fetch(url) {
    return fetch(url)
      .then(response => response.json());
  }

  _setRunningGameInfo(data) {
    this.setState({
      isRunningGame: true,
      currentPlayer: data,
      rankList: []
    });
  }

  _setLastGameInfo(data) {
    this.setState({
      isRunningGame: false,
      currentPlayer: [],
      rankList: data
    });
  }


  handleChange(ev, index, value) {
    this.setState({music: value});

    const setMusicLink = `http://localhost:8888/manage/note/${value}`;
    fetch(setMusicLink);
  }

  render() {
    return (
      <div className="post-game">
        <h1 className="header-postgame"></h1>
        {!this.state.isRunningGame &&
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
                      <div className="list-score"><span className="list-define">Total Score:</span> <span className="list-number">{item.score}</span></div>
                      <div className="list-combo"><span className="list-define">Max Combo:</span> <span className="list-number">{item.maxCombo}</span></div>
                    </div>
                    <div className="list-avatar" style={avatarCss}></div>
                    <div className="list-rank">{(index <= 2) ? index + 1 : 'Loser'}</div>
                  </div>
                </li>
              );
            }
          })}
          </ol>
        }

        {this.state.isRunningGame &&
          <div>
            <h1 className="header-running">RUNNING GAME!!!!</h1>
            <ul>
            {this.state.currentPlayer.map(item => {
              <li>{item}</li>
            })}
            </ul>
          </div>
        }

        <div className="jukebox">
          <SelectField
            floatingLabelText="Jukebox"
            value={this.state.music}
            onChange={this.handleChange.bind(this)}
          >
            {this.state.jukebox.map(item => {
              return (
                <MenuItem key={item} className="jukebox-item" value={item} primaryText={item} />
              );
            })}
          </SelectField>
          <br />
        </div>
      </div>
    );
  }
}

export default PostGame;