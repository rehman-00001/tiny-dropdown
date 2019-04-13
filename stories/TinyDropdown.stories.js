import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { stringTypeOptions, objectTypeOptions } from './data';

import TinyDropdown from '../src/Components/TinyDropdown/TinyDropdown';
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
      </div>
    );
  })
  .add('PlainDropdown - With custom visible rows', () => {
    return (
      <div style={backgroundStyles} className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={objectTypeOptions}
          label={option => option.value}          
          onSelect={option => action("clicked")}
          visibleOptions={3}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
      </div>
    );
  });
