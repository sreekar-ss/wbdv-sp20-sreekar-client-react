import React from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";



class WidgetListItem extends React.Component{


    render() {
        return(
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidget
                        editing = {this.props.editing}
                        widget = {this.props.widget}
                    />
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        editing = {this.props.editing}
                        widget = {this.props.widget}
                    />
                }
                {
                    this.props.editing &&
                    <span>
                        <button type="button" className="close"
                                onClick={() =>
                                    this.props.deleteWidget(this.props.widget.id)}>
                            <span aria-hidden="true" style={{float: "left"}}>&times;</span>
                        </button>

                        <button onClick={() => this.props.save()}>
                            <i className="fa fa-check-circle fa-2x"></i>
                        </button>
                    </span>
                }

            </div>
        )
    }
}


export default WidgetListItem