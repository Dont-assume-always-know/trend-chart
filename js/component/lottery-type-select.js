Vue.component('lottery-type-select', {
    template: `
        <select name="lottery-type-select" v-model="_lotteryType" @change="emitLotteryType(_lotteryType)">
            <option v-for="(item, key) in lotteryConfig" :value="key">
                {{ item.typeCnName }}
            </option>
        </select>
    `,
    props: ['lottery-config', 'lottery-default-type'],
    data() {
        return {
            _lotteryType: '',
        };
    },
    methods: {
        emitLotteryType(lotteryType) {
            this.$emit('receivelotterytype', lotteryType);
        }
    },
    created() {
        this._lotteryType = this.lotteryDefaultType; //接收默认类型
    }
});