Vue.component('lottery-type-select', {
    template: `
        <select name="lottery-type-select" v-model="lotteryType" @change="emitLotteryType(lotteryType)">
            <option v-for="(item, key) in lotteryConfig" :value="key">
                {{ item.typeCnName }}
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
            this.$emit('receivelotterytype', lotteryType);
        }
    }
});