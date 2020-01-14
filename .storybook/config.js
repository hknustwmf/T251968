import { configure } from '@storybook/vue';
import { addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import './storybook-global.scss';

addDecorator( withA11y );

const req = require.context( '../stories', true, /\.js$/ );
configure(
	() => {
		req.keys().forEach( ( filename ) => req( filename ) );
	},
	module,
);
