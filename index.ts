import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
// import { LiteMol } from 'litemol';
// import { LiteMolPluginInstance } from './bundle-bundle_ligand-interactions-module_defer.js';

// import LiteMol from 'LiteMol';

// import { LiteMol, Plugin } from 'litemol';

// import "/pdbe/entry/static/bundle-bundle_ligand-interactions-module_defer.js";

// import 'litemol/js/LiteMol-plugin.js';
// import 'litemol/js/litemol.js';
// import './litemol.js';
// const styles = import('litemol/Hello.css');


/**
* @polymer
* @extends PolymerElement
* @demo public/index.html
* @appliesMixin
*/
class LiteMolPolymer extends PolymerElement {
  selection: any;
  diseaseresultdata: any;
  urlEnv: String;    // = 'www';

/**
var grailsAppEnv = new RegExp('wwwdev').test(window.location.href) ? 'wwwdev' : new RegExp('wwwint').test(window.location.href) ? 'wwwint' : 'www';
if(typeof grailsAppEnv != 'undefined' && grailsAppEnv == 'wwwdev') urlEnv = 'wwwdev';
*/
  static get template() {
    return html`<style type="text/css">
     /* You have the option of setting a maximum width for your page, and making sure everything is centered */
      /* body { max-width: 1600px; margin: 0 auto; } */
      html {
        overflow: hidden;
      }
      body {
        margin: 0;
        width: 100%;
      }
      {{import ('litemol/dist/css/LiteMol-plugin.css')}}
</style>
<link rel="stylesheet" href="" />

  	    <!-- Loader Image  -->
  		<div style="text-align:center;margin-top:250px"><img src="https://www.ebi.ac.uk/pdbe/entry/static/images/widgets/loader.gif" /></div>
  		
  		<!-- LiteMol Container -->
  		<div id="litemolViewer" ></div>
 selection: {{selection}}
<iron-ajax auto="" url="https://test.sparqlist.glyconavi.org/api/GlycoSample_Disease_List_chart" handle-as="json" last-response="{{diseaseresultdata}}"></iron-ajax>
<div id="litemol" />

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
    // LiteMol.
      var urlEnv = 'www';
  //   var grailsAppEnv = new RegExp('wwwdev').test(window.location.href) ? 'wwwdev' : new RegExp('wwwint').test(window.location.href) ? 'wwwint' : 'www';
	// if(typeof grailsAppEnv != 'undefined' && grailsAppEnv == 'wwwdev') urlEnv = 'wwwdev';
 	//Instantiate LiteMol2Component
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

    //  if('1' != '') initParams['assemblyId'] = '1';
     
    //  LiteMolPluginInstance.render(document.getElementById('litemolViewer'), initParams);
    //  if(window.innerWidth > 750){ 
    //      LiteMolPluginInstance.setMenuView(document.getElementById('litemolViewer'), 'landscape');
    //  }else{
    // 	 LiteMolPluginInstance.setMenuView(document.getElementById('litemolViewer'), 'portrait');
    //  }
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

customElements.define('wc-litemol', LiteMolPolymer);
