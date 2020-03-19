import React from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";



class WidgetListItem extends React.Component{


    render() {
        return(
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidget
                        editing = {this.props.editing}
                        widget = {this.props.widget}
                        save = {this.props.save}
                        notEditing = {this.props.notEditing}
                        positionUp = {this.props.positionUp}
                        positionDown = {this.props.positionDown}
                        topicId = {this.props.topicId}
                        counter ={this.props.counter}
                        first = {this.props.first}
                        last = {this.props.last}
                        state = {this.props.state}
                    />
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        editing = {this.props.editing}
                        widget = {this.props.widget}
                        save = {this.props.save}
                        notEditing = {this.props.notEditing}
                        positionUp = {this.props.positionUp}
                        positionDown = {this.props.positionDown}
                        topicId = {this.props.topicId}
                        first = {this.props.first}
                        last = {this.props.last}
                        state = {this.props.state}
                    />
                }
                {
                    this.props.widget.type === "LIST" &&
                    <ListWidget
                        editing = {this.props.editing}
                        widget = {this.props.widget}
                        save = {this.props.save}
                        notEditing = {this.props.notEditing}
                        positionUp = {this.props.positionUp}
                        positionDown = {this.props.positionDown}
                        topicId = {this.props.topicId}
                        first = {this.props.first}
                        last = {this.props.last}
                        state = {this.props.state}
                    />
                }
                {
                    this.props.widget.type === "IMAGE" &&
                    <ImageWidget
                        editing = {this.props.editing}
                        widget = {this.props.widget}
                        save = {this.props.save}
                        notEditing = {this.props.notEditing}
                        positionUp = {this.props.positionUp}
                        positionDown = {this.props.positionDown}
                        topicId = {this.props.topicId}
                        first = {this.props.first}
                        last = {this.props.last}
                        state = {this.props.state}
                    />
                }
                {
                    this.props.editing &&
                    <span>
                        <button type="button" className="btn btn-danger" style={{float:"right"}}
                                onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            Delete
                        </button>

                    </span>
                }

            </div>
        )
    }
}


export default WidgetListItem