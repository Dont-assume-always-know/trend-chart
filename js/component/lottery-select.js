Vue.component('lottery-select', {
    template: `
        <select name="lottery-select" v-model="lotteryObj[lotteryType]" @change="emitLottery(lotteryObj[lotteryType] )">
            <option v-for="(item, key) in lotteryConfig[lotteryType].lotteries" :value="item.code">
                {{ item.cnName }}
            </option>
        </select>
    `,
    props: ['lottery-config', 'lottery-type'],
    data() {
        return {
            lotteryObj: {
                'ssc': 'CQSSC',
                '11y': 'GD11Y'
            }, //默认第一个
        };
    },
    computed: {
        lottery() {
            return this.lotteryConfig[this.lotteryType].lotteries[0].code;
        }
    },
    methods: {
        emitLottery(lottery) {
            this.$emit('receivelottery', lottery);
        }
    }
});