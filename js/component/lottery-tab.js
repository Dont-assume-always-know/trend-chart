Vue.component('lottery-tab', {
    template: `
        <ul class="clearfix lottery-tab-list">
            <li class="fl lottery-tab-item" v-for="(tab, index) in tabsArr" @click="switchTab(tab.en)" :class="{on: tab.en === _tabCode}">{{tab.cn}}</li>
        </ul>
    `,
    props: ['tabs-arr', 'tab-default-obj', 'lottery-type', 'lottery'],
    data() {
        return {
            _tabCode: '', //默认第一个
        };
    },
    methods: {
        switchTab(tabCode) {
            this._tabCode = tabCode;
            this.$forceUpdate();
            this.$emit('receivetab', tabCode);
        }
    },
    watch: {
        lotteryType(newVal, oldVal) {
            let unWatch;
            if (newVal === 'other') {
                this._tabCode = 'kl12-all';
                unWatch = this.$watch('lottery', (newLt, oldLt) => {
                    switch (newLt) {
                        case 'HNKY481':
                            this._tabCode = 'ky481-4x';
                            break;
                        case 'SCKL12':
                            this._tabCode = 'kl12-all';
                            break;
                    }
                    this.$forceUpdate();
                });
            } else {
                typeof unWatch === 'function' && unWatch();
                this._tabCode = this.tabDefaultObj[newVal];
            }
            this.$emit('receivetab', this._tabCode);
        }
    },
    created() {
        this._tabCode = this.tabDefaultObj[this.lotteryType]; //默认第一个
        this.$emit('receivetab', this._tabCode);
    }
});