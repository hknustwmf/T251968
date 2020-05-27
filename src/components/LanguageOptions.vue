<template>
	<div class="filter">
		<label for="autocomplete-dropdown">Select a language:</label>
		<autocomplete-dropdown
			id="autocomplete-dropdown"
			:options="languageOptions"
			v-model="selectedLanguage"
		/>
	</div>
</template>

<script>
import availableLanguages from '@/langs';
import AutocompleteDropdown from '@/components/AutocompleteDropdown';

export default {
	components: {
		'autocomplete-dropdown': AutocompleteDropdown,
	},
	data() {
		return {
			selectedLanguage: '',
			languageOptions: [],
		};
	},
	methods: {
		getLanguageList() {
			this.languageOptions = availableLanguages.languages;
		},
	},
	mounted() {
		this.getLanguageList();
	},
};
</script>

<style scoped>
.filters {
	width: 800px;
	margin: 0 auto;
	border: 2px solid;
}

.filter {
	text-align: left;
}

.result {
	margin-top: 30px;
	text-align: left;
}

label {
	display: block;
}
</style>
