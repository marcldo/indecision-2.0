import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    //if there was no error then clear the form input, if there was an error we give them a chance to fix it.
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div className="add-option-container">
        <div className="add-option-title-container">
          <p className="add-option-title">ADD OPTION</p>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        </div>
        <form className="add-option" onSubmit={this.handleAddOption}>
          <button className="button button--add-option">+</button>
          <input className="add-option__input" type='text' name='option' placeholder='Type here to get started' />
        </form>
        <hr />
      </div>
    );
  }
}