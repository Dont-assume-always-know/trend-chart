Vue.component('chart-option', {
    template: `
        <ul class="clearfix fl chart-option-list">
            <li class="fl chart-option-item" v-for="(item, index) in checkedConfig">
                <input type="checkbox" :id="item.id" value="item.value" v-model="item.model" true-value="yes" false-value="no">
                <label :for="item.id">{{item.text}}</label>
            </li>
        </ul>
    `,
    props: ['checked-config'],
    data() {
        return {};
    },
    methods: {},
    mounted() {}
});