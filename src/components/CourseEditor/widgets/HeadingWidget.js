import React from "react";



class HeadingWidget extends React.Component {

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
                                <h2>Heading Widget</h2>
                            </div>
                            <div className="col" style={{float:"right"}}>
                                { (this.props.widget.index !== 0) &&
                                <button className="btn btn-primary" style={{margin:"10px"}} onClick={() => this.props.positionUp(this.props.topicId, this.props.widget.id, this.props.widget)}>
                                    <i className="fa fa-arrow-circle-up fa-2x"></i>
                                </button>}
                                { (this.props.widget.index !== this.props.counter-1) &&
                                <button className="btn btn-primary" style={{margin:"10px"}} onClick={() => this.props.positionDown(this.props.topicId, this.props.widget.id, this.props.widget)}>
                                    <i className="fa fa-arrow-circle-down fa-2x"></i>
                                </button>}
                                <button className="btn btn-success" style={{margin:"10px"}} onClick={() => this.props.save(this.state.widget.id, this.state.widget)}>
                                    <i className="fa fa-check-circle fa-2x"></i>
                                </button>
                                <button className="btn btn-danger" style={{margin:"10px"}} onClick={() => this.props.notEditing()}>
                                    Cancel
                                </button>
                            </div>
                        </span>
                        <input className="form-control" placeholder="Type the name of your Heading"
                            onChange={(e) => {
                                const newTitle = e.target.value;
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        title: newTitle
                                    }
                                }))
                            }}
                            value={this.state.widget.title}/>
                        <select className="form-control"
                            onChange={(e) => {
                                let newSize = e.target.value
                                newSize = parseInt(newSize)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        size: newSize
                                    }
                                }))
                            }}
                            value={this.state.widget.size}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>



                        <div style={{paddingTop: "10px"}}>
                            <h4>Preview</h4>

                            <div>
                                {this.state.widget.size === 1 && <h1>{this.state.widget.title}</h1>}
                                {this.state.widget.size === 2 && <h2>{this.state.widget.title}</h2>}
                                {this.state.widget.size === 3 && <h3>{this.state.widget.title}</h3>}
                                {this.state.widget.size === 4 && <h4>{this.state.widget.title}</h4>}
                                {this.state.widget.size === 5 && <h5>{this.state.widget.title}</h5>}
                                {this.state.widget.size === 6 && <h6>{this.state.widget.title}</h6>}
                            </div>

                        </div>


                    </div>
                }
                {
                    !this.props.editing &&
                    <span>
                        {this.props.widget.size === 1 && <h1>{this.props.widget.title}</h1>}
                        {this.props.widget.size === 2 && <h2>{this.props.widget.title}</h2>}
                        {this.props.widget.size === 3 && <h3>{this.props.widget.title}</h3>}
                        {this.props.widget.size === 4 && <h4>{this.props.widget.title}</h4>}
                        {this.props.widget.size === 5 && <h5>{this.props.widget.title}</h5>}
                        {this.props.widget.size === 6 && <h6>{this.props.widget.title}</h6>}
                    </span>
                }

            </div>
        );
    }
}


export default HeadingWidget