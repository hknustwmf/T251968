import LanguageOptions from '@/components/LanguageOptions.vue';
import { shallowMount } from '@vue/test-utils';

describe( 'LanguageOptions', () => {
	it( 'renders correctly', () => {
		const wrapper = shallowMount( LanguageOptions );
		expect( wrapper.element ).toMatchSnapshot();
	} );

	it( 'mounted correctly', () => {
		const wrapper = shallowMount( LanguageOptions );
		expect( wrapper.isVueInstance() ).toBe( true );
	} );
} );
