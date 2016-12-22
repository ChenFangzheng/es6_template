import './index.scss';

import { ItemsList } from '../components/itemsListComponent';
import { CustomPie } from '../components/cutomPieComponent';
import { getdata } from './dataProvider.js';

let longtongqiye = new ItemsList("longTouQYList", "龙头企业 (工业产值)");
let nashuilongtou = new ItemsList("topRate", "纳税龙头企业");
let pie = new CustomPie("pieChart", "");

getdata().then(function ({indusProduction, increaseDistribution}) {
    longtongqiye.render(indusProduction.topCompany, "odd");
    nashuilongtou.render(increaseDistribution.topRateCompany, "even", "blue");
    pie.render(indusProduction.distribution);
});