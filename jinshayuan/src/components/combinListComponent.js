import $ from 'jquery';
import './combinListComponent.scss';

import CombinComponent from './combinComponent';

export default class CombinListComponent {
    constructor( containerId ) {
        this.container = $( `#${containerId}` );
    }


    render( data = [] ) {

        let _html = `<ul class="combinlist">`;


        data.forEach(( item, index ) => {

            _html += `<li id="combin${index}">
                 ${
                new CombinComponent( `combin${index}`, item.title ).render( item )
                }
            </li>`;
        });

        _html += `</ul>`;

        this.container.html( _html );

        // combinList.forEach(( combin, index ) => {

        // });

    }
}