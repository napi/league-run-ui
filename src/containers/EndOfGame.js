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
  // http://10.202.49.132:8888/loadRankerInfo
  // http://10.202.49.132:8888/lastGameInfo

  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-15 ">
          <PostGame
            lastGameInfo="http://10.202.49.132:8888/lastGameInfo"
            isRunning="http://10.202.49.132:8888/manage/isRunningGame"
            getPlayer="http://10.202.49.132:8888/manage/currentPlayers"
          />
        </div>
      </div>
    </div>
  );
};

export default EndOfGame;
