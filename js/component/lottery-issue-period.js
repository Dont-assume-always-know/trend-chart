Vue.component('lottery-issue-period', {
    template: `
        <ul class="clearfix fl issue-period-list">
            <li class="fl issue-period-item" :class="{on: index === activeTabIndex}" v-for="(item, index) in issuePeriodConfig" @click="switchAndEmitPeriod(index, item)">{{item.cn}}</li>
        </ul>
    `,
    props: ['issue-period-config'],
    data() {
        return {
            activeTabIndex: 0, //默认第一个
        };
    },
    methods: {
        switchAndEmitPeriod(index, periodObj) {
            this.activeTabIndex = index;
            this.$emit('receiveperiod', periodObj.en || periodObj.day);
        }
    }
});