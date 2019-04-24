
import { LiteMol } from 'litemol';

let plugin = LiteMol.Plugin.create({ 
    target: document.getElementById('litemol'),
    viewportBackground: '#ffffff',
    layoutState: { hideControls: true } // you can also include isExpanded: true
});
plugin.context.logger.message(`Hello LiteMol`);

//          var initParams = {
//             moleculeId: '1hd4',
//             pdbeUrl: 'https://'+ this.urlEnv +'.ebi.ac.uk/pdbe/',
//             loadMaps: true,
//             validationAnnotation: true,
//             domainAnnotation: true,
//             lowPrecisionCoords: true,
//             isExpanded: false,
//             treeMenu: false,
//             hideControls: false,
//             showLogs: false,
//             subscribeEvents: false,
//             selectInteractions: true,
//             showPDBeLogo: true
//      }

//      initParams['assemblyId'] = '1';

//      let plugin = LiteMol.Plugin.create({ 
//     target: document.getElementById('litemol'),
//     viewportBackground: '#ffffff',
//     layoutState: { hideControls: true } // you can also include isExpanded: true
// });
// plugin.context.logger.message(`Hello LiteMol`);

//      LiteMolPluginInstance.render(document.getElementById('litemolViewer'), initParams);
//      if(window.innerWidth > 750){
//          LiteMolPluginInstance.setMenuView(document.getElementById('litemolViewer'), 'landscape');
//      }else{
//     	 LiteMolPluginInstance.setMenuView(document.getElementById('litemolViewer'), 'portrait');
//      }