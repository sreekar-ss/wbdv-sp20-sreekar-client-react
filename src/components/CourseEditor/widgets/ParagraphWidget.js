import React from "react";



class ParagraphWidget extends React.Component {


    render() {
        return (
            <div>
                {
                    this.props.editing &&
                    <textarea></textarea>
                }
                {
                    !this.props.editing &&
                    <span>
                        {this.props.widget.title}
                    </span>
                }

            </div>
        );
    }
}

export default ParagraphWidget