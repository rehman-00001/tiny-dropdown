# tiny-dropdown -- React

A simple, customizable, light-weight dropdown component built with love using React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) & [Storybook](https://storybook.js.org/docs/guides/guide-react/).

Live demo here: https://rehman-00001.github.io/tiny-dropdown

## Installation

`npm install tiny-dropdown` <br>
or <br>
`yarn add tiny-dropdown` <br>

## Usage

`import TinyDropdown from 'tiny-dropdown';`

### Data type - Strings :

    const options = [ 'Google', 'Microsoft', 'Amazon', 'Facebook', 'Twitter', 'Uber' ];
    <TinyDropdown
        options={options}
        onSelect={(option, selectedIndex) => alert(option, selectedIndex)}
        placeHolder="Select a company"
        visibleOptions={4}
        selectedIndex={2}
    />

### Data type - Objects :

    const options = [
    {
      key: 'option-1',
      value: 'United States'
    },
    {
      key: 'option-2',
      value: 'Russia'
    },
    {
      key: 'option-3',
      value: 'India'
    },
    {
      key: 'option-4',
      value: 'China'
    }]

    <TinyDropdown
        options={options}
        label={option => option.value}
        onSelect={(option, selectedIndex) => alert(option, selectedIndex)}
        placeHolder="Select your country"
        visibleOptions={3}
        selectedIndex={2}
    />

## Properties

`placeHolder` - Placeholder text for the dropdown. By default it shows: "Select an option". <br>

`options` - An array of options for the dropdown menu. Items can either be Strings or Objects. In case of objects, the property **"label"** is **mandatory**. <br>

`label` - A function which is executed on every object in "options" array. Returned value is a string representing that object is shown in the UI. <br>

`selectedIndex` - If any option has to be selected initially, pass the index of that option as "selectedIndex". It will be marked as selected. <br>

`onSelect()` - A handler function which will be called when user selects any option from the dropdown menu. Input parameters: selectedOption, selectedIndex. <br>

`visibleOptions` - Defines the number of options that are visible without the need of scrolling down. By default 8 items are visible. <br>

`panelOnly` - If set to true, expanding the panel just hides the dropdown button. Only the options panel is displayed. <br>

`cssOverrides` - Specifies the styles to be overridden. It has 4 sub-properties:

```
  dropdownButton - Overrides the styles for dropdown itself.
  dropdownPanel - Overrides the styles for the dropdown popup panel.
  dropdownOption - Overrides the styles for every single option in the popup panel.
  dropdownOptionSelected - Overrides the styles for selected option in the popup panel.
```

## Features Planned

~~Add support to customize CSS styles~~ <br>
Fitler support for options <br>
Custom HTML for options <br>
Load data from ajax <br>
Selected element styles <br>
CSS animations & Much more to come <br>
