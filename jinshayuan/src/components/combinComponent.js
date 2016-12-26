import $ from 'jquery';
import d3 from 'd3';
import './combinComponent.scss';

export default class CombinComponent {

    constructor() {
        // this.container = $( `#${containerId}` );

        this.getImage = ( rise ) => {

            let img = rise ? require( '../images/up_.png' ) : require( '../images/down_.png' );
            return img;
        }

        this.getPx = ( unit ) => {
            return unit === '百分比' ? '%' : '';
        }

        this.getScale = ( [number1, number2] ) => {
            let domain = [], max = 1.5, min = 0.5;

            if ( number1 > number2 ) {
                domain.push( number2 * min, number1 * max );
            } else {
                domain.push( number1 * min, number2 * max );
            }


            let scale = d3.scale.linear().domain( domain ).range( [0, 100] );
            return scale;
        }


    }

    render( { title, unit, tbzz, dnwc, sntq, rise}) {
        let scale = this.getScale( [dnwc, sntq] );
        let html = `
                <div class="combin-title">
                    ${title}<span>(${unit})</span>
                </div>
                <div class="combin-content">
                    <div class="combin-circle">
                        <h3>${tbzz}%</h3>
                        <span>同比增长</span>
                        <img src="${ this.getImage( rise )}" />
                    </div>
                    <div class="combin-column">
                        <ul>
                            <li class="c1" style=" height:${ scale( dnwc )}%;">
                                <span class="value" >${dnwc}${this.getPx( unit )}</span>
                                <span class="text">当年完成</span>
                            </li>
                            <li class="c2" style=" height:${ scale( sntq )}%;">
                                <span class="value" >${sntq}${this.getPx( unit )}</span>
                                <span class="text">上年同期</span>
                            </li>
                        </ul>
                    </div>
                </div>
        `;

        return html;

    }
}