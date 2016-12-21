import './itemsListComponent.scss';

export class ItemsList {
    constructor(containerId, title) {
        this.containerId = containerId;
        this.title = title;
    }

    /**
     * item Bg: 
     * undefined for no Bg
     * odd for odd items set Bg
     * even for even items set Bg
     *  */
    render(data, itemBg, itemLogoColor, append) {
        let itemsHtml = '',
            itemLogo,
            bgClass = itemBg == undefined ? "" : itemBg.toLowerCase();
        if (itemLogoColor) {
            itemLogo = require('../images/b_finger.png');
        } else {
            itemLogo = require('../images/or_finger.png');
        }


        data.sort((a, b) => a.order - b.order);

        for (let item of data) {
            itemsHtml += `<li class="${bgClass}">
                                <div class="leftPart">
                                    <span class="order">${item.order}</span>
                                    <img src="${itemLogo}" alt="" />
                                    <span class="companyName">${item.name}</span>
                                </div>
                                <span class="value">${item.value}</span>
                         </li>`;
        }

        let html = `<h3 class="componentTitle">龙头企业 (工业产值)</h3>
                    <ul>${itemsHtml}</ul>
                    `;
        let elem = document.createElement('div'),
            container = document.getElementById(this.containerId);
        elem.className = 'ItemList';
        elem.innerHTML = html;
        if (append) {
            container.appendChild(elem);
        } else {
            container.innerHTML = elem.outerHTML;
        }

    }
}