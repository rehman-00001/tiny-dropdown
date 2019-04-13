# tiny-dropdown -- React
A simple, customizable, light-weight dropdown component implemented with love using React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) & [Storybook](https://storybook.js.org/docs/guides/guide-react/).

## Usage

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
    const objectTypeOptions = [
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
`onSelect()` - A handler function which will be called when user selects any option from the dropdown menu. Input parameters: selectedOption, selectedIndex <br>
`visibleOptions` - Defines the number of options that are visible without the need of scrolling down. By default 8 items are visible.

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the app in the development mode.<br>
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build-storybook`

This will build the storybook configured in the Storybook directory into a static web app and place it inside the .out directory. Now you can deploy the content in the .out directory wherever you want.

### `npm serve .`

To test it locally.
For more details, visit this [link](https://storybook.js.org/docs/basics/exporting-storybook/).
