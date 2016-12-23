import './index.scss';

import { ItemsList } from '../components/itemsListComponent';
import { CustomPie } from '../components/cutomPieComponent';
import { MultiLine } from '../components/multiLineComponent';
import { TradeDistribution } from '../components/tradeDistributionComponent';
import { getdata } from './dataProvider.js';

let longtongqiye = new ItemsList("longTouQYList", "龙头企业 (工业产值)");
let nashuilongtou = new ItemsList("topRate", "纳税龙头企业");
let pie = new CustomPie("pieChart", "");
let lineChart = new MultiLine("lineChart");
let tradeDisChart = new TradeDistribution("tradeDistribution", "行业占比");

getdata().then(function ({indusProduction, ecnomyTrend, increaseDistribution}) {
    longtongqiye.render(indusProduction.topCompany, "odd");
    nashuilongtou.render(increaseDistribution.topRateCompany, "even", "blue");
    pie.render(indusProduction.distribution);
    lineChart.render(ecnomyTrend);
    tradeDisChart.render(increaseDistribution.tradeDistribution);
});