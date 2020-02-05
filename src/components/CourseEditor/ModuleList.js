import React from "react";
import ModuleListItem from "./ModuleListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';



const ModuleList = ({modules}) =>
<div>
     <ul  className="list-group">
            {
                 modules.map(module =>
                     <ModuleListItem
                         key = {module._id}
                         module={module}/>
                 )

            }
     </ul>
     <a className="wbdv-module-item-add-btn" href="#" style={{float:"right"}}>
          <i className="fa fa-plus fa-2x wbdv-module-item-add-btn"></i>
     </a>
</div>

export default ModuleList