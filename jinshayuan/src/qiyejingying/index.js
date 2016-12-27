import './index.scss';
import { getQyygjg, getQycxtrfb, getNhcbqyyj, getCngsqyyj, getZzjjzb } from './dataProvider';
import QyygjgComponent from './components/QyygjgComponent';
import QycxtrfbComponent from './components/QycxtrfbComponent';
import QynhfbComponent from './components/QynhfbComponent';
import ListComponent from './components/ListComponent';
import QyjyzbztqsComponent from './components/QyjyzbztqsComponent';

import CombinListComponent from '../components/combinListComponent';
import { TriangleChart } from '../components/triangleChartComponent';

let qyygjg = new QyygjgComponent( 'qyygjg' );
let qycxtrfb = new QycxtrfbComponent( 'qycxtrfb' );
let qynhfb = new QynhfbComponent( 'qynhfb' );
let cngsqyyj = new ListComponent( 'cngsqyyj', '产销率' );
let nhcbqyyj = new ListComponent( 'nhcbqyyj', '超出率' );

let combinList = new CombinListComponent( 'zyjjzb' );
let qyjyzbztqs = new QyjyzbztqsComponent( 'qyjyzbztqs' );


let increaseTop4 = new TriangleChart( "qycxfb", "" );


let render = function ( type ) {
    getQyygjg( type ).then( d => {
        qyygjg.render( d );
    });


    getQycxtrfb( type ).then( d => {
        qycxtrfb.render( d );
    });



    qynhfb.render( [] );


    getNhcbqyyj( type ).then( d => {
        nhcbqyyj.render( d );
    });

    getCngsqyyj( type ).then( d => {
        cngsqyyj.render( d );
    });

    getZzjjzb( type ).then( d => {
        combinList.render( d );
    });


    qyjyzbztqs.render( [] );


    increaseTop4.render( [{
        name: "供不应求",
        value: 1765,
        unit: "万元"
    }, {
        name: "供求均衡",
        value: 1395,
        unit: "万元"
    }, {
        name: "供大于求",
        value: 1315,
        unit: "万元"
    }, {
        name: "产能过剩",
        value: 1300,
        unit: "万元"
    }] );
}


render();

