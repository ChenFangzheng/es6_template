import './cutomPieComponent.scss';

import * as Highcharts from 'highcharts';
import $ from 'jquery';

const colors = ["#00ffff", "#00a8ff", "#42996e", "#ff9800"];

export class CustomPie {
    constructor(containerId, title) {
        this.containerId = containerId;
        this.title = title;
    }

    getSeries(data, colors) {
        let total = data.map(function (el) { return el.value; })
            .reduce(function (p, c) {
                return p + c;
            });
        let newData = data.map(function (el) {
            el.count = el.value;
            el.value = el.value * 100 / total;
            return el;
        });
        data = newData;

        let start = 0;
        let series = [];
        let rDataItem;
        for (let i = 0; i < data.length; i++) {
            let end = start + 360 * data[i].value / 100,
                pieSize = i == 0 ? 170 : 155;
            rDataItem = {};
            rDataItem.color = colors[i];
            rDataItem.y = parseFloat(data[i].value.toFixed(1));
            rDataItem.name = data[i].name;
            series.push({
                name: data[i].name,
                type: 'pie',
                size: pieSize,
                innerSize: 100,
                startAngle: start,
                endAngle: end,
                data: [rDataItem]
            });
            start = end;
        };

        return series;
    }

    drawChart(data, colors) {
        let series = this.getSeries(data, colors);
        let total = data.map(function (el) { return el.value; })
            .reduce(function (p, c) {
                return p + c;
            });
        let percent = series.y * 100 / total;
        Highcharts.chart(this.containerId, {
            chart: {
                type: 'pie',
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: '行业占比',
                floating: true,
                align: "center",
                y: 110,
                style: {
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
                useHTML: true,
                // borderColor: 'transparent',
                // backgroundColor: 'transparent',
                // shadow: false,
                headerFormat: '<div>',
                pointFormat: '{series.name}: 占比{point.y}%<br><span>213</span>',
                footerFormat: '</div>',
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
            series: series
        });
    }

    render(data) {
        this.drawChart(data, colors);
    }
}