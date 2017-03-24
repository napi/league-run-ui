import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';

import Ranking from '../components/Ranking';

import globalStyles from '../styles';
import Data from '../data';

const DashboardPage = () => {

  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-15 ">
          <Ranking apiUrl="http://demo7987876.mockable.io/thunder/loadRankerInfo"/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
