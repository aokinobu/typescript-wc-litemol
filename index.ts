import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import 'litemol/index.js';
/**
* @polymer
* @extends HTMLElement
* @demo public/index.html
* @appliesMixin
*/
class LiteMol extends PolymerElement {
  selection: any;
  diseaseresultdata: any;
  urlEnv: String;    // = 'www';

/**
var grailsAppEnv = new RegExp('wwwdev').test(window.location.href) ? 'wwwdev' : new RegExp('wwwint').test(window.location.href) ? 'wwwint' : 'www';
if(typeof grailsAppEnv != 'undefined' && grailsAppEnv == 'wwwdev') urlEnv = 'wwwdev';
*/
  static get template() {
    return html`

<style type="text/css">
</style>

<!-- Instantiate LiteMol2Component -->
     var initParams = {
            moleculeId: '1hd4',
            pdbeUrl: 'https://'+ urlEnv +'.ebi.ac.uk/pdbe/',
            loadMaps: true,
            validationAnnotation: true,
            domainAnnotation: true,
            lowPrecisionCoords: true,
            isExpanded: false,
            treeMenu: false,
            hideControls: false,
            showLogs: false,
            subscribeEvents: false,
            selectInteractions: true,
            showPDBeLogo: true
     }

     initParams['assemblyId'] = '1';

     LiteMolPluginInstance.render(document.getElementById('litemolViewer'), initParams);
     if(window.innerWidth > 750){
         LiteMolPluginInstance.setMenuView(document.getElementById('litemolViewer'), 'landscape');
     }else{
    	 LiteMolPluginInstance.setMenuView(document.getElementById('litemolViewer'), 'portrait');
     }

 selection: {{selection}}
<iron-ajax auto="" url="https://test.sparqlist.glyconavi.org/api/GlycoSample_Disease_List_chart" handle-as="json" last-response="{{diseaseresultdata}}"></iron-ajax>

<google-chart id="selectionchart" type="pie" rows='[[diseaseresultdata]]' cols='[{"label": "Disease", "type": "string"},{"label": "Count", "type": "number"}]' on-google-chart-ready="handleClick" on-google-chart-select="selectionClicked" selection="{{selection}}"></google-chart>
`;
  }
  static get properties() {
    return {
      selection: {
        notify: true,
        type: String,
        value: function() {
          return new String();
        }
      },
      diseaseresultdata: {
        notify: true,
        type: Object,
        value: function() {
          return new Object();
        }
      }
    };
  }

  ready() {
    super.ready();
    console.log("ready");
  }
  handleClick(e) {
    console.log('click');
  }
  selectionClicked(e) {
    console.log("selectionClicked");
    console.log(e);

    // GoogleChart chart = this.shadowRoot.getElementById("selectionchart");
    // console.log(chart);

    // console.log(this.selection);
    console.log(this.selection[0].row);
    console.log(this.diseaseresultdata);
    console.log(this.diseaseresultdata[0].row);
    console.log(this.diseaseresultdata[this.selection[0].row][0]);

    this.selection = this.diseaseresultdata[this.selection[0].row][0];
  }
  _handleAjaxPostError(e) {
    console.log('error: ' + e);
  }
}

customElements.define('wc-litemol', LiteMol);
