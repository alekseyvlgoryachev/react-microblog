import React, {Component} from "react";

import "../../../src/components/post-status-filter/post-status-filter.css";

class PostStatusFilter extends Component {
    buttons = [
        {name: "all", label: "Все"},
        {name: "like", label: "Понравилось"}
    ]

    render() {
        const { filter, onActivateFilter: setFilter } = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const bActive = filter === name;
            const sClass = bActive ? "btn-info" : "btn-outline-secondary";
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${sClass}`}
                    onClick={() => setFilter(name)}>{label}</button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default PostStatusFilter;