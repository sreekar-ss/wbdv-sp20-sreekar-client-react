import React from "react";



class HeadingWidget extends React.Component {

state = {
    widget: this.props.widget
}


    render() {
        return (
            <div>
                {
                    this.props.editing &&
                    <div>
                        <input
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
                        <select
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

                        <button onClick={() => this.props.positionUp(this.props.topicId, this.props.widget.id, this.props.widget)}>
                            <i className="fa fa-arrow-circle-up fa-2x"></i>
                        </button>

                        <div>
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

                        <button onClick={() => this.props.save(this.state.widget.id, this.state.widget)}>
                            <i className="fa fa-check-circle fa-2x"></i>
                        </button>
                        <button onClick={() => this.props.notEditing()}>
                            <i className="fa fa-times-circle fa-2x"></i>
                        </button>
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