<template src="./template.html"></template>

<script>
import EventBus, { EventNames, } from '@/eventBuses/default';
import Spinner from '@/components/Spinner/Spinner.vue';
import gql from 'graphql-tag';
import VegaProtocolService from '@/services/VegaProtocolService';
import TradingVue from 'trading-vue-js'; 
import {DataCube} from 'trading-vue-js';

export default {
  name: 'chart',

  components: {
    Spinner,
    TradingVue,
  },

  props: {
    parentHeight: Number,
  },

  data() {
    return {
      chart:  new DataCube(),
      marketId: 'RTJVFCMFZZQQLLYVSXTWEN62P6AH6OCN',
      interval: 'I5M',
    };
  },

  // computed: {
  //   positions() {
  //     return this.mapActiveOrders(this.$store.getters.positions);
  //   },
  // },

  // apollo: {
  //   $subscribe: {
  //     candles: {
  //       query: gql`subscription name($marketId: String!, $interval: Interval!) {
  //                   candles (marketId: $marketId, interval: $interval ) {
  //                       timestamp
  //                       datetime
  //                       high
  //                       low
  //                       open
  //                       close
  //                       volume
  //                       interval
  //                     }
  //                   }`,

  //       variables() {  return {marketId: this.marketId, interval: this.interval};  },

  //       result({data,loading,}) {
  //         if (loading) {
  //           // console.log('loading');
  //         }
  //         let candles = data;          
  //         // console.log(candles);
  //         // // console.log(candles.data)
  //         this.addToChart(candles.candles);
  //       },
  //     },
  //   },
  // },

  created() {

  },

  mounted() {
    // this.userLogoutListener = () => (this.positions = []);
    // EventBus.$on(EventNames.userLogin, this.userLoginListener);  //GET POSITIONS
    // EventBus.$on(EventNames.userLogout, this.userLogoutListener); //GO EMPTY AGAIN
    // EventBus.$on(EventNames.pubKeyChanged,this.userLoginListener);  //to handle change in pubKey    
  },

  methods: {

    addToChart(candle) {
      // console.log(candle);
      // this.chart.update(candle);
      this.chart.update( this.formatingCandles(candle.timestamp, candle.open,candle.high, candle.low, candle.close, candle.volume) );
      // this.ohlcv.push( this.formatingCandles(candle.timestamp, candle.open,candle.high, candle.low, candle.close, candle.volume) );
    },

  formatingCandles (time, open, high, low, close, volume) {
    return {
      time: Math.floor(time / 1000000000),
      open,
      high,
      low,
      close,
      volume,
    }
  }





  },

  destroyed() {

  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>


