import './index.scss';
import * as Highcharts from 'highcharts';
require('highcharts/highcharts-more')(Highcharts);
import $ from 'jquery';
import { getData } from './dataProvider';


function loadhead(data) {
    $('#maintitle').text(data.enterprise_name);
    $('#category').text(data.enterprise_type);
    window.setInterval(() => {
        let datestr = '';
        let curdate = new Date();
        datestr += curdate.getFullYear() + '年' + (curdate.getMonth() + 1) + '月' + curdate.getDate() + '日';
        datestr += ' ' + curdate.getHours() + '时' + curdate.getMinutes() + '分' + curdate.getSeconds() + '秒';
        $('#curtime').text(datestr);
    }, 1000);
    $('#close').on('click', function() {
        $('.pop').hide();
    })
}

function loadintro(data) {
    $('#legal_name').text(data.legal_name);
    $('#annual_value').text(data.annual_value);
    $('#regCapitas').text(data.regCapitas);
    $('#employees').text(data.employees);
    $('#mainproduct').text(data.mainproduct);
}

function loadpolar(data) {
    let option = {
        chart: {
            polar: true,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            text: ''
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        xAxis: {
            categories: data.categories,
            gridLineColor: '#00F6FF',
            labels: {
                useHTML: true,
                formatter: function() {
                    return '<div class="labelctn" index="' + data.categories.indexOf(this.value) + '" style="border:1px solid #EC9B17;border-radius:5px;padding:5px 10px;box-shadow: inset 0 0 5px #EC9B17;">' + this.value + '</div>';
                }
            },
            tickmarkPlacement: 'on'
        },
        yAxis: {
            min: 0,
            max: 100,
            gridLineColor: '#007AEF',
            plotLines: [{
                color: 'rgba(0,122,239,0.5)',
                width: 1,
                value: 25
            }, {
                color: 'rgba(0,122,239,0.5)',
                width: 1,
                value: 75
            }]
        },
        plotOptions: {
            area: {
                color: '#00F6FF',
                fillOpacity: 0.3
            }
        },
        series: [{
            type: 'area',
            name: 'Area',
            dataLabels: {
                enabled: true,
                style: {
                    color: '#00F6FF',
                    fontFamily: 'Microsoft YaHei'
                }
            },
            point: {
                events: {
                    mouseOver: function() {
                        //console.log($(this.series.xAxis.labelGroup.div).find('.labelctn').eq(this.series.index));
                    }
                }
            },
            marker: {
                lineColor: '#00F6FF',
                lineWidth: 2,
                fillColor: '#000',
                states: {
                    hover: {
                        lineColor: '#EC9B17',
                        lineWidth: 2,
                        fillColor: '#000',
                        radiusPlus: 0,
                        lineWidthPlus: 0
                    }
                }
            },
            data: data.datas
        }]
    };
    Highcharts.chart('polarChart', option);

    let array = $('.labelctn');
    array.on('click', function() {
        array.removeClass('label_selected');
        $(this).addClass('label_selected');
    })
}

getData().then(function(data) {
    loadhead(data.headdata);
    loadintro(data.intro);
    loadpolar(data.polar_data);
});