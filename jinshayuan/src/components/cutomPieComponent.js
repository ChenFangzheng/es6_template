import './cutomPieComponent.scss';

import * as Highcharts from 'highcharts';
import $ from 'jquery';

export class CustomPie {
    constructor(containerId, title) {
        this.containerId = containerId;
        this.title = title;
    }

    drawChart(data) {
        Highcharts.chart(this.containerId, {
            chart: {
                type: 'pie',
                backgroundColor: 'rgba(0,0,0,0)',
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                innerSize: "60%",
                data: [{
                    name: 'Chrome',
                    y: 24.03,
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }]
            }]
        });
    }

    render(data) {
        this.drawChart(data);
    }
}