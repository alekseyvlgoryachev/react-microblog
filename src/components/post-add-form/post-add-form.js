import React, {Component} from "react";

import "../../../src/components/post-add-form/post-add-form.css";

class PostAddForm extends Component {
    state = {
        text: ""
    }

    readInput = (EventObject) => {
        this.setState({
            text: EventObject.target.value
        });
    }

    render() {
        const fnSubmitHandler = (EventObject) => {
            EventObject.preventDefault();
        };

        const { onAdd } = this.props;
        const { text } = this.state;

        return (
            <form className="bottom-panel d-flex" onSubmit={ fnSubmitHandler }>
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={ this.readInput }
                    value={text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        onAdd(text);
                        this.setState({text: ""});
                    }}>
                        Добавить
                </button>
            </form>
        )
    }
}

export default PostAddForm;