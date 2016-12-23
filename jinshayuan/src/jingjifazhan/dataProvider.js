const data = {
    indusProduction: {
        distribution: [{
            name: "食品加工业",
            value: 212,
            unit: "亿元"
        }, {
            name: "机械制造业",
            value: 172,
            unit: "亿元"
        }, {
            name: "林业加工业",
            value: 212,
            unit: "亿元"
        }, {
            name: "其他",
            value: 212,
            unit: "亿元"
        }],
        topCompany: [{
            order: 1,
            name: "中机铸材科技(福建)有限公司",
            value: "365万元"
        }, {
            order: 2,
            name: "三明重型机器有限公司",
            value: "322万元"
        }, {
            order: 3,
            name: "二机床(集团)三明制造有限公司",
            value: "214万元"
        }, {
            order: 4,
            name: "中机铸材科技(福建)有限公司",
            value: "2135万元"
        }, {
            order: 5,
            name: "三明重型机器有限公司(福建)有限公司",
            value: "195万元"
        }]
    },
    ecnomyTrend: {
        categories: [2016, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 2017, 2, 3],
        series: [
            {
                name: '工业总产值',
                data: [100, 120, 251, 122, 88, 77, 66, 100, 120, 151, 142, 188, 77, 166, 138]
            },
            {
                name: '增加值',
                data: [122, 88, 77, 100, 120, 151, 66, 200, 120, 151, 122, 128, 177, 126, 158]
            },
            {
                name: '实缴税费总额',
                data: [77, 66, 100, 120, 151, 222, 88, 100, 120, 151, 122, 98, 207, 98, 138]
            },
            {
                name: '固定资产投资',
                data: [88, 77, 66, 100, 120, 151, 122, 100, 120, 151, 122, 208, 127, 193, 168]
            }
        ]

    },
    increaseDistribution: {
        tradeDistribution: [
            {
                name: "食品加工业",
                value: 1765,
                unit: "万元"
            }, {
                name: "机械制造业",
                value: 395,
                unit: "万元"
            }, {
                name: "林业加工业",
                value: 315,
                unit: "万元"
            }, {
                name: "其它",
                value: 300,
                unit: "万元"
            }
        ],
        headCompany: [
            {
                name: "食品加工业",
                value: 1765,
                unit: "万元"
            }, {
                name: "机械制造业",
                value: 1395,
                unit: "万元"
            }, {
                name: "林业加工业",
                value: 1315,
                unit: "万元"
            }, {
                name: "其它",
                value: 1300,
                unit: "万元"
            }
        ],
        topRateCompany: [{
            order: 2,
            name: "中机铸材科技(福建)有限公司",
            value: "365万元"
        }, {
            order: 3,
            name: "三明重型机器有限公司",
            value: "322万元"
        }, {
            order: 4,
            name: "二机床(集团)三明制造有限公司",
            value: "214万元"
        }, {
            order: 1,
            name: "中机铸材科技(福建)有限公司",
            value: "2135万元"
        }, {
            order: 5,
            name: "三明重型机器有限公司",
            value: "122万元"
        }]
    }
}

export function getdata() {
    return new Promise((resovled, rejected) => {
        resovled(data);
    });
}