import $ from 'jquery';

/**
 * 企业用工结构
 */
export default class QyygjgComponent {

    constructor( containerId ) {
        this.container = $( `#${containerId}` );
    }


    render( data = [] ) {
        let html = `<ul>`;
        data.forEach(( { name, value}, index ) => {
            html += `
            <li>
                <div></div>
                <span class="value">${value}%</span>
                <span class="name">${name}</span>        
            </li>`;
        })
        html += '</ul>';
        this.container.html( html );
    }
}