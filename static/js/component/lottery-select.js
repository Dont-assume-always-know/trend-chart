Vue.component('lottery-select', {
    template: `
        <select class="lottery-select" name="lottery-select" v-model="lottery" @change="emitLottery(lottery)">
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
            this.lottery = this.lotteryDefaultObj[this.lotteryType];
            this.$emit('receive-lottery', this.lottery);
        }
    },
    methods: {
        emitLottery(lottery) {
            this.$emit('receive-lottery', lottery);
        }
    },
    created() {
        this.lottery = this.lotteryDefaultObj[this.lotteryType];
        this.$emit('receive-lottery', this.lottery);
    }
});