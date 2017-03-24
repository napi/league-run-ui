import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';

import PostGame from '../components/PostGame';

import globalStyles from '../styles';
import Data from '../data';

const EndOfGame = () => {

  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-15 ">
          <PostGame apiUrl="http://demo7987876.mockable.io/thunder/loadRankerInfo"/>
        </div>
      </div>
    </div>
  );
};

export default EndOfGame;
