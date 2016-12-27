import './triangleChartComponent.scss';
import d3 from 'd3';
const colors = ["#00b9b9", "#013f6b", "#007349", "#8f5501"];

export class TriangleChart {
    constructor(containerId, title) {
        this.containerId = containerId;
        this.title = title;
        this.width = document.getElementById(this.containerId).offsetWidth;
        this.chartH = this.width * 0.5;
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
        this.createTriangleChart(svg, this.chartH - 60);
        this.triangleTween(svg, data, this.chartH - 60);
    }

    createTriangleChart(svg, triangleBottomY) {
        let triangleWidth = this.width / 8,
            distance = triangleWidth,
            gradientId;
        let polygons = svg.append("g").attr("class", "top4")
            .attr("transform", "translate(" + (distance / 2) + "," + 0 + ")");

        for (let i = 0; i < 4; i++) {
            gradientId = this.appendGradientToSvg(svg, colors[i], "gradient" + i);
            polygons.append("polygon")
                .attr("class", "top4_polygon")
                .attr("points", function () {
                    return (triangleWidth / 2 + i * (distance + triangleWidth)) + ',' + triangleBottomY +
                        " " + (0 + i * (distance + triangleWidth) + ", " + triangleBottomY +
                            " " + (triangleWidth + i * (distance + triangleWidth))) + "," + triangleBottomY;
                })
                .style("fill", `url(#${gradientId})`);
            polygons.append("text")
                .attr("x", i * (distance + triangleWidth))
                .attr("y", triangleBottomY)
                .attr("dy", ".35em")
                .attr("fill", colors[i])
                .attr("class", "top4_num");
            polygons.append("text")
                .attr("x", i * (distance + triangleWidth) - 0.2 * distance)
                .attr("y", triangleBottomY + 15)
                .attr("id", "top4_name" + i)
                .attr("class", "top4_name");

            polygons.append("line")
                .attr("class", "dashline");
        }

        // draw the bottom line
        polygons.append("line")
            .attr("x1", 0)
            .attr("y1", triangleBottomY + 5)
            .attr("x2", this.width - distance)
            .attr("y2", triangleBottomY + 5)
            .style("stroke-width", 1)
            .style("stroke", "#9ac1e0");
    }

    triangleTween(svg, data_t, triangleBottomY) {
        // var data_t = dataset[dayIndex].tradetop4;
        let tradeValue = data_t.map(function (d, i) {
            return d.value;
        });
        let maxData = Math.max.apply(Math, tradeValue);
        let triangleWidth = this.width / 8,
            distance = triangleWidth,
            maxTriangleH = triangleBottomY * 3 / 4;
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
                return d.value + d.unit;
            });

        svg.selectAll(".dashline")
            .data(data_t)
            .attr("x1", function (d, i) {
                return triangleWidth / 2 + i * (distance + triangleWidth);
            })
            .attr("y1", triangleBottomY)
            .attr("x2", function (d, i) {
                return triangleWidth / 2 + i * (distance + triangleWidth);
            })
            .attr("y2", triangleBottomY)
            .transition()
            .duration(duration)
            .ease("linear")
            .attr("x1", function (d, i) {
                return triangleWidth / 2 + i * (distance + triangleWidth);
            })
            .attr("y1", triangleBottomY)
            .attr("x2", function (d, i) {
                return triangleWidth / 2 + i * (distance + triangleWidth);
            })
            .attr("y2", function (d, i) {
                return triangleBottomY - Math.ceil(d.value * maxTriangleH / maxData);
            })
            .style("stroke-width", 1)
            .style("stroke-dasharray", "3,3")
            .style("stroke", "#fff");

        for (let index = 0; index < 4; index++) {
            let multiText = svg.select("#top4_name" + index);
            let strs = this.splitStringByLine(data_t[index].name, 6);
            multiText.selectAll("tspan")
                .data(strs)
                .enter()
                .append("tspan")
                .attr("x", multiText.attr('x'))
                .attr("dy", "1.1em")
                .text(d => d);
        }
    }

    appendGradientToSvg(svg, color, id) {
        var gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", id)
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
        return id;
    }

    splitStringByLine(str, step) {
        let result = [],
            start = 0,
            stepNum = Math.ceil(str.length / step);

        for (let i = 0; i < stepNum; i++) {
            result.push(str.substr(start, step));
            start += step;
        }

        return result;
    }

    render(data) {
        this.drawTriangleChart(this.triangleContainerId, data);
    }
}