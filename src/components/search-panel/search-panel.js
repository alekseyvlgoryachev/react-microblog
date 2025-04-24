import React, {Component} from "react";

import "../../../src/components/search-panel/search-panel.css";

class SearchPanel extends Component {
    state = {
        term: ""
    }

    readInput = (EventObject) => {
        const term = EventObject.target.value;
        const { onInput: fnApplyFilter } = this.props;
        this.setState({ term });
        fnApplyFilter(term);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={ this.readInput }
            />
        )
    }
}

export default SearchPanel;