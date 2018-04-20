Vue.component('lottery-type-select', {
    template: `
        <select name="lottery-type-select" v-model="lotteryType" @change="emitLotteryType(lotteryType)">
            <option v-for="(item, key) in lotteryConfig" :value="key">
                {{ option.typeCnName }}
            </option>
        </select>
    `,
    props: ['lottery-config'],
    data() {
        return {
            lotteryType: 'ssc', //默认时时彩类型
        };
    },
    methods: {
        emitLotteryType(lotteryType) {
            this.$emit('receiveLotteryType', lotteryType);
        }
    }
});
Vue.component('lottery-select', {
    template: `
        <select name="lottery-select" v-model="lottery" @change="emitLottery(lottery)">
            <option v-for="(item, key) in lotteryConfig[lotteryType].lotteries" :value="item.code">
                {{ option.cnName }}
            </option>
        </select>
    `,
    props: ['lottery-config', 'lottery-type'],
    data() {
        return {
            lottery: this.lotteryConfig[this.lotteryType].lotteries[0].code, //默认第一个
        };
    },
    methods: {
        emitLottery(lottery) {
            this.$emit('receiveLottery', lottery);
        }
    }
});
Vue.component('lottery-tab', {
    template: `
        <ul>
            <li :class="{on: tab.en === tabCode}" v-for="(tab, index) in lotteryConfig[lotteryType].tabs" @click="switchTab(tab.en)">{{tab.cn}}</li>
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
            this.$emit('receiveTab', tabCode);
        }
    }
});
new Vue({
    el: '#vue-chart',
    data: {
        lotteryType: 'ssc',
        lottery: 'CQSSC',
        tabCode: 'ssc-5x',
        lotteryConfig: {
            'ssc': {
                typeCnName: '时时彩系列',
                lotteries: [{
                        'code': 'CQSSC',
                        'cnName': '重庆时时彩'
                    },
                    {
                        'code': 'TJSSC',
                        'cnName': '天津时时彩'
                    },
                ],
                tabs: [{
                        en: 'ssc-5x',
                        cn: '五星'
                    },
                    {
                        en: 'ssc-4x',
                        cn: '四星'
                    },
                    {
                        en: 'ssc-q3',
                        cn: '前三'
                    },
                    {
                        en: 'ssc-z3',
                        cn: '中三'
                    },
                    {
                        en: 'ssc-h3',
                        cn: '后三'
                    },
                    {
                        en: 'ssc-q2',
                        cn: '前二'
                    },
                    {
                        en: 'ssc-h2',
                        cn: '后二'
                    },
                    {
                        en: 'ssc-qw&nn',
                        cn: '趣味玩法&牛牛'
                    }
                ]
            },
            '11y': {
                typeCnName: '11选5系列',
                lotterys: [{
                        'code': 'GD11Y',
                        'cnName': '广东11选5'
                    },
                    {
                        'code': 'AH11Y',
                        'cnName': '安徽11选5'
                    },
                ],
                tabs: [{
                    en: '11y-3x',
                    cn: '三星'
                }]
            },
        }
    },
    methods: {
        receiveLottery(data) {
            this.lottery = data;
            console.log(data);
        },
        receiveLotteryType(data) {
            this.lotteryType = data;
        },
        receiveTab(data) {
            this.tabCode = data;
        }
    },
    computed: {},
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {}
});