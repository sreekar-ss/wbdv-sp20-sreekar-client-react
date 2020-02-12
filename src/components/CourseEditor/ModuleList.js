import React from "react";
import ModuleListItem from "./ModuleListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect} from "react-redux";



const ModuleList = ({modules, createModule}) =>
<div>
     <ul  className="list-group">
            {
                 modules && modules.map(module =>
                     <ModuleListItem
                         key = {module._id}
                         module={module}/>
                 )

            }
     </ul>
     <a className="wbdv-module-item-add-btn" href="#" style={{float:"right"}} onClick={createModule}>
          <i className="fa fa-plus fa-2x wbdv-module-item-add-btn"></i>
     </a>
</div>

const stateToPropertyManager = (state) => {
     return {
          modules: state.modules
     }
}

const dispatchToPropertyManager = (dispatch) => {
     return {
     createModule: () => {
          dispatch({
               type: "CREATE_MODULE",
               newModule: {
                    title: 'New Module',
                        _id: (new Date()).getTime()+""
               }

          })
     }

     }
}


export default connect(stateToPropertyManager, dispatchToPropertyManager)
               (ModuleList)