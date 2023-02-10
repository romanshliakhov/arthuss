const sidePanel = document.querySelector('.side-panel');
const sidePanelClose = document.querySelector('.side-panel__close');

(function closePanel() {
  sidePanelClose.addEventListener('click', () => {
    sidePanel.style.marginTop = `-${sidePanel.offsetHeight}px`;
  })
})();





