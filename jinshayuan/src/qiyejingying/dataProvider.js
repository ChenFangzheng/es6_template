
//获取企业用工结果数据
export function getQyygjg( type ) {
    return new Promise(( resovle, reject ) => {
        resovle( [
            { name: '高中以下学历', value: 30 },
            { name: '专科高中学历', value: 40 },
            { name: '大专、专业技能学历', value: 10 },
            { name: '本科学历', value: 15 },
            { name: '研究生学历', value: 4 },
            { name: '博士及以上学历', value: 1 }
        ] );
    });
}


//获取企业创新投入分布数据
export function getQycxtrfb( type ) {
    return new Promise(( resovle, reject ) => {
        resovle( [
            { name: '750万以上', value: 60 },
            { name: '500-750万', value: 60 },
            { name: '250-500万', value: 60 },
            { name: '1-250万', value: 60 },
            { name: '无研发投入', value: 60 }

        ] );
    });
}

//获取产能过剩企业预警
export function getCngsqyyj() {
    return new Promise(( resovle, reject ) => {
        resovle( [
            { name: '中机铸材科技（福建）材有限公司', value: 60 },
            { name: '三明重型机器有限公司', value: 60 },
            { name: '二机床（集团）三明制造有限公司', value: 60 }
        ] );
    });
}

//获取能耗超标企业预警
export function getNhcbqyyj() {
    return new Promise(( resovle, reject ) => {
        resovle( [
            { name: '中机铸材科技（福建）材有限公司', value: 60 },
            { name: '三明重型机器有限公司', value: 60 },
            { name: '二机床（集团）三明制造有限公司', value: 60 }
        ] );
    });
}


export function getQynhfb() {
    return new Promise(( resovle, reject ) => {
        resovle( [
            { name: '低碳环保', value: 43, scale: 20 },
            { name: '符合标准', value: 43, scale: 20 },
            { name: '轻微超标', value: 43, scale: 20 },
            { name: '低碳环保', value: 43, scale: 20 }
        ] );
    });
}


/**
 * 获取主要经济指标
 */
export function getZzjjzb() {
    return new Promise(( resovle, reject ) => {
        resovle( [
            { title: '工业总产值', unit: '亿元', tbzz: 8, dnwc: 112, sntq: 200, rise: false },
            { title: '产销率', unit: '百分比', tbzz: 8, dnwc: 55, sntq: 86, rise: true },
            { title: '用电量', unit: '亿元', tbzz: 8, dnwc: 212, sntq: 250, rise: true },
            { title: '用工量', unit: '亿元', tbzz: 26, dnwc: 112, sntq: 250, rise: true },
            { title: '研发投入', unit: '亿元', tbzz: 8, dnwc: 120, sntq: 200, rise: true }

        ] );
    });
}

/**
 * 企业经营指标总体趋势
 */
export function getQyjyzbztqs() {

}