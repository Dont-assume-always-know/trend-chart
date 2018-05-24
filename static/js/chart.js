new Vue({
    el: '#vue-chart',
    data: {
        lotteryType: 'ssc',
        lottery: 'CQSSC',
        tabCode: 'ssc-5x',
        trendData: [],
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
                    {
                        'code': 'XJSSC',
                        'cnName': '新疆时时彩'
                    },
                    {
                        'code': 'XN5FC',
                        'cnName': '悉尼5分彩'
                    },
                    {
                        'code': 'BJ5FC',
                        'cnName': '北京5分彩'
                    },
                    {
                        'code': 'TW5FC',
                        'cnName': '台湾5分彩'
                    },
                    {
                        'code': 'HN5FC',
                        'cnName': '河内5分彩'
                    },
                    {
                        'code': 'RDFFC',
                        'cnName': '瑞典1分彩'
                    },
                    {
                        'code': 'RDLFC',
                        'cnName': '瑞典2分彩'
                    },
                    {
                        'code': 'RBSSM',
                        'cnName': '日本30秒'
                    },
                    {
                        'code': 'QQSSM',
                        'cnName': 'QQ30秒'
                    },
                    {
                        'code': 'WBGFFC',
                        'cnName': 'WBG分分彩'
                    },
                    {
                        'code': 'TXFFC',
                        'cnName': '腾讯分分彩'
                    },
                    {
                        'code': 'WBG5FC',
                        'cnName': 'WBG5分彩'
                    },
                    {
                        'code': 'PL5',
                        'cnName': '排列5'
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
                    {
                        'code': 'MC11Y',
                        'cnName': '摩臣11选5'
                    },
                    {
                        'code': 'SD11Y',
                        'cnName': '山东11选5'
                    },
                    {
                        'code': 'JX11Y',
                        'cnName': '江西11选5'
                    },
                    {
                        'code': 'SH11Y',
                        'cnName': '上海11选5'
                    },
                    {
                        'code': 'HLJ11Y',
                        'cnName': '黑龙江11选5'
                    },
                    {
                        'code': 'YN11Y',
                        'cnName': '云南11选5'
                    },
                    {
                        'code': 'HUB11Y',
                        'cnName': '湖北11选5'
                    }
                ],
                tabs: [{
                    en: '11y-3x',
                    cn: '三星'
                }]
            },
            'pk10': {
                typeCnName: 'pk10系列',
                lotteries: [{
                        'code': 'BJPK10',
                        'cnName': '北京pk10'
                    },
                    {
                        'code': 'MCPK10',
                        'cnName': '摩臣pk10'
                    },
                    {
                        'code': 'XGPK10',
                        'cnName': '香港pk10'
                    }
                ],
                tabs: [{
                    en: 'pk10-q5',
                    cn: '前五名'
                }, {
                    en: 'pk10-h5',
                    cn: '后五名'
                }]
            },
            'k3': {
                typeCnName: '快3系列',
                lotteries: [{
                        'code': 'MCK3',
                        'cnName': '摩臣快3'
                    },
                    {
                        'code': 'JSK3',
                        'cnName': '江苏快3'
                    },
                    {
                        'code': 'HNK3',
                        'cnName': '河南快3'
                    },
                    {
                        'code': 'HBK3',
                        'cnName': '湖北快3'
                    },
                    {
                        'code': 'JLK3',
                        'cnName': '吉林快3'
                    },
                    {
                        'code': 'AHK3',
                        'cnName': '安徽快3'
                    }
                ],
                tabs: [{
                    en: 'k3-3x',
                    cn: '三星'
                }]
            },
            '3d': {
                typeCnName: '3D/低频系列',
                lotteries: [{
                        'code': 'MC3D',
                        'cnName': '摩臣3D'
                    },
                    {
                        'code': 'SHSSL',
                        'cnName': '上海时时乐'
                    },
                    {
                        'code': 'FC3D',
                        'cnName': '福彩3D'
                    },
                    {
                        'code': 'PL3',
                        'cnName': '排列3'
                    }
                ],
                tabs: [{
                    en: '3d-3x',
                    cn: '三星'
                }]
            },
            'kl12': {
                typeCnName: '快乐12',
                lotteries: [{
                    'code': 'SCKL12',
                    'cnName': '四川快乐12'
                }],
                tabs: [{
                    en: 'kl12-all',
                    cn: '所有位置'
                }]
            },
            'ky481': {
                typeCnName: '快赢481',
                lotteries: [{
                    'code': 'HNKY481',
                    'cnName': '河南快赢481'
                }],
                tabs: [{
                    en: 'ky481-all',
                    cn: '四星'
                }]
            }
        },
        //彩种选择框默认第一个显示彩种
        lotteryDefaultType: 'ssc',
        lotteryDefaultObj: {
            'ssc': 'CQSSC',
            '11y': 'GD11Y',
            'pk10': 'BJPK10',
            'k3': 'JSK3',
            '3d': 'FC3D',
            'lhc': 'XGLHC',
            'kl12': 'SCKL12',
            'ky481': 'HNKY481'            
        },
        //默认tab
        tabDefaultObj: {
            'ssc': 'ssc-5x',
            '11y': '11y-3x',
            'pk10': 'pk10-q5',
            'k3': 'k3-3x',
            '3d': '3d-3x',
            'kl12': 'kl12-all',
            'ky481': 'ky481-all'            
        },
        checkedConfig: [{
                id: 'miss',
                value: 'miss',
                model: 'no',
                text: '遗漏'
            },
            {
                id: 'miss-bar',
                value: 'missBar',
                model: 'no',
                text: '遗漏条'
            },
            {
                id: 'trend-line',
                value: 'trendLine',
                model: 'no',
                text: '走势图折线'
            },
            {
                id: 'cold-hot-number',
                value: 'coldHotNumber',
                model: 'no',
                text: '冷热号'
            },
        ],
        issuePeriodConfig: [{
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
            'ssc': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            '11y': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            'pk10': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            'k3': [1, 2, 3, 4, 5, 6],
            '3d': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            'kl12': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            'ky481': [1, 2, 3, 4, 5, 6, 7, 8],
        },
        posConfig: {
            'ssc-5x': {
                0: '万位',
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
            },
            'ssc-4x': {
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
            },
            'ssc-q3': {
                0: '万位',
                1: '千位',
                2: '百位',
            },
            'ssc-z3': {
                1: '千位',
                2: '百位',
                3: '十位',
            },
            'ssc-h3': {
                2: '百位',
                3: '十位',
                4: '个位'
            },
            'ssc-q2': {
                0: '万位',
                1: '千位'
            },
            'ssc-h2': {
                3: '十位',
                4: '个位'
            },
            '11y-3x': {
                0: '万位',
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
            },
            'pk10-q5': {
                0: '冠军',
                1: '亚军',
                2: '季军',
                3: '第四名',
                4: '第五名'
            },
            'pk10-h5': {
                5: '第六名',
                6: '第七名',
                7: '第八名',
                8: '第九名',
                9: '第十名'
            },
            'k3-3x': {
                0: '第一位',
                1: '第二位',
                2: '第三位'
            },
            '3d-3x': {
                0: '百位',
                1: '十位',
                2: '个位'
            },
            'kl12-all': {
                0: '万位',
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
            },
            'ky481-all': {
                0: '自由泳',
                1: '仰泳',
                2: '蛙泳',
                3: '蝶泳'
            }
        }
    },
    computed: {
        lotteryArrs() {
            return this.lotteryConfig[this.lotteryType].lotteries;
        },
        tabsArr() {
            const result = this.lotteryConfig[this.lotteryType].tabs;
            return result;
        }
    },
    methods: {
        ajaxTrendData() {
            axios.get(`./json/${this.lotteryType}.json`).then(res => {
                this.trendData = res.data.result.data;
            }).catch(error => {
                console.log(error);
            });
        },
        receiveLottery(msg) {
            this.lottery = msg;
        },
        receiveLotteryType(msg) {
            this.lotteryType = msg;
        },
        receiveTab(msg) {
            this.tabCode = msg;
        },
        receivePeriod(msg) {
            this.issuePeriod = msg;
        },
        renderCheckOption(checkedConfig) {

        }
    },
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
        },
        lotteryType(newVal, oldVal) {
            this.ajaxTrendData();
        }

    },
    beforeCreate() {},
    created() {
        this.ajaxTrendData();
    },
    beforeMount() {},
    mounted() {}
});