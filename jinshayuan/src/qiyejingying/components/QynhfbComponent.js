import * as H from 'highcharts';

/**
 * 企业能耗分布
 */
export default class QynhfbComponent {

    constructor( containerId ) {
        this.container = containerId;
        this.options = {
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                // margin:0
            },
            colors: ['#00fcff'],
            credits: { enabled: false, },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        color: '#fff',
                        "font-family": "Microsoft YaHei",
                        "font-weight": "normal"
                    }
                },

                tickWidth: 0,
                lineWidth: 1,
                tickmarkPlacement: 'on'
            },
            yAxis: {
                gridLineWidth: 0,
                tickPositions: [0, 15, 30, 45],
                labels: {//y轴刻度文字标签  
                    formatter: function () {
                        return this.value + '%';//y轴加上%  
                    },
                    style: {
                        color: '#fff'
                    }
                },
                title: {
                    text: ' '
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
            },
            plotOptions: {
                column: {
                    borderWidth: 0,

                }
            },
            series: [{
                name: 'Population',
                data: [
                    ['低碳环保', 23.7],
                    ['符合标准', 16.1],
                    ['轻微超标', 14.2],
                    ['严重超标', 14.0]
                ],
                dataLabels: {
                    enabled: false
                }
            }]
        };
    }

    render( data = [] ) {
        H.chart( this.container, this.options );
    }
}