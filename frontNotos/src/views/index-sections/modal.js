
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    render() {
        const { items } = this.props;

        return (
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">{items.nameCampaign}</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;