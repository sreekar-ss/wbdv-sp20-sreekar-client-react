import React from "react";



class ParagraphWidget extends React.Component {


    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div className="container-fluid">
                {
                    this.props.editing &&
                    <div>
                     <span className="row">
                            <div className="col">
                                <h2>Paragraph Widget</h2>
                            </div>
                            <div className="col" style={{float:"right"}}>
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

                        <textarea className="form-control" placeholder="Your paragraph content goes here" onChange={(e) => {
                            const newPara = e.target.value;
                            this.setState(prevState => ({
                                widget: {
                                    ...prevState.widget,
                                    title: newPara
                                }
                            }))
                        }}/>

                        <div style={{paddingTop: "10px"}}>
                            <h4>Preview</h4>

                            <div>
                                {this.state.widget.title}
                            </div>
                        </div>

                    </div>
                }
                {
                    !this.props.editing &&
                    <span>
                        <h6>{this.props.widget.title}</h6>
                    </span>
                }

            </div>
        );
    }
}

export default ParagraphWidget