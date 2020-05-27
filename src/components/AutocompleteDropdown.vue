<template>
	<div class="dropdown" :class="{ open: open }">
		<input type="text" v-model="searchText" @input="searchChanged">
		<a class="toggle" @mousedown.prevent @click="setOpen(!open)">
			<span class="arrow-up">▲</span>
			<span class="arrow-down">▼</span>
		</a>
		<ul class="suggestion-list">
			<li
				v-for="suggestion in matches"
				:key="suggestion.code"
				@mousedown.prevent
				@click="suggestionSelected(suggestion)"
			>
				{{ suggestion.name }}
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	data() {
		return {
			searchText: '',
			selectedOption: null,
			open: false,
		};
	},
	props: {
		options: {
			type: Array,
			required: true,
		},
	},
	methods: {
		setOpen( isOpen ) {
			this.open = isOpen;
		},
		searchChanged() {
			if ( !this.open ) {
				this.open = true;
			}
		},
		suggestionSelected( suggestion ) {
			this.open = false;
			this.searchText = suggestion.code;
			this.$emit( 'input', suggestion.code );
		},
		updateComponentWithValue( newValue ) {
			if ( Object.values( this.options ).indexOf( newValue ) > -1 ) {
				// Find the matching text for the supplied option value
				for ( const text in this.options ) {
					if ( Object.prototype.hasOwnProperty.call( this.options, text ) ) {
						if ( this.options[ text ] === newValue ) {
							this.searchText = text;
						}
					}
				}
			}
		},
	},
	mounted() {
		this.updateComponentWithValue( this.value );
	},
	watch: {
		value( newValue ) {
			this.updateComponentWithValue( newValue );
		},
	},
	computed: {
		matches() {
			return this.options.filter( ( option ) => {
				return option.name.toUpperCase().match( this.searchText.toUpperCase() );
			} );
		},
	},
};
</script>

<style scoped>
.dropdown {
	display: inline-block;
	position: relative;
}

.suggestion-list {
	background-color: rgba( 255, 255, 255, 0.95 );
	border: 1px solid #ddd;
	list-style: none;
	display: block;
	margin: 0;
	padding: 0;
	width: 100%;
	overflow: hidden;
	position: absolute;
	top: 30px;
	left: 0;
	z-index: 2;
}

.dropdown.open .suggestion-list {
	display: block;
}

.dropdown .suggestion-list {
	display: none;
}

.toggle .arrow-up {
	display: none;
}

.open .toggle .arrow-up {
	display: inline-block;
}

.open .toggle .arrow-down {
	display: none;
}

.suggestion-list li {
	cursor: pointer;
}

.suggestion-list li:hover {
	color: #fff;
	background-color: #ccc;
}
</style>
