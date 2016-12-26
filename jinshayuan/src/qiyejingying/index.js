import './index.scss';
import { getQyygjg, getQycxtrfb, getNhcbqyyj, getCngsqyyj, getZzjjzb } from './dataProvider';
import QyygjgComponent from './components/QyygjgComponent';
import QycxtrfbComponent from './components/QycxtrfbComponent';
import QynhfbComponent from './components/QynhfbComponent';
import ListComponent from './components/ListComponent';
import QyjyzbztqsComponent from './components/QyjyzbztqsComponent';

import CombinListComponent from '../components/combinListComponent';

// import CombinComponent from '../components/combinComponent';

let qyygjg = new QyygjgComponent( 'qyygjg' );
let qycxtrfb = new QycxtrfbComponent( 'qycxtrfb' );
let qynhfb = new QynhfbComponent( 'qynhfb' );
let cngsqyyj = new ListComponent( 'cngsqyyj', '产销率' );
let nhcbqyyj = new ListComponent( 'nhcbqyyj', '超出率' );

let combinList = new CombinListComponent( 'zyjjzb' );
let qyjyzbztqs = new QyjyzbztqsComponent( 'qyjyzbztqs' );
// let com1 = new CombinComponent( '', '工业总产值' );

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

}


render();

