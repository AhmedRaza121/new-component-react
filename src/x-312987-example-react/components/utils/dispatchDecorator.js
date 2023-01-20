import * as React from 'react';
import ReactDOM from 'react-dom';

class DispatchDetector extends React.Component {
  constructor() {
    super();
    this.state = { dispatch: () => void 0 };
  }

  componentDidMount() {
    const currentNode = ReactDOM.findDOMNode(this);

    const dispatch = (type, payload) => {
      const event = new CustomEvent(type, {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: {
          payload: {
            type,
            ...payload,
            event: {
              type,
            },
          },
        },
      });

      currentNode.dispatchEvent(event);
    };

    this.setState({
      dispatch,
    });
  }

  render() {
    return React.cloneElement(
      React.Children.only(this.props.children),
      { dispatch: this.state.dispatch },
    );
  }
}

export function dispatch() {
  return (Component) => (props) => (
    <DispatchDetector>
      <Component {...props} />
    </DispatchDetector>
  );
}
