import { storiesOf } from '@storybook/vue';
import LanguageOptions from '@/components/LanguageOptions.vue';

storiesOf( 'LanguageOptions', module )
	.addParameters( { component: LanguageOptions } )
	.add( 'default', () => ( {
		components: { LanguageOptions },
		template:
			`<div>
				<LanguageOptions />
			</div>`,
	} ) );
