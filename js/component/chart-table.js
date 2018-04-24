Vue.component('chart-table', {
    template: `
        <table>
            <thead>
                <tr>
                    <td rowspan="2">奖期</td>
                    <td rowspan="2" :colspan="openCode.length">开奖号码</td>
                    <td :colspan="selectNumArr.length" v-for="pos in posArr">{{pos}}</td>
                    <td :colspan="selectNumArr.length">号码分布</td>
                    <template v-if="tabCode === 'ssc-3x'">
                        <td rowspan="2">组三</td>
                        <td rowspan="2">组六</td>
                        <td rowspan="2">豹子</td>
                        <td rowspan="2">和值</td>
                        <td rowspan="2">跨度</td>
                    </template>
                </tr>
                <tr>
                    <template v-for="pos in posArr">
                        <td v-for="n in selectNumArr">{{n}}</td>
                    </template>    
                    <td v-for="n in selectNumArr">{{n}}</td>                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data">
                    <td>{{item.issue}}</td>
                    <td v-for="n in item.code.split(',')">{{n}}</td>
                    <template v-for="(pos, posIndex) in posArr">
                        <td v-for="(selectNum, selectNumIndex) in selectNumArr"  v-html="renderSelectNum(item.code, selectNum, selectNumIndex, posIndex, index)"></td>
                    </template>    
                    <td v-for="(selectNum, selectNumIndex) in selectNumArr" v-html="renderDistribution(item.code, selectNum, selectNumIndex, index)"></td> 
                    <template v-if="tabCode === 'ssc-3x'">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </template>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>出现总次数</td>
                    <td :colspan="openCode.length"></td>
                    <template v-for="totalArr in totalArrs">
                        <td v-for="item in totalArr">{{item}}</td>
                    </template>
                    <td v-for="item in distributionTotalArr">{{item}}</td>
                    <template v-if="tabCode === 'ssc-3x'">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </template>
                </tr>
                <tr>
                    <td>平均遗漏值</td>
                    <td :colspan="openCode.length"></td>
                    <template v-for="averageMissArr in averageMissArrs">
                        <td v-for="item in averageMissArr">{{item}}</td>
                    </template>
                    <td v-for="item in distributionAverageMissArr">{{item}}</td>
                    <template v-if="tabCode === 'ssc-3x'">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </template>
                </tr>
                <tr>
                    <td>最大遗漏值</td>
                    <td :colspan="openCode.length"></td>
                    <template v-for="maxMissArr in maxMissArrs">
                        <td v-for="item in maxMissArr">{{item}}</td>
                    </template>
                    <td v-for="item in distributionMaxMissArr">{{item}}</td>
                    <template v-if="tabCode === 'ssc-3x'">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </template>
                </tr>
                <tr>
                    <td>最大连出值</td>
                    <td :colspan="openCode.length"></td>
                    <template v-for="maxContinuousArr in maxContinuousArrs">
                        <td v-for="item in maxContinuousArr">{{item}}</td>
                    </template>
                    <td v-for="item in distributionMaxContinuousArr">{{item}}</td>
                    <template v-if="tabCode === 'ssc-3x'">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </template>
                </tr>
                <tr>
                    <td rowspan="2">奖期</td>
                    <td rowspan="2" :colspan="openCode.length">开奖号码</td>
                    <td :colspan="selectNumArr.length" v-for="pos in posArr">{{pos}}</td>
                    <td :colspan="selectNumArr.length">号码分布</td>
                    <template v-if="tabCode === 'ssc-3x'">
                        <td rowspan="2">组三</td>
                        <td rowspan="2">组六</td>
                        <td rowspan="2">豹子</td>
                        <td rowspan="2">和值</td>
                        <td rowspan="2">跨度</td>
                    </template>
                </tr>
                <tr>
                    <template v-for="pos in posArr">
                        <td v-for="n in selectNumArr.length">{{n-1}}</td>
                    </template>    
                    <td v-for="n in selectNumArr.length">{{n-1}}</td>                    
                </tr>
            </tfoot>
        </table>
    `,
    props: ['lottery-config', 'lottery-type', 'tab-code', 'select-num-obj'],
    data() {
        return {
            posArr: ['万位', '千位', '百位', '十位', '个位'],
            openCode: [1, 2, 3, 4, 5], //开奖号码
            selectedIndexObj: {}, //遗漏值计数从上到下1开始，碰到开奖号就重新从1开始计数
            missAndContinuousObj: {}, //底部计算平均遗漏值，最大遗漏值，最大连出值用到，结构missAndContinuousObj.posIndex.selectIndex = [index1,index2,...]
            distributionIndexArr: [],
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
        selectNumArr() {
            return this.selectNumObj.lotteryType;
        },
        totalArrs() {
            return calcEachTotal(this.posArr, this.selectNumArr, this.openDataArr);
        },
        averageMissArrs() {
            return this.totalArrs.map(totalArr => {
                return totalArr.map(total => {
                    if (total === 0) {
                        return this.openDataArr.length + 1;
                    }
                    return Math.round(this.openDataArr.length / total);
                });
            });
        },
        maxMissArrs() {
            return getMissAndContinuousObj(this.posArr, this.selectNumArr, this.openDataArr).missArr;
        },
        maxContinuousArrs() {
            return getMissAndContinuousObj(this.posArr, this.selectNumArr, this.openDataArr).continuousArr;
        },
        distributionTotalArr() {
            return caclDistributionTotalArr(this.selectNumArr, this.openDataArr);
        },
        distributionAverageMissArr() {
            return this.distributionTotalArr.map(total => {
                if (total === 0) {
                    return this.openDataArr.length + 1;
                }
                return Math.round(this.openDataArr.length / total);
            });
        },
        distributionMaxMissArr() {
            return getDistributionMissAndContinuousObj(this.selectNumArr, this.openDataArr).missArr;
        },
        distributionMaxContinuousArr() {
            return getDistributionMissAndContinuousObj(this.selectNumArr, this.openDataArr).continuousArr;
        },
        openDataArr() {
            return this.data.map(item => {
                return item.code.split(',').map(v => Number(v));
            });
        }
    },
    methods: {
        renderDistribution(code, selectNum, selectNumIndex, index) {
            const arr = code.split(',').filter(v => Number(v) === Number(selectNum));
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
    }
});

/**
 * 计算出现总次数
 * posArr ['万位', '千位', '百位', '十位', '个位']
 * selectNumArr => 如时时彩[0,1,2,3,4,5,6,7,8,9]
 * openDataArr 开奖号码数组
 * return [[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7],[2,3,3,4,4,3,5,6,7]] 返回每个位置统计值集合
 */
function calcEachTotal(posArr, selectNumArr, openDataArr) {
    return posArr.map((posItem, posIndex) => {
        const resultArr = [];
        selectNumArr.forEach(selectNum => {
            let count = 0;
            openDataArr.forEach(itemArr => {
                if (itemArr[posIndex] === Number(selectNum)) {
                    count += 1;
                }
            });
            resultArr.push(count);
        });
        return resultArr;
    });
}

/**
 * 号码分布总次数
 */
function caclDistributionTotalArr(selectNumArr, openDataArr) {
    const resultArr = [];
    selectNumArr.forEach(selectNum => {
        let count = 0;
        openDataArr.forEach(itemArr => {
            count += itemArr.filter(item => {
                return item === Number(selectNum);
            }).length;
        });
        resultArr.push(count);
    });
    return resultArr;
}

/**
 * 号码分布最大遗漏
 */
function getDistributionMissAndContinuousObj(selectNumArr, openDataArr) {
    const resultArr = [];
    selectNumArr.forEach(selectNum => {
        const arr = [];
        openDataArr.forEach((itemArr, index) => {
            if (itemArr.indexOf(Number(selectNum)) !== -1) {
                arr.push(index + 1);
            }
        });
        resultArr.push(arr);
    });
    const openDataArrLength = openDataArr.length;
    const missArr = resultArr.map(arr => {
        arr.sort();
        if (arr.length === 0) {
            return openDataArrLength;
        }
        if (arr.length === 1) {
            return Math.max(...[openDataArrLength - arr[0], arr[0] - 1]);
        }
        if (arr.length === 2) {
            return Math.max(...[openDataArrLength - arr[1], arr[1] - arr[0], arr[0] - 1]);
        }
        const result = [];
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        result.push(min - 1);
        result.push(openDataArrLength - max);
        for (let i = 0; i < arr.length - 2; i++) {
            result.push(arr[i + 1] - arr[i] - 1);
        }
        return Math.max(...result);
    });
    const continuousArr = resultArr.map(arr => {
        arr.sort();
        if (arr.length === 0) {
            return 0;
        }
        if (filterShunziArr(arr).length > 0) {
            return filterShunziArr(arr).sort((a, b) => b.length - a.length)[0].length;
        } else {
            return 1;
        }
    });
    return {
        missArr,
        continuousArr
    };
}

/**
 * 获取最大遗漏值和连出值对象
 */
function getMissAndContinuousObj(posArr, selectNumArr, openDataArr) {
    const missAndContinuousArr = posArr.map((posItem, posIndex) => {
        const resultArr = [];
        selectNumArr.forEach(selectNum => {
            const arr = [];
            openDataArr.forEach((itemArr, index) => {
                if (itemArr[posIndex] === Number(selectNum)) {
                    arr.push(index + 1);
                }
            });
            resultArr.push(arr);
        });
        return resultArr;
    });
    //最大遗漏值
    const missArr = missAndContinuousArr.map(posItem => {
        const openDataArrLength = openDataArr.length;
        return posItem.map(itemArr => {
            itemArr.sort();
            if (itemArr.length === 0) {
                return openDataArr.length;
            }
            if (itemArr.length === 1) {
                return Math.max(...[openDataArrLength - itemArr[0], itemArr[0] - 1]);
            }
            if (itemArr.length === 2) {
                return Math.max(...[openDataArrLength - itemArr[1], itemArr[1] - itemArr[0], itemArr[0] - 1]);
            }
            const result = [];
            const min = Math.min(...itemArr);
            const max = Math.max(...itemArr);
            result.push(min - 1);
            result.push(openDataArrLength - max);
            for (let i = 0; i < itemArr.length - 2; i++) {
                result.push(itemArr[i + 1] - itemArr[i] - 1);
            }
            return Math.max(...result);
        });
    });
    //最大连出值
    const continuousArr = missAndContinuousArr.map(posItem => {
        return posItem.map(itemArr => {
            itemArr.sort();
            if (itemArr.length === 0) {
                return 0;
            }
            if (filterShunziArr(itemArr).length > 0) {
                return filterShunziArr(itemArr).sort((a, b) => b.length - a.length)[0].length;
            } else {
                return 1;
            }
        });
    });
    return {
        missArr,
        continuousArr
    };
}

/**
 * 从一组数字中取出顺子
 * 如[1,2,3,6,7,8] => [[1,2,3],[6,7,8]]
 * @param {数组} arr 
 * @returns 二维数组
 */
function filterShunziArr(arr) {
    var len = arr.length,
        before = arr[0],
        i = 1,
        res = [],
        result = [],
        current;
    for (; i < len; i++) {
        current = arr[i];
        if (current - before === 1) {
            if (res.length === 0) {
                res.push(before);
            }
            res.push(current);
        } else {
            if (res.length) {
                result.push(res);
            }
            res = [];
        }
        before = current;
    }
    if (res.length) {
        result.push(res);
    }
    return result;
}