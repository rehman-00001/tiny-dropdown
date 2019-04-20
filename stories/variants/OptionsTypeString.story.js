import React from 'react';
import TinyDropdown from '../../src/Components/TinyDropdown/TinyDropdown';
import '../TinyDropdown.stories.css';
// import TinyDropdown from '../../dist/TinyDropdown';
import { stringTypeOptions } from '../data';

export default () => {
  return (
    <div className="dropdown">
      <label>Select something : </label>
      <TinyDropdown
        options={stringTypeOptions}
        onSelect={option => action('clicked')}
      />
      <p className="dropdown-text">
        This is a dummy paragraph added to see how the dropdown behaves when it
        is expanded. Ideally the paragraph should not be pushed down on
        expanding the panel. Seems like this dropdown works properly.
      </p>
      <h3>Usage</h3>
      <section className="code-block">
        <code>
          const options = [ 'Google', 'Microsoft', 'Amazon', 'Facebook',
          'Twitter', 'Uber' ];
        </code>
        <div className="markup">
          <code className="new-line">{'<TinyDropdown'}</code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {'options={options}'}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {
              'onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}'
            }
          </code>
          <code className="new-line">{'/>'}</code>
        </div>
      </section>
    </div>
  );
};
