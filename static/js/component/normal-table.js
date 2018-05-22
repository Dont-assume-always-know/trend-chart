///趣味玩法&牛牛 表单
Vue.component('normal-table', {
    template: `
        <table>
            <thead>
                <tr>
                    <td rowspan="2">奖期</td>
                    <td rowspan="2" :colspan="openCodeLength">开奖号码</td>
                    <td>龙虎和</td>
                    <td rowspan="2">百家乐</td>
                    <td rowspan="2">五星形态</td>                   
                    <td rowspan="2">前三形态</td>  
                    <td rowspan="2">中三形态</td>  
                    <td rowspan="2">后三形态</td>  
                    <td>牛牛</td>  
                </tr>
                <tr>
                    <td v-for="pos in lhhPosArr">{{pos.cn}}</td>     
                    <td v-for="v in niuniuXtArr">{{v}}</td>     
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data">
                    <td>{{item.issue}}</td>
                    <td v-for="n in item.code.split(',')">{{n}}</td>
                    <td v-for="pos in lhhPosArr" v-html="renderLhhXt(pos, item.code.split(','))"></td>
                    <td v-html="renderBjl(item.code)"></td>
                    <td v-html="render5xXt(item.code)"></td>
                    <td v-html="renderq3Xt(item.code)"></td>
                    <td v-html="renderz3Xt(item.code)"></td>
                    <td v-html="renderh3Xt(item.code)"></td>
                    <td v-for="niuniuXt in niuniuXtArr" v-html="renderNiuniuXt(niuniuXt, item.code.split(','))"></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td rowspan="2">奖期</td>
                    <td rowspan="2" :colspan="openCodeLength">开奖号码</td>
                    <td>龙虎和</td>
                    <td rowspan="2">百家乐</td>
                    <td rowspan="2">五星形态</td>                   
                    <td rowspan="2">前三形态</td>  
                    <td rowspan="2">中三形态</td>  
                    <td rowspan="2">后三形态</td>  
                    <td>牛牛</td>  
                </tr>
                <tr>
                    <td v-for="v in lhhPosArr">{{v}}</td>     
                    <td v-for="v in niuniuXtArr">{{v}}</td>     
                </tr>
            </tfoot>
        </table>
    `,
    props: ['lottery-config', 'lottery-type', 'pos-config', 'tab-code', 'select-num-obj'],
    data() {
        return {
            lhhPosArr: [{
                en: '01',
                cn: '万千'
            }, {
                en: '02',
                cn: '万百'
            },{
                en: '03',
                cn: '万十'
            },{
                en: '04',
                cn: '万个'
            },{
                en: '12',
                cn: '千百'
            },{
                en: '13',
                cn: '千十'
            },{
                en: '14',
                cn: '千个'
            },{
                en: '23',
                cn: '百十'
            },{
                en: '24',
                cn: '百个'
            },{
                en: '34',
                cn: '十个'
            }],
            niuniuXtArr: ['牛牛', '大小', '单双'],
            "data": [{
                "code": "6,7,7,6,3",
                "issue": "20180419-118"
            }, {
                "code": "3,0,8,0,2",
                "issue": "20180419-119"
            }, {
                "code": "2,7,6,8,9",
                "issue": "20180419-120"
            }, {
                "code": "2,4,7,1,3",
                "issue": "20180420-001"
            }, {
                "code": "6,3,8,2,4",
                "issue": "20180420-002"
            }, {
                "code": "2,9,5,5,0",
                "issue": "20180420-003"
            }, {
                "code": "1,3,7,0,9",
                "issue": "20180420-004"
            }, {
                "code": "9,9,0,1,2",
                "issue": "20180420-005"
            }, {
                "code": "3,7,7,3,9",
                "issue": "20180420-006"
            }, {
                "code": "7,3,8,2,7",
                "issue": "20180420-007"
            }, {
                "code": "6,3,2,1,0",
                "issue": "20180420-008"
            }, {
                "code": "5,8,4,0,5",
                "issue": "20180420-009"
            }, {
                "code": "7,6,9,6,0",
                "issue": "20180420-010"
            }, {
                "code": "3,1,6,6,8",
                "issue": "20180420-011"
            }, {
                "code": "5,3,6,7,2",
                "issue": "20180420-012"
            }, {
                "code": "3,4,4,6,3",
                "issue": "20180420-013"
            }, {
                "code": "6,9,8,0,0",
                "issue": "20180420-014"
            }, {
                "code": "1,2,0,8,9",
                "issue": "20180420-015"
            }, {
                "code": "4,9,1,7,6",
                "issue": "20180420-016"
            }, {
                "code": "4,0,1,0,7",
                "issue": "20180420-017"
            }, {
                "code": "1,3,3,7,2",
                "issue": "20180420-018"
            }, {
                "code": "9,5,3,3,9",
                "issue": "20180420-019"
            }, {
                "code": "8,0,8,6,3",
                "issue": "20180420-020"
            }, {
                "code": "9,4,9,3,1",
                "issue": "20180420-021"
            }, {
                "code": "3,5,7,2,0",
                "issue": "20180420-022"
            }, {
                "code": "5,0,3,8,2",
                "issue": "20180420-023"
            }, {
                "code": "9,3,6,6,6",
                "issue": "20180420-024"
            }, {
                "code": "4,7,4,6,2",
                "issue": "20180420-025"
            }, {
                "code": "9,8,0,9,4",
                "issue": "20180420-026"
            }, {
                "code": "0,2,3,3,7",
                "issue": "20180420-027"
            }, {
                "code": "6,3,4,0,2",
                "issue": "20180420-028"
            }, {
                "code": "2,5,3,9,5",
                "issue": "20180420-029"
            }, {
                "code": "6,0,7,3,3",
                "issue": "20180420-030"
            }, {
                "code": "8,4,2,2,0",
                "issue": "20180420-031"
            }, {
                "code": "7,7,6,3,5",
                "issue": "20180420-032"
            }, {
                "code": "4,7,6,6,5",
                "issue": "20180420-033"
            }, {
                "code": "9,7,3,5,1",
                "issue": "20180420-034"
            }, {
                "code": "9,5,2,1,7",
                "issue": "20180420-035"
            }, {
                "code": "8,2,2,6,3",
                "issue": "20180420-036"
            }, {
                "code": "6,4,6,7,0",
                "issue": "20180420-037"
            }, {
                "code": "6,6,9,4,9",
                "issue": "20180420-038"
            }, {
                "code": "1,2,0,3,5",
                "issue": "20180420-039"
            }, {
                "code": "8,6,7,2,3",
                "issue": "20180420-040"
            }, {
                "code": "8,3,7,7,6",
                "issue": "20180420-041"
            }, {
                "code": "3,5,0,7,9",
                "issue": "20180420-042"
            }, {
                "code": "7,9,4,4,4",
                "issue": "20180420-043"
            }, {
                "code": "7,7,1,2,5",
                "issue": "20180420-044"
            }, {
                "code": "7,0,8,8,6",
                "issue": "20180420-045"
            }, {
                "code": "2,1,2,1,1",
                "issue": "20180420-046"
            }, {
                "code": "8,2,0,4,8",
                "issue": "20180420-047"
            }]
        };
    },
    computed: {
        openDataArr() {
            return this.data.map(item => {
                return item.code.split(',').map(v => Number(v));
            });
        },
        openCodeLength() { //计算开奖号码一共有几位
            return this.openDataArr[0].length;
        },
        selectNumArr() {
            return this.selectNumObj[this.lotteryType];
        }
    },
    watch: {
        tabCode(newVal, oldVal) {
            //重置
            this.selectedIndexObj = {};
            this.missAndContinuousObj = {};
            this.distributionIndexArr = [];
            this.z3ZutaiObj = {};
            this.z3ZutaiTotalObj = {};
            this.z2ZutaiObj = {};
            this.z2ZutaiTotalObj = {};
        }
    },
    methods: {
        getCodeArr(codeArr) { //统计前三等玩法的时候[1,2,3,4,5]只计算[1,2,3]的数据，所有要分割下
            switch (this.tabCode) {
                case 'ssc-5x':
                case '11y-3x':
                case 'k3-3x':
                case '3d-3x':
                case 'kl12-all':
                case 'ky481-all':
                    return codeArr;
                case 'ssc-4x':
                    return codeArr.slice(1, 5);
                case 'ssc-q3':
                    return codeArr.slice(0, 3);
                case 'ssc-z3':
                    return codeArr.slice(1, 4);
                case 'ssc-h3':
                    return codeArr.slice(2, 5);
                case 'ssc-q2':
                    return codeArr.slice(0, 2);
                case 'ssc-h2':
                    return codeArr.slice(3, 5);
                case 'pk10-q5':
                    return codeArr.slice(0, 5);
                case 'pk10-h5':
                    return codeArr.slice(5, 10);
                default:
                    return codeArr;
            }
        },
        renderDistribution(code, selectNum, selectNumIndex, index) {
            let codeArr = code.split(',').map(v => Number(v));
            codeArr = this.getCodeArr(codeArr);
            const arr = codeArr.filter(v => Number(v) === Number(selectNum));
            if (arr.length > 0) {
                this.distributionIndexArr[selectNumIndex] = index + 1;
                if (arr.length > 1) {
                    return `<i class="distribution-num more-than-1">${selectNum}</i>`;
                }
                return `<i class="distribution-num">${selectNum}</i>`;
            } else {
                return `<i>${index + 1 - (this.distributionIndexArr[selectNumIndex] || 0)}</i>`;
            }
        },
        renderSelectNum(code, selectNum, selectNumIndex, posIndex, index) {
            const arr = code.split(',').map(v => Number(v));
            this.selectedIndexObj[posIndex] = this.selectedIndexObj[posIndex] || [];
            if (arr[posIndex] === Number(selectNum)) {
                this.selectedIndexObj[posIndex][selectNumIndex] = index + 1;
                return `<i class="selected-num">${selectNum}</i>`;
            } else {
                return `<i>${index + 1 - (this.selectedIndexObj[posIndex][selectNumIndex] || 0)}</i>`;
            }
        },
        render3xZutaiZ3(code, index) {
            let codeArr = code.split(',').map(v => Number(v));
            codeArr = this.getCodeArr(codeArr);
            this.z3ZutaiTotalObj['z3'] = this.z3ZutaiTotalObj['z3'] || [];
            if (cacl3xZutai(codeArr) === '组三') {
                this.z3ZutaiObj['z3'] = index + 1;
                this.z3ZutaiTotalObj['z3'].push(index + 1)
                return 'yes';
            } else {
                return index + 1 - (this.z3ZutaiObj['z3'] || 0);
            }
        },
        render3xZutaiZ6(code, index) {
            let codeArr = code.split(',').map(v => Number(v));
            codeArr = this.getCodeArr(codeArr);
            this.z3ZutaiTotalObj['z6'] = this.z3ZutaiTotalObj['z6'] || [];
            if (cacl3xZutai(codeArr) === '组六') {
                this.z3ZutaiObj['z6'] = index + 1;
                this.z3ZutaiTotalObj['z6'].push(index + 1);
                return 'yes';
            } else {
                return index + 1 - (this.z3ZutaiObj['z6'] || 0);
            }
        },
        render3xZutaiBaozi(code, index) {
            let codeArr = code.split(',').map(v => Number(v));
            codeArr = this.getCodeArr(codeArr);
            this.z3ZutaiTotalObj['baozi'] = this.z3ZutaiTotalObj['baozi'] || [];
            if (cacl3xZutai(codeArr) === '豹子') {
                this.z3ZutaiObj['baozi'] = index + 1;
                this.z3ZutaiTotalObj['baozi'].push(index + 1);
                return 'yes';
            } else {
                return index + 1 - (this.z3ZutaiObj['baozi'] || 0);
            }
        },
        renderHezhi(code) {
            let codeArr = code.split(',').map(v => Number(v));
            codeArr = this.getCodeArr(codeArr);
            return calcHezhi(codeArr);
        },
        renderKuadu(code) {
            let codeArr = code.split(',').map(v => Number(v));
            codeArr = this.getCodeArr(codeArr);
            return calcKuadu(codeArr);
        },
        render2xDuizi(code, index) {
            let codeArr = code.split(',').map(v => Number(v));
            codeArr = this.getCodeArr(codeArr);
            this.z2ZutaiTotalObj['duizi'] = this.z2ZutaiTotalObj['duizi'] || [];
            if (calc2xDuizi(codeArr)) {
                this.z2ZutaiObj['duizi'] = index + 1;
                this.z2ZutaiTotalObj['duizi'].push(index + 1);
                return 'yes';
            } else {
                return index + 1 - (this.z2ZutaiObj['duizi'] || 0);
            }
        },
        renderLhhXt(pos, arr) {
            const en = pos.en;//01 
            const a = arr[en[0]];
            const b = arr[en[1]];
            return calcLhh(a, b);
        },
        renderNiuniuXt(xtTitle, arr) {
            switch (xtTitle) {
                case '牛牛':
                    return calcNiuniu(arr).nn;
                    break;
                case '大小':
                    return calcNiuniu(arr).dx;
                    break;
                case '单双':
                    return calcNiuniu(arr).ds;
                    break;
                default:
                    return '---';
                    break;
            }
        }
    }
});