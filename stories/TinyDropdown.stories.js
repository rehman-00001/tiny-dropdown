import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { stringTypeOptions, objectTypeOptions } from './data';

import TinyDropdown from '../src/Components/TinyDropdown/TinyDropdown';
// import TinyDropdown from '../dist/TinyDropdown';
import '../src/Components/TinyDropdown/TinyDropdown.css';

storiesOf('TinyDropdown', module)
  .add('PlainDropdown - Options type: String', () => {  
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown options={stringTypeOptions} onSelect={option => action('clicked')} />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <code>
          {"const options = [ 'Google', 'Microsoft', 'Amazon', 'Facebook', 'Twitter', 'Uber' ];"}<br></br><br></br>
          {"<TinyDropdown"}<br></br>
          {'\u00A0'}{'\u00A0'}{"options={options}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"}<br></br>
          {"/>"}<br></br>
        </code>
      </div>
    );
  })
  .add('PlainDropdown - Options type: Object', () => {
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={objectTypeOptions}
          label={option => option.value}
          onSelect={option => action("clicked")}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <code>
          {"const options = [ "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-1', value: 'United States' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-2', value: 'Russia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-3', value: 'India' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-4', value: 'China' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-5', value: 'United Kingdom' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-6', value: 'Germany' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-7', value: 'France' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-8', value: 'Japan' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-9', value: 'Israel' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-10', value: 'Saudi arabia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-11', value: 'United Arab Emirates' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-12', value: 'Other' } "}<br></br>
          {" ]; "}<br></br><br></br>
          {"<TinyDropdown"}<br></br>
          {'\u00A0'}{'\u00A0'}{"options={objectTypeOptions}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"label={option => option.value}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"}<br></br>
          {"/>"}<br></br>
        </code>

      </div>
    );
  })
  .add('PlainDropdown - With custom placeholder', () => {
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={objectTypeOptions}
          label={option => option.value}
          placeHolder="Select your country"
          onSelect={option => action("clicked")}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <code>
          {"const options = [ "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-1', value: 'United States' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-2', value: 'Russia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-3', value: 'India' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-4', value: 'China' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-5', value: 'United Kingdom' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-6', value: 'Germany' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-7', value: 'France' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-8', value: 'Japan' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-9', value: 'Israel' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-10', value: 'Saudi arabia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-11', value: 'United Arab Emirates' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-12', value: 'Other' } "}<br></br>
          {" ]; "}<br></br><br></br>
          {"<TinyDropdown"}<br></br>
          {'\u00A0'}{'\u00A0'}{"options={options}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"label={option => option.value}"}<br></br>          
          {'\u00A0'}{'\u00A0'}{"placeHolder=\"Select your country\""}<br></br>
          {'\u00A0'}{'\u00A0'}{"onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"}<br></br>
          {"/>"}<br></br>
        </code>
      </div>
    );
  })
  .add('PlainDropdown - With pre-selected option', () => {
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={objectTypeOptions}
          label={option => option.value}
          selectedIndex={2}
          onSelect={option => action("clicked")}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <code>
          {"const options = [ "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-1', value: 'United States' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-2', value: 'Russia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-3', value: 'India' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-4', value: 'China' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-5', value: 'United Kingdom' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-6', value: 'Germany' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-7', value: 'France' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-8', value: 'Japan' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-9', value: 'Israel' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-10', value: 'Saudi arabia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-11', value: 'United Arab Emirates' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-12', value: 'Other' } "}<br></br>
          {" ]; "}<br></br><br></br>
          {"<TinyDropdown"}<br></br>
          {'\u00A0'}{'\u00A0'}{"options={options}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"label={option => option.value}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"selectedIndex={2}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"}<br></br>
          {"/>"}<br></br>
        </code>
      </div>
    );
  })
  .add('PlainDropdown - With custom visible rows', () => {
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={objectTypeOptions}
          label={option => option.value}          
          onSelect={option => action("clicked")}
          visibleOptions={4}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <code>
          {"const options = [ "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-1', value: 'United States' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-2', value: 'Russia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-3', value: 'India' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-4', value: 'China' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-5', value: 'United Kingdom' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-6', value: 'Germany' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-7', value: 'France' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-8', value: 'Japan' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-9', value: 'Israel' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-10', value: 'Saudi arabia' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-11', value: 'United Arab Emirates' }, "}<br></br>
          {'\u00A0'}{'\u00A0'}{"{ key: 'option-12', value: 'Other' } "}<br></br>
          {" ]; "}<br></br><br></br>
          {"<TinyDropdown"}<br></br>
          {'\u00A0'}{'\u00A0'}{"options={options}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"label={option => option.value}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"}<br></br>
          {'\u00A0'}{'\u00A0'}{"visibleOptions={4}"}<br></br>
          {"/>"}<br></br>
        </code>
      </div>
    );
  });
