Vue.component('lottery-type-select', {
    template: `
        <select name="lottery-type-select" v-model="lotteryType" @change="emitLotteryType(lotteryType)">
            <option v-for="(item, key) in lotteryTypes" :value="key">
                {{ option.typeCnName }}
            </option>
        </select>
    `,
    props: ['lottery-types'],
    data() {
        return {
            lotteryType: 'ssc',//默认时时彩类型
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
            <option v-for="(item, key) in lotteryTypes[lotteryType].lotteries" :value="item.code">
                {{ option.cnName }}
            </option>
        </select>
    `,
    props: ['lottery-types', 'lottery-type'],
    data() {
        return {
            lottery: lotteryTypes[this.lotteryType].lotteries[0].code,//默认第一个
        }; 
    },
    methods: {
        emitLottery(lottery) {
            this.$emit('receiveLottery', lottery);
        }
    }
});
new Vue({
    el: '#vue-chart',
    data: {
        lotteryType: 'ssc',
        lottery: 'CQSSC',
        lotteryTypes: {
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
        }
    },
    computed: {},
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {}
});