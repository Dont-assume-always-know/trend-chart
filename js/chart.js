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
                lotteries: [{
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
        }, 
        checkedConfig: [
            {
                id: 'miss',
                value: 'miss',
                model: [],
                text: '遗漏'
            },
            {
                id: 'miss-bar',
                value: 'missBar',
                model: [],
                text: '遗漏条'
            },
            {
                id: 'trend-line',
                value: 'trendLine',
                model: [],
                text: '走势图折线'
            },
            {
                id: 'cold-hot-number',
                value: 'coldHotNumber',
                model: [],
                text: '冷热号'
            },
        ],
        issuePeriodConfig: [
            {
                en: 30,
                cn: '近30期'
            },
            {
                en: 50,
                cn: '近50期'
            },
            {
                en: 100,
                cn: '近100期'
            },
            {
                day: 1,
                cn: '今日数据'
            },
            {
                day: 2,
                cn: '近2天'
            }
        ],
        issuePeriod: '',
        selectNumObj: {
            'ssc': [0,1,2,3,4,5,6,7,8,9],
            '11y': [1,2,3,4,5,6,7,8,9,10,11]
        }
    },
    methods: {
        receiveLottery(msg) {
            this.lottery = msg;
        },
        receiveLotteryType(msg) {
            this.lotteryType = msg;
        },
        receiveTab(msg) {
            this.tabCode = msg;
        },
        receiveCheckOption(msg) {
            this.checkedConfig = msg;
        },
        receivePeriod(msg) {
            this.issuePeriod = msg;
        },
        renderCheckOption(checkedConfig) {

        }
    },
    computed: {},
    watch: {
        checkedConfig: {
            deep: true,
            handler(newVal, oldVal) {
                for (let item of newVal) {
                    if (item.model[0]) {
                        console.log(item.model[0]);
                    } else {
                        console.log(item.model[0]);
                    }
                }
            }
        }
        
    },
    beforeCreate() {},
    created() {
        /* axios.get('./data.json').then(res=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
        }); */
    },
    beforeMount() {},
    mounted() {}
});