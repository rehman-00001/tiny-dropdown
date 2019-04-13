import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TinyDropdown.css';

class TinyDropdown extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      showPanel: false,
      selectedOption: this.props.selectedIndex
        ? this.props.options[this.props.selectedIndex]
        : '',
      selectedIndex: this.props.selectedIndex,
      placeHolder: this.props.placeHolder
    };
    this.parentDiv = React.createRef();
  }

  initializeDefaults = () => {    
    this.parentDiv.current.style.setProperty('--visible-rows',  this.props.visibleOptions);
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleOutsideClick);
    this.initializeDefaults();
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  };

  handleOutsideClick = event => {
    if (!this.parentDiv.current.contains(event.target)) {
      // Click is outside. So close the dropdown menu
      this.setState({ showPanel: false });
    }
  };

  toggleDropdownMenu = () => {
    this.setState(prevState => ({ showPanel: !prevState.showPanel }));
  };

  /**
   * @description This method is called everytime when an option is
   * selected.
   * It updates the state and also calls the callback method: "onSelect"
   * that is passed as props to this component.
   * @param SelectedIndex - Index of the item in array which is selected by user.
   */
  onOptionsSelected = selectedIndex => {
    const selectedOption = this.props.options[selectedIndex];
    this.setState({ selectedOption, selectedIndex, showPanel: false });
    this.props.onSelect(selectedOption, selectedIndex);
  };

  /**
   * @description This method is called on every object in "options"
   * array before rendering them. If the options are of string type,
   * then those items can be rendered directly.
   *
   * But for complex object types, to decide which field in the object
   * is shown in the UI, this method is called and gets the value directly
   * and displayed in the UI.
   *
   * @param Option - One of the object in "options" array
   */
  getOptionsLabel = option => {
    if (typeof this.props.label === 'function') {
      return this.props.label(option);
    }
    return option;
  };

  /**
   * @description Same as function: "getOptionsLabel".
   * But this method is for the dropdown menu when the panel is in closed state.
   * If no option is selected, then the placeholder is displayed.
   */
  getSelectedOptionLabel = () => {
    return (
      this.getOptionsLabel(this.state.selectedOption) || this.state.placeHolder
    );
  };

  getDefaultKey = (option, index) => {
    return `${this.getOptionsLabel(option)}--${index}`;
  };

  render() {
    const dropdownMenu = (
      <button
        role="menu"
        className="dropdown-menu"
        onClick={this.toggleDropdownMenu}
      >
        <span className="dropdown-label dropdown-text">
          {this.getSelectedOptionLabel()}
        </span>
        <span className="arrow-down" />
      </button>
    );

    return (
      <div className="tiny-dropdown" ref={this.parentDiv}>
        {dropdownMenu}
        <ul
          className="dropdown-panel"
          style={{ display: this.state.showPanel ? 'inline-block' : 'none' }}
        >
          {this.props.options.map((option, index) => (
            <li
              role="option"
              aria-selected={this.state.selectedIndex === index}
              key={option.key || this.getDefaultKey(option, index)}
              className="dropdown-options dropdown-text"
              onClick={() => this.onOptionsSelected(index)}
            >
              {this.getOptionsLabel(option)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

TinyDropdown.propTypes = {
  /**
   * @description Placeholder text for the dropdown
   * By default it shows: "Select an option"
   */
  placeHolder: PropTypes.string,

  /**
   * @description An array of options for the dropdown menu.
   * Items can either be Strings or Objects. In case of objects,
   * the property "label" is mandatory.
   */
  options: PropTypes.array.isRequired,

  /**
   * @description A function which is executed on every object in "options"
   * array. Returned value is a string representing that object is
   * shown in the UI.
   */
  label: PropTypes.func,

  /**
   * @description If any option has to be selected initially, pass the index
   * of that option as "selectedIndex". It will be marked as selected.
   */
  selectedIndex: PropTypes.number,

  /**
   * @description A handler function which will be called when user selects
   * any option from the dropdown menu.
   * @params selectedOption, selectedIndex
   */
  onSelect: PropTypes.func.isRequired,

  /**
   * @description Defines the number of options that are visible without 
   * the need of scrolling down.
   * By default 8 items are visible.
   */
  visibleOptions: PropTypes.number
};

TinyDropdown.defaultProps = {
  placeHolder: 'Select an option',
  label: null,
  selectedIndex: null,
  visibleOptions: 8
};


export default TinyDropdown;
