import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  ranking: [
   {
     "userId": 7,
     "firstName": "Robin",
     "middleName": "middle",
     "lastName": "Kim",
     "photoUrl": "http://photosapi.pre.riotgames.com:80/v1/photos/58c342448af8560010de862e?api_key=f0f436f8d79d4138b916deaf020d5926",
     "totalCombo": 2,
     "maxCombo": 2,
     "travellingTime": 150
   },
   {
     "userId": 6,
     "firstName": "David",
     "middleName": "middle",
     "lastName": "Choi",
     "photoUrl": "http://photosapi.pre.riotgames.com:80/v1/photos/58c341d2ffd7e00011cd362c?api_key=f0f436f8d79d4138b916deaf020d5926",
     "totalCombo": 2,
     "maxCombo": 2,
     "travellingTime": 160
   },
   {
     "userId": 2,
     "firstName": "Lain",
     "middleName": "middle",
     "lastName": "Yeo",
     "photoUrl": "http://photosapi.pre.riotgames.com:80/v1/photos/58c353daf1b2c700104ce76c?api_key=f0f436f8d79d4138b916deaf020d5926",
     "totalCombo": 100,
     "maxCombo": 50,
     "travellingTime": 161
   },
   {
     "userId": 4,
     "firstName": "Pepper",
     "middleName": "middle",
     "lastName": "Jeong",
     "photoUrl": "http://photosapi.pre.riotgames.com:80/v1/photos/58c35c468ad9e5001049fe69?api_key=f0f436f8d79d4138b916deaf020d5926",
     "totalCombo": 2,
     "maxCombo": 2,
     "travellingTime": 169
   },
   {
     "userId": 5,
     "firstName": "Alan",
     "middleName": "middle",
     "lastName": "Jeon",
     "photoUrl": "http://photosapi.pre.riotgames.com:80/v1/photos/58c35e6ef1b2c700104cee1c?api_key=f0f436f8d79d4138b916deaf020d5926",
     "totalCombo": 2,
     "maxCombo": 2,
     "travellingTime": 199
   },
   {
     "userId": 3,
     "firstName": "Billie",
     "middleName": "middle",
     "lastName": "Yang",
     "photoUrl": "http://photosapi.pre.riotgames.com:80/v1/photos/58c353d98ad9e5001049f945?api_key=f0f436f8d79d4138b916deaf020d5926",
     "totalCombo": 2,
     "maxCombo": 2,
     "travellingTime": 211
   },
   {
     "userId": 1,
     "firstName": "Ryan",
     "middleName": "middle",
     "lastName": "Cheong",
     "photoUrl": "http://photosapi.pre.riotgames.com:80/v1/photos/58c342428af8560010de862d?api_key=f0f436f8d79d4138b916deaf020d5926",
     "totalCombo": 1,
     "maxCombo": 1,
     "travellingTime": 222
   }
  ],
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Form Page', icon: <Web/>, link: '/form' },
    { text: 'Table Page', icon: <GridOn/>, link: '/table' },
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
