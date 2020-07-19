import Vue from 'vue';
import Router from 'vue-router';
import History from '@/components/History/History.vue';
import BalanceTransfer from '@/components/BalanceTransfer/BalanceTransfer.vue';
import SummaryVega from '@/components/BalanceTransfer/SummaryVegaWallet/SummaryVegaWallet.vue';
import ActiveOrdersMobile from '@/components/ActiveOrdersMobile/ActiveOrders.vue';
import RecentTradesMobile from '@/components/RecentTradesMobile/RecentTrades.vue';
import PositionsMobile from '@/components/PositionsMobile/Positions.vue';
import LocalStorage from '@/utils/localStorage.js';
import EventBus, {  EventNames,} from '@/eventBuses/default';
import Landing from '@/components/Landing/Landing.vue';
// import chart from '@/components/ChartingLibraryImpl/chart.vue';
// import app from '@/components/ChartingLibWorking/client/src/App.vue'; //CHARTING LIBRARY


// import TradeModalMobile from '@/components/TradeModalMobile/TradeModalMobile';

Vue.use(Router);

const vueRouter = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Landing,
    meta: {
      pageTitle: 'VEGA Protocol: Testnet',
    },
  },
  //TV CONTAINER - TRADING_VIEW (below)
          // {
          //   path: '/chart',        //MOBILE - ACTIVE ORDERS SIDE BAR
          //   name: 'chart',
          //   component: chart,
          //   meta: {
          //     pageTitle: 'Chart',
          //   },
          // },
  //TV CONTAINER - TRADING_VIEW (above)
           {
             path: '/active-orders',        //MOBILE - ACTIVE ORDERS SIDE BAR
             name: 'active-orders-mobile',
             component: ActiveOrdersMobile,
             meta: {
               pageTitle: 'Active Orders',
             },
           },
           {
            path: '/recent-trades',       //MOBILE - RECENT TRADES SIDE BAR
            name: 'recent-trades-mobile',
            component: RecentTradesMobile,
            meta: {
              pageTitle: 'Active Trades',
            },
          },
          {
            path: '/positions',       //MOBILE - POSITIONS SIDE BAR
            name: 'positions-mobile',
            component: PositionsMobile,
            meta: {
              pageTitle: 'Positions',
            },
          },

          //  {
          //    path: '/trade-modal',
          //    name: 'trade-modal-mobile',
          //    component: TradeModalMobile,
          //    meta: {
          //      pageTitle: 'Trade',
          //    },
          //  },
           {
             path: '/balance',
             component: BalanceTransfer,
             meta: {
               pageTitle: 'Vega Protocol - Balance Information',
               needLogin: false,
             },
             children: [{
               path: '',
               name: 'wallet-summary-vega',
               component: SummaryVega,
               meta: {
                 pageTitle: 'Vega Protocol - Balance Information',
                 needLogin: false,
               },
             }, ],
           },
           {
             path: '/history',
             name: 'history',
             component: History,
             meta: {
               pageTitle: 'Vega Protocol - Account History',
               needLogin: false,
             },

           },
  ],
});

vueRouter.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !LocalStorage.isUserLoggedIn()) {
    EventBus.$emit(EventNames.userSessionExpired);
    return next(false);
  }
  document.title = to.meta.pageTitle;
  return next();
});

vueRouter.afterEach(() => {
  Vue.nextTick().then(() => {
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
  });
});

export default vueRouter;
