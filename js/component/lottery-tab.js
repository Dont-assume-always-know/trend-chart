Vue.component('lottery-tab', {
    template: `
        <ul class="clearfix lottery-tab-list">
            <li class="fl lottery-tab-item" :class="{on: tab.en === tabCode}" v-for="(tab, index) in lotteryConfig[lotteryType].tabs" @click="switchTab(tab.en)">{{tab.cn}}</li>
        </ul>
    `,
    props: ['lottery-config', 'lottery-type'],
    data() {
        return {
            tabCode: this.lotteryConfig[this.lotteryType].tabs[0].en, //默认第一个
        };
    },
    methods: {
        switchTab(tabCode) {
            this.tabCode = tabCode;
            this.$emit('receivetab', tabCode);
        }
    }
});