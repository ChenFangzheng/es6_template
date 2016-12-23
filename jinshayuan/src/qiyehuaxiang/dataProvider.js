let data = {
    headdata: {
        enterprise_name: '中机铸材科技（福建）有限公司',
        enterprise_type: '机械制造业'
    },
    intro: {
        legal_name: '张三',
        annual_value: '1000万',
        regCapitas: '1000万',
        employees: '234人',
        mainproduct: '生物食品'
    },
    polar_data: {
        categories: ['经济指数', '竞争力指数', '安全环保指数', '持续发展指数', '创新力指数', '人才聚集指数'],
        datas: [98, 98, 87, 90, 87, 87]
    },
    hottags: [
        '规模以上企业', '规模以上企业', '规模以上企业', '规模以上企业', '规模以上企业', '规模以上企业', '规模以上企业', '规模以上企业', '规模以上企业',
    ],
    industrialTotal: {
        total: 230,
        all_ranking: '第1名 平稳',
        industry_ranking: '第1名 平稳',
        data: [123, 115, 145, 123, 125, 178, 132, 123, 122, 111, 127, 137]
    },
    industrialGrow: {
        total: 230,
        all_ranking: '第1名 平稳',
        industry_ranking: '第1名 平稳',
        data: [123, 115, 145, 123, 125, 178, 132, 123, 122, 111, 127, 137]
    },
    tax: {
        total: 230,
        all_ranking: '第1名 平稳',
        industry_ranking: '第1名 平稳',
        data: [123, 115, 145, 123, 125, 178, 132, 123, 122, 111, 127, 137]
    },
    fixedAssets: {
        total: 230,
        all_ranking: '第1名 平稳',
        industry_ranking: '第1名 平稳',
        data: [123, 115, 145, 123, 125, 178, 132, 123, 122, 111, 127, 137]
    }
}



export function getData() {

    return new Promise((resovle, reject) => {
        resovle(data);
    });
}