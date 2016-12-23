import './multiLineComponent.scss';

import * as Highcharts from 'highcharts';
import $ from 'jquery';

const colors = ["#00b9b9", "#8f5501", "#007349", "#013f6b"];

export class MultiLine {
    constructor(containerId) {
        this.containerId = containerId;
        this.width = $(`#${this.containerId}`).width();
    }


    drawChart(data) {
        let mSeries = data.series.map((item, i) => {
            item.zoneAxis = 'x';
            item.color = colors[i];
            item.fillColor = {
                linearGradient: [0, 0, 0, 250],
                stops: [
                    [0, colors[i]],
                    [0.8, 'rgba(0,0,0,0)']
                ]
            };
            item.zones = [{
                value: 12
            },
            {
                dashStyle: "dash"
            }];

            return item;
        })

        Highcharts.chart(this.containerId, {
            chart: {
                type: 'areaspline',
                backgroundColor: 'rgba(0,0,0,0)',
                marginTop: 40
            },
            title: {
                text: '',
            },
            credits: { enabled: false, },
            xAxis: {
                labels: {
                    style: {
                        color: '#c0c4d0'
                    }
                },
                lineColor: "#5d83b0",
                tickWidth: 0,
                categories: data.categories
            },
            yAxis: {
                labels: {
                    style: {
                        color: '#c0c4d0'
                    }
                },
                gridLineDashStyle: 'dash',
                gridLineColor: "#5d83b0",
                title: {
                    text: '亿元',
                    align: 'high',
                    style: {
                        color: "#c0c4d0"
                    },
                    rotation: 0,
                    y: -16,
                    x: 34
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                // valueSuffix: ' cm',
                // shared: true,
                style: {
                    color: '#fff'
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                crosshairs: {
                    width: 2,
                    color: '#004974',
                    dashStyle: 'solid'
                }
            },
            series: mSeries
        });
    }

    render(data) {
        this.drawChart(data);
    }
}