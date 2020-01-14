import { addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import './storybook-global.scss';

addDecorator( withA11y );
