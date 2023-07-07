import magicWandHtml from 'bundle-text:./components/magic-wand/magic-wand.html';

window.onload = () => {
  let magicWandPlaceholder = document.getElementById('magic-wand-component');
  if (magicWandPlaceholder) {
    magicWandPlaceholder.innerHTML = magicWandHtml;
  }
};
