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
        }

        ]
    },
    increaseDistribution: {
        tradeDistribution: [],
        headCompany: [],
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
        }]
    }
}

export function getdata() {
    return new Promise((resovled, rejected) => {
        resovled(data);
    });
}