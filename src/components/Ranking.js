import React, {PropTypes} from 'react';
import fetch from "isomorphic-fetch";
import _ from "lodash";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';

const onlyUnique = (value, index, self) => { 
  return self.indexOf(value) === index;
}

class Ranking extends React.Component {
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
    this.interval = setInterval(this.tick.bind(this), 5000);
  }

  tick() {
    const {apiUrl} = this.props;

    this._fetch(apiUrl).then(data => {
      this.setState({ rankList: data });
    });
  }

  _fetch(url) {
    return fetch(url)
      .then(response => response.json());
  }

  render() {
    const rankList = _.uniqBy(this.state.rankList, (e) => {
      return e.userId;
    });

    return (
      <div className="ranking">
        <h1 className="header-ranking"></h1>
        <Table>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            <TableRow className="list-row list-row-header">
              <TableRowColumn className="list-column-rank"></TableRowColumn>
              <TableRowColumn className="list-column-avatar"></TableRowColumn>
              <TableRowColumn className="list-column-name"></TableRowColumn>
              <TableRowColumn className="list-column-combo">Max Combo</TableRowColumn>
              <TableRowColumn className="list-column-score">Score</TableRowColumn>
            </TableRow>
            {rankList.map( (item, index) => (
              <TableRow key={index} data-tier={index + 1} className={
                (index <= 2) ? 'top-ranker ranker list-row' :
                (index <= 4) ? 'ranker list-row' : 'list-row'
              }>
                <TableRowColumn className="list-column-rank">{index + 1}</TableRowColumn>
                <TableRowColumn className="list-column-avatar"><Avatar className="avatar" src={item.photoUrl}/></TableRowColumn>
                <TableRowColumn className="list-column-name">{item.firstName} {item.middleName} {item.lastName}</TableRowColumn>
                <TableRowColumn className="list-column-combo">{item.maxCombo}</TableRowColumn>
                <TableRowColumn className="list-column-score">{item.score}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>

      </div>
    );
  }
}

export default Ranking;