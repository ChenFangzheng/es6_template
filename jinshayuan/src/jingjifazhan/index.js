import './index.scss';

import { ItemsList } from '../components/itemsListComponent';
import { getdata } from './dataProvider.js';

let logtongqiye = new ItemsList("longTouQYList", "龙头企业 (工业产值)");

getdata().then(function ({indusProduction, increaseDistribution}) {
    logtongqiye.render(indusProduction.topCompany, "odd");
});