const element = document.querySelector('#select-author');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  silent: true,
  position: 'bottom',
  renderSelectedChoices: 'always',
});

