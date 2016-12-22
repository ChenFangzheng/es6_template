import './cutomPieComponent.scss';

import * as Highcharts from 'highcharts';
import $ from 'jquery';

const colors = ["#00ffff", "#00a8ff", "#42996e", "#ff9800"];

export class CustomPie {
    constructor(containerId, title) {
        this.containerId = containerId;
        this.title = title;
        this.width = $(`#${this.containerId}`).width();
        this.init();
    }

    init() {
        let $container = $(`#${this.containerId}`);
        $container.addClass('customPie');
        $container.height(this.width * 4.8 / 6);
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

        let start = 0;
        let series = [],
            innerSize = this.width / 3;
        let rDataItem;
        for (let i = 0; i < newData.length; i++) {
            let end = start + 360 * newData[i].value / 100,
                pieSize = i == 0 ? 170 : 155;
            rDataItem = {};
            rDataItem.color = colors[i];
            rDataItem.y = parseFloat(newData[i].value.toFixed(1));
            rDataItem.value = data[i].count;
            rDataItem.unit = newData[i].unit;
            rDataItem.name = newData[i].name;
            series.push({
                name: newData[i].name,
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
        let titleHeigth = this.width * 0.9 / 3;
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
                y: titleHeigth,
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
                itemHoverStyle: {
                    color: "#fff",
                    "fontWeight": "normal"
                },
                itemStyle: {
                    color: "#fff",
                    "fontWeight": "normal"
                },
                y: -20
            },
            tooltip: {
                useHTML: true,
                // borderColor: 'transparent',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                shadow: false,
                headerFormat: '<div class="pieTooltip">',
                pointFormat: '{series.name}: 占比<span class="orange">{point.y}%</span><br><span class="orange">{point.value}</span><span>{point.unit}</span>',
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