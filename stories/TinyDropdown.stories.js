import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { stringTypeOptions, objectTypeOptions } from './data';
import './TinyDropdown.stories.css';

import TinyDropdown from '../src/Components/TinyDropdown/TinyDropdown';
// import TinyDropdown from '../dist/TinyDropdown';
import '../src/Components/TinyDropdown/TinyDropdown.css';

storiesOf('TinyDropdown', module)
  .add('PlainDropdown - Options type: String', () => {
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={stringTypeOptions}
          onSelect={option => action('clicked')}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
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
  })
  .add('PlainDropdown - Options type: Object', () => {
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={objectTypeOptions}
          label={option => option.value}
          onSelect={option => action('clicked')}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <section className="code-block">
          <code className="new-line">{'const options = [ '}</code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-1', value: 'United States' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-2', value: 'Russia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-3', value: 'India' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-4', value: 'China' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-5', value: 'United Kingdom' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-6', value: 'Germany' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-7', value: 'France' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-8', value: 'Japan' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-9', value: 'Israel' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-10', value: 'Saudi arabia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-11', value: 'United Arab Emirates' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-12', value: 'Other' } "}
          </code>
          <code className="new-line">{' ]; '}</code>
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
              {'label={option => option.value}'}
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
  })
  .add('PlainDropdown - With custom placeholder', () => {
    return (
      <div className="dropdown">
        <label>Select something : </label>
        <TinyDropdown
          options={objectTypeOptions}
          label={option => option.value}
          placeHolder="Select your country"
          onSelect={option => action('clicked')}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <section className="code-block">
          <code className="new-line">{'const options = [ '}</code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-1', value: 'United States' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-2', value: 'Russia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-3', value: 'India' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-4', value: 'China' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-5', value: 'United Kingdom' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-6', value: 'Germany' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-7', value: 'France' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-8', value: 'Japan' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-9', value: 'Israel' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-10', value: 'Saudi arabia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-11', value: 'United Arab Emirates' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-12', value: 'Other' } "}
          </code>
          <code className="new-line">{' ]; '}</code>
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
              {'label={option => option.value}'}
            </code>
            <code className="new-line">
              {'\u00A0'}
              {'\u00A0'}
              {
                'onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}'
              }
            </code>
            <code className="new-line">
              {'\u00A0'}
              {'\u00A0'}
              {'placeHolder="Select your country"'}
            </code>
            <code className="new-line">{'/>'}</code>
          </div>
        </section>
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
          onSelect={option => action('clicked')}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <section className="code-block">
          <code className="new-line">{'const options = [ '}</code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-1', value: 'United States' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-2', value: 'Russia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-3', value: 'India' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-4', value: 'China' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-5', value: 'United Kingdom' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-6', value: 'Germany' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-7', value: 'France' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-8', value: 'Japan' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-9', value: 'Israel' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-10', value: 'Saudi arabia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-11', value: 'United Arab Emirates' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-12', value: 'Other' } "}
          </code>
          <code className="new-line">{' ]; '}</code>
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
              {'label={option => option.value}'}
            </code>
            <code className="new-line">
              {'\u00A0'}
              {'\u00A0'}
              {
                'onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}'
              }
            </code>
            <code className="new-line">
              {'\u00A0'}
              {'\u00A0'}
              {'selectedIndex={2}'}
            </code>
            <code className="new-line">{'/>'}</code>
          </div>
        </section>
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
          onSelect={option => action('clicked')}
          visibleOptions={4}
        />
        <p className="dropdown-text">
          This is a dummy paragraph added to see how the dropdown behaves when
          it is expanded. Ideally the paragraph should not be pushed down on
          expanding the panel. Seems like this dropdown works properly.
        </p>
        <h3>Usage</h3>
        <section className="code-block">
          <code className="new-line">{'const options = [ '}</code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-1', value: 'United States' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-2', value: 'Russia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-3', value: 'India' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-4', value: 'China' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-5', value: 'United Kingdom' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-6', value: 'Germany' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-7', value: 'France' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-8', value: 'Japan' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-9', value: 'Israel' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-10', value: 'Saudi arabia' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-11', value: 'United Arab Emirates' }, "}
          </code>
          <code className="new-line">
            {'\u00A0'}
            {'\u00A0'}
            {"{ key: 'option-12', value: 'Other' } "}
          </code>
          <code className="new-line">{' ]; '}</code>
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
              {'label={option => option.value}'}
            </code>
            <code className="new-line">
              {'\u00A0'}
              {'\u00A0'}
              {
                'onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}'
              }
            </code>
            <code className="new-line">
              {'\u00A0'}
              {'\u00A0'}
              {'visibleOptions={4}'}
            </code>
            <code className="new-line">{'/>'}</code>
          </div>
        </section>
      </div>
    );
  });
