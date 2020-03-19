import React from "react";


class ImageWidget extends React.Component {


    state = {
        widget: this.props.widget
    }
    list;

    render() {
        return (
            <div className="container-fluid">
                {
                    this.props.editing &&
                    <div>
                        <span className="row">
                             <div className="col">
                                    <h2>Image Widget</h2>
                             </div>
                             <div style={{float:"right"}} className="col flex-nowrap">
                                 <div className="row">
                                 { !this.props.first &&
                                    <button className="btn btn-primary" style={{margin:"10px"}} onClick={() => this.props.positionUp(this.props.topicId, this.props.widget.id, this.props.widget, this.props.state)}>
                                        <i className="fa fa-arrow-circle-up fa-2x"></i>
                                    </button>}
                                 { !this.props.last &&
                                    <button className="btn btn-primary" style={{margin:"10px"}} onClick={() => this.props.positionDown(this.props.topicId, this.props.widget.id, this.props.widget, this.props.state)}>
                                        <i className="fa fa-arrow-circle-down fa-2x"></i>
                                    </button>}
                                    <button className="btn btn-success" style={{margin:"10px"}} onClick={() => this.props.save(this.state.widget.id, this.state.widget)}>
                                        <i className="fa fa-check-circle fa-2x"></i>
                                    </button>
                                    <select className="form-control col-3" style={{}} onChange={(e)=> {
                                        let newType = e.target.value
                                        this.setState(prevState => ({
                                            widget : {
                                                ...prevState.widget,
                                                type : newType
                                            }
                                        }))
                                    }} value={this.state.widget.type}>
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                    </select>
                                    <button className="btn btn-danger" style={{margin:"10px"}} onClick={() => this.props.notEditing()}>
                                        Cancel
                                    </button>

                                     </div>
                                </div>
                        </span>
                        <input className="form-control" placeholder="Enter the image URL here"
                               onChange={(e) => {
                                   const newImage = e.target.value;
                                   this.setState(prevState => ({
                                       widget: {
                                           ...prevState.widget,
                                           title: newImage
                                       }
                                   }))
                               }}
                               value={this.state.widget.title}/>

                        <div style={{paddingTop: "10px"}}>
                            <h4>Preview</h4>

                            <img src={this.state.widget.title}></img>
                        </div>

                    </div>
                }
                {
                    !this.props.editing &&
                    <span>
                        <img src={this.state.widget.title}></img>
                    </span>
                }
            </div>
        );
    }
}

export default ImageWidget