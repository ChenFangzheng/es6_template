import $ from 'jquery';

/**
 * 列表组件
 */
export default class ListComponent {

    constructor( containerId, typeName ) {
        this.container = $( `#${containerId}` );
        this.typeName = typeName;
        this.images = [
            require( '../images/list_0.png' ),
            require( '../images/list_1.png' ),
            require( '../images/list_2.png' ),
        ]
    }

    render( data = [] ) {
        let _html = `<ul>`;

        data.forEach(( { name, value}, index ) => {
            _html +=
                `<li>
                    <img src="${this.images[index]}" alt="">
                    <span class="title">${ name}</span>
                    <span class="typename">${this.typeName}</span>
                    <span class="value">${value}%</span>
                </li>`;
        });

        _html += `</ul>`;

        this.container.html( _html );
    }
}