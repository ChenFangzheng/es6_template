import * as H from 'highcharts';

/**
 *企业创新投入分布
 */
export default class QycxtrfbComponent {

    constructor( containerId ) {
        this.container = containerId;
        this.options = {
            chart: {
                type: 'pie',
                backgroundColor: 'transparent',
                margin: [15, 15, 15, 15]
            },
            title: {
                text: '<span style="color:#fff; font-size:16px;font-family:Microsoft YaHei;font-weight:normal;display:block; ">创新投<br>入分布</span>',
                useHTML: true,
                y: 80
            },
            credits: { enabled: false, },
            legend: {
                enabled: true,
                align: 'left',
                layout: ' vertical',
                y: -50,
                itemMarginTop: 5,
                itemStyle: {
                    color: '#fff',
                    "font-family": "Microsoft YaHei",
                    "font-weight": "normal"
                }
            },
            tooltip: {
                pointFormat: ':占比<span style="color:#ff9800;">{point.y}</span>',
                valueSuffix: '%'
            },
            plotOptions: {
                pie: {
                    // depth: 45,
                    innerSize: 100,
                    borderWidth: 0,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    colors: ['#00ffff', '#bf7fcf', '#42996e', '#ff9800', '#00a8ff']
                }
            },
            series: [{
                name: '',
                // data: [
                //     ['Bananas', 8],
                //     ['Kiwi', 3],
                //     ['Mixed nuts', 1],
                //     ['Oranges', 6],
                //     ['Apples', 8],
                //     ['Pears', 4],
                //     ['Clementines', 4],
                //     ['Reddish (bag)', 1],
                //     ['Grapes (bunch)', 1]
                // ]
            }]
        };
    }

    render( data = [] ) {
        let _data = [];
        data.forEach(( {name, value}, index ) => {
            _data.push( [name, value] );
        });

        this.options.series[0].data = _data;
        H.chart( this.container, this.options );
    }
}