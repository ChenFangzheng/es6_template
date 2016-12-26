import * as H from 'highcharts';
// import $ from 'jquery';
/**
 * 企业经营指标总体趋势
 */
export default class QyjyzbztqsComponent {

    constructor( containerId ) {
        this.container = containerId;
        this.options = {
            chart: {
                type: 'area',
                backgroundColor: 'transparent',
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: ['2016', '2', '3', '4', '5', '6',
                    '7', '8', '9', '10', '11', '12'],
                tickWidth: 0,
                labels: {
                    style: {
                        color: '#fff'
                    }
                }
                //lineWidth: 1,
            },
            colors: H.map( ['#00a8ff', '#00f791', '#51ffff', '#8f5501'], color => {

                return {
                    radialGradient: { cx: 0, cy: 0, r: 0.5 },
                    stops: [
                        [0, H.Color( color ).setOpacity( 1 ).get( 'rgba' )],
                        [1, H.Color( color ).setOpacity( 0.5 ).get( 'rgba' )],
                        [2, H.Color( color ).setOpacity( 0 ).get( 'rgba' )] // darken   
                    ]
                };
            }),
            yAxis: {
                title: {
                    text: ''
                },
                gridLineDashStyle: 'Dot',
                labels: {
                    style: {
                        color: '#fff'
                    }
                }
            },
            credits: { enabled: false, },
            tooltip: {
                //valueSuffix: '°C'
            },
            legend: {
                enabled: false,
                // layout: 'horizontal',
                // align: 'center',
                // verticalAlign: 'bottom',
                // borderWidth: 0
            },
            series: [{
                name: '工业总产值',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                marker: {
                    symbol: `url(${require( "../images/symbol_0.png" )})`
                }
            }, {
                name: '产销率',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
                marker: {
                    symbol: `url(${require( "../images/symbol_1.png" )})`
                }
            }, {
                name: '用电量',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
                marker: {
                    symbol: `url(${require( "../images/symbol_2.png" )})`
                }
            }, {
                name: '用工量',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
                marker: {
                    symbol: `url(${require( "../images/symbol_3.png" )})`
                }
            }]
        };
    }

    render( data = [] ) {
        H.chart( this.container, this.options );
    }
}