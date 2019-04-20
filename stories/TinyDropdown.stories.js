import { storiesOf } from '@storybook/react';

import WithCustomPlaceholderStory from './variants/WithCustomPlaceholder.story';
import OptionsTypeObjectStory from './variants/OptionsTypeObject.story';
import OptionsTypeStringStory from './variants/OptionsTypeString.story';
import WithPreselectedOptionStory from './variants/WithPreselectedOption.story';
import WithCustomVisibleRowsStory from './variants/WithCustomVisibleRows.story';
import WithCustomStylesStory from './variants/WithCustomStyles.story';

storiesOf('TinyDropdown', module)
  .add('Options type: String', OptionsTypeStringStory)
  .add('Options type: Object', OptionsTypeObjectStory)
  .add('With custom placeholder', WithCustomPlaceholderStory)
  .add('With pre-selected option', WithPreselectedOptionStory)
  .add('With custom visible rows', WithCustomVisibleRowsStory)
  .add('With custom css styles', WithCustomStylesStory);
