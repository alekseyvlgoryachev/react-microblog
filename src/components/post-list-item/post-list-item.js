import React, {Component} from "react";
import {ClassList} from "../../functions";

import "../../../src/components/post-list-item/post-list-item.sass";

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = "app-list-item d-flex justify-content-between";
        if(important) {
            classNames = ClassList(classNames).add("important").toString();
        }
        if(like) {
            classNames = ClassList(classNames).add("like").toString();
        }

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={ onToggleLiked }>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={ onToggleImportant }>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}