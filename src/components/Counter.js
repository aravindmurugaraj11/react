import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      value: prevState.value - 1
    }));
  }

  render() {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '300px',
      margin: '40px auto'
    };

    const buttonStyle = {
      fontSize: '1.2rem',
      padding: '10px 20px',
      margin: '0 10px',
      borderRadius: '5px',
      border: 'none',
      background: '#1976d2',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background 0.2s'
    };

    const valueStyle = {
      fontSize: '2rem',
      fontWeight: 'bold',
      minWidth: '50px',
      textAlign: 'center'
    };

    return React.createElement(
      'div',
      { style: containerStyle },
      React.createElement(
        'button',
        { onClick: this.decrement, style: buttonStyle },
        'Decrement'
      ),
      React.createElement(
        'span',
        { style: valueStyle },
        this.state.value
      ),
      React.createElement(
        'button',
        { onClick: this.increment, style: buttonStyle },
        'Increment'
      )
    );
  }
}

export default Counter;