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
                                <button className="btn btn-primary" style={{margin:"10px"}} onClick={() => this.props.positionUp(this.props.topicId, this.props.widget.id, this.props.widget)}>
                                    <i className="fa fa-arrow-circle-up fa-2x"></i>
                                </button>
                                <button className="btn btn-primary" style={{margin:"10px"}} onClick={() => this.props.positionDown(this.props.topicId, this.props.widget.id, this.props.widget)}>
                                    <i className="fa fa-arrow-circle-down fa-2x"></i>
                                </button>
                                <button className="btn btn-success" style={{margin:"10px"}} onClick={() => this.props.save(this.state.widget.id, this.state.widget)}>
                                    <i className="fa fa-check-circle fa-2x"></i>
                                </button>
                                <button className="btn btn-danger" style={{margin:"10px"}} onClick={() => this.props.notEditing()}>
                                    Cancel
                                </button>
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
                        }}></textarea>

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