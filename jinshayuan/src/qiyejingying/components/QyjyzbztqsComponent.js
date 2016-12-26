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
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        };
    }

    render( data = [] ) {
        H.chart( this.container, this.options );
    }
}