Vue.component('lottery-select', {
    template: `
        <select name="lottery-select" v-model="lottery" @change="emitLottery(lottery)">
            <option v-for="(item, index) in lotteryArrs" :value="item.code">
                {{ item.cnName }}
            </option>
        </select>
    `,
    props: ['lottery-arrs', 'lottery-type', 'lottery-default-obj'],
    data() {
        return {
            lottery: '',
        };
    },
    computed: {},
    watch: {
        lotteryType(newVal, oldVal) {
            if (newVal) {
                this.lottery = this.lotteryDefaultObj[this.lotteryType];
                this.$emit('receivelottery', this.lottery);
            }
        }
    },
    methods: {
        emitLottery(lottery) {
            this.$emit('receivelottery', lottery);
        }
    },
    created() {
        this.lottery = this.lotteryDefaultObj[this.lotteryType];
        this.$emit('receivelottery', this.lottery);
    }
});