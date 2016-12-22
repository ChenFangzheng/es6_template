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
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: '行业占比',
                floating: true,
                align: "center",
                y: 84,
                itemStyle: {
                    color: "#fff"
                }
            },
            credits: { enabled: false, },
            legend: {
                margin: 5,
                symbolWidth: 10,
                symbolHeight: 10,
                itemDistance: 6,
                width: "100%",
                itemStyle: {
                    color: "#fff"
                }
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
                    showInLegend: true,
                    borderWidth: 0
                },
                series: {
                    point: {
                        events: {
                            legendItemClick: function () {
                                return false; // <== returning false will cancel the default action
                            },
                            click: function () {
                                return false;
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                innerSize: "60%",
                data: [{
                    name: '食品加工业',
                    y: 24.03,
                }, {
                    name: '机械制造业',
                    y: 10.38
                }, {
                    name: '林业加工业',
                    y: 4.77
                }, {
                    name: '其它',
                    y: 0.91
                }]
            }]
        });
    }

    render(data) {
        this.drawChart(data);
    }
}