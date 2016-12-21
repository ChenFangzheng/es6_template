import $ from 'jquery';

export default class QyygjgComponent {

    constructor( containerId ) {
        this.container = $( `#${containerId}` );
    }


    render( data = [] ) {
        let html = `<ul>`;

        data.forEach(( { name, value}, index ) => {
            html += `<li>
            ${name}
=>
            ${value}
            
            </li>`;
        })
        html += '</ul>';
        this.container.html( html );
    }
}