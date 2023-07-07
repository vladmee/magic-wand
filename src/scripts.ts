import magicWandHtml from 'bundle-text:./components/magic-wand/magic-wand.html';

document.addEventListener('DOMContentLoaded', function () {
  let magicWandPlaceholder = document.getElementById('magic-wand-component');
  if (magicWandPlaceholder) {
    magicWandPlaceholder.innerHTML = magicWandHtml;
  }
});
