import './tradeDistributionComponent.scss';

export class TradeDistribution {
    constructor(containerId, title) {
        this.containerId = containerId;
        this.title = title;
    }

    getHtml(data) {
        data.sort((a, b) => a.value - b.value);
        let itemsHtml = '',
            percetage,
            itemIndex = 0;
        let total = data.map(item => item.value)
            .reduce((pre, cur) => pre + cur);

        for (let item of data) {
            percetage = (item.value * 100 / total).toFixed(0);
            itemsHtml += `<li>
                            <div class="leftPart">
                                <span class="order">${++itemIndex}</span>
                                <div class="chart">
                                    <div class="tradeName">${item.name}</div>
                                    <div class="bar">
                                        <div style="width:${percetage}%" class="innerBar"></div>
                                    </div>
                                </div>
                                <div class="percetage">${percetage}%</div>
                            </div>
                            <div class="value">${item.value + item.unit}</div>
                        </li>`;
        }

        let html = `<h3 class="componentTitle">行业占比</h3>
                    <ul>${itemsHtml}</ul>`;

        return html;
    }

    render(data, append) {
        let elem = document.createElement('div'),
            container = document.getElementById(this.containerId);

        elem.className = 'tradeDistribution';
        elem.innerHTML = this.getHtml(data);

        if (append) {
            container.appendChild(elem);
        } else {
            container.innerHTML = elem.outerHTML;
        }

    }
}