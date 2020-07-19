<template src="./template.html"></template>

<script>
import TabBar from '@/components/TabBar/TabBar.vue';
import IOCOrder from './IOCFolder/IOCOrder.vue';
import FOKOrder from './FOKFolder/FOKOrder.vue';

export default {
  name: 'market-order',
  components: {
    TabBar,
    IOCOrder,
    FOKOrder,
  },

  data() {
    return {
      activeTab: 'Immediate Or Cancel',
      tabs: [ 'Immediate Or Cancel','Fill Or Kill',],
      height: 0,
      statusCode: '',
      preActive:'Immediate Or Cancel',
    };
  },
  
  methods: {
    activeTabChange(activeTab) {
      this.activeTab = activeTab;
      if (activeTab === 'Immediate Or Cancel') {
        this.$store.commit('changeMarketIOCTab');
      } else {
        this.$store.commit('changeMarketFOKTab');
      }
      if (this.preActive !== activeTab) {
        this.$root.$emit('MarketTabChange', activeTab);
        this.preActive = activeTab;
      }
    }, 

    getStatus(exc) {
      if (exc === 'auto') {
        this.statusCode = this.$store.getters.getAutoStatus;
      } else {
        this.statusCode = this.$store.getters[`get${exc}OrderStatus`];
      }
    },
  },

};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
