Vue.component('chart-option', {
    template: `
        <ul class="clearfix fl chart-option-list">
            <li class="fl chart-option-item" v-for="(item, index) in checkedConfig">
                <input type="checkbox" :id="item.id" value="item.value" v-model="item.model" true-value="yes" false-value="no" @change="displayByChange(item)">
                <label :for="item.id">{{item.text}}</label>
            </li>
        </ul>
    `,
    props: ['checked-config'],
    data() {
        return {};
    },
    methods: {
        displayByChange(item) {
            if (item.model === 'yes') {
                switch (item.text) {
                    case '遗漏':
                        //showMiss
                        break;
                    case '遗漏条':
                        //showMissBar
                        break;
                    case '走势图折线':
                        //showTrendLine
                        break;
                    case '冷热号':
                        //showColdAndHot
                        break;
                    default:
                        break;
                }
            }
        }
    },
    mounted() {}
});