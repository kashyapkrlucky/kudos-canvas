import React from 'react';
import ReactDOM from "react-dom";
const modalRoot = document.getElementById('modal-root');

class ModalPage extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('section');
        this.el.classList.add("fixed","top-0", "flex", "justify-center", "w-full", "h-full", "items-center", 'bg-w-bd');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
            // document.getElementById('modal-root')
        );
    }
}

export { ModalPage };