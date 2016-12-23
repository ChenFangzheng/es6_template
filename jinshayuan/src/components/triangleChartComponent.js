import './triangleChartComponent.scss';
import d3 from 'd3';
const colors = ["#00b9b9", "#8f5501", "#007349", "#013f6b"];

export class TriangleChart {
    constructor(containerId, title) {
        this.containerId = containerId;
        this.title = title;
        this.width = document.getElementById(this.containerId).offsetWidth;
        this.chartH = this.width / 2;
        this.triangleContainerId = "triangleChart";
        this.init();
    }

    init() {
        let html = `<h3 class="componentTitle">龙头企业 (工业增加值)</h3>
                    <div id="triangleChart"></div>`;
        let elem = document.createElement('div'),
            container = document.getElementById(this.containerId);
        elem.className = 'triangleChart';
        elem.innerHTML = html;
        container.innerHTML = elem.outerHTML;
        // set height and width for triangle container
        let triangleContainer = document.getElementById("triangleChart");
        triangleContainer.setAttribute("style", `width:${this.width}px`);
        triangleContainer.setAttribute("style", `height:${this.chartH}px`);
    }

    drawTriangleChart(containerId, data) {
        let svg = d3.select("#" + containerId)
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.chartH);
        this.appendGradientToSvg(svg, colors[0]);
        this.createTriangleChart(svg, 0, 0, this.chartH - 20);
        this.triangleTween(svg, data, this.chartH - 20);
    }

    createTriangleChart(svg, x, y, triangleBottomY) {
        let polygons = svg.append("g").attr("class", "top4")
            .attr("transform", "translate(" + x + "," + y + ")");
        let triangleWidth = this.width / 7,
            distance = triangleWidth;
        for (let i = 0; i < 4; i++) {
            polygons.append("polygon")
                .attr("class", "top4_polygon")
                .attr("points", function () {
                    return (triangleWidth / 2 + i * (distance + triangleWidth)) + ',' + triangleBottomY +
                        " " + (0 + i * (distance + triangleWidth) + ", " + triangleBottomY +
                            " " + (triangleWidth + i * (distance + triangleWidth))) + "," + triangleBottomY;
                })
                .style("fill", "url(#triangleGradient)");
            polygons.append("text")
                .attr("x", i * (distance + triangleWidth))
                .attr("y", triangleBottomY - y)
                .attr("dy", ".35em")
                .attr("fill", colors[i])
                .attr("class", "top4_num");
            polygons.append("text")
                .attr("x", i * (distance + triangleWidth))
                .attr("y", triangleBottomY - y)
                .attr("dy", ".35em")
                .attr("class", "top4_name");
        }
    }

    triangleTween(svg, data_t, triangleBottomY) {
        // var data_t = dataset[dayIndex].tradetop4;
        let tradeValue = data_t.map(function (d, i) {
            return d.value;
        });
        let maxData = Math.max.apply(Math, tradeValue);
        let triangleWidth = this.width / 7,
            distance = triangleWidth,
            maxTriangleH = triangleBottomY * 4 / 5;
        let duration = 500;
        svg.selectAll(".top4_polygon")
            .data(data_t)
            .transition()
            .duration(duration)
            .ease("linear")
            .attr("points", function (d, i) {
                if (maxData === 0) {
                    maxData = 1;
                }
                return [triangleWidth / 2 + i * (distance + triangleWidth), triangleBottomY - Math.ceil(d.value * maxTriangleH / maxData)].join(",") +
                    " " + (0 + i * (distance + triangleWidth)) + ", " + triangleBottomY + " " +
                    (triangleWidth + i * (distance + triangleWidth)) + ", " + triangleBottomY;
            });
        svg.selectAll(".top4_num")
            .data(data_t)
            .transition()
            .duration(duration)
            .ease("linear")
            .attr("y", function (d) {
                return triangleBottomY - Math.ceil(d.value * maxTriangleH / maxData) - 10;
            })
            .text(function (d) {
                return d.value;
            });
        svg.selectAll(".top4_name").data(data_t)
            .transition()
            .duration(duration)
            .ease("linear")
            .text(function (d) {
                return d.name;
            });
    }

    appendGradientToSvg(svg, color) {
        var gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "triangleGradient")
            .attr("x1", "0%")
            .attr("y1", "100%")
            .attr("x2", "0%")
            .attr("y2", "0%")
            .attr("spreadMethod", "pad");
        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", color)
            .attr("stop-opacity", 0);
        gradient.append("stop")
            .attr("offset", "20%")
            .attr("stop-color", color)
            .attr("stop-opacity", 0.3);
        gradient.append("stop")
            .attr("offset", "40%")
            .attr("stop-color", color)
            .attr("stop-opacity", 0.6);
        gradient.append("stop")
            .attr("offset", "60%")
            .attr("stop-color", color)
            .attr("stop-opacity", 0.7);
        gradient.append("stop")
            .attr("offset", "80%")
            .attr("stop-color", color)
            .attr("stop-opacity", 0.8);
        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", color)
            .attr("stop-opacity", 1);
        return "triangleGradient";
    }

    render(data) {
        this.drawTriangleChart(this.triangleContainerId, data);
    }
}