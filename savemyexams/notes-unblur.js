javascript:(function(){
  document.head.insertAdjacentHTML("beforeend", `<style>
    [class*="revision-notes_blur"] {
      max-height: none !important;
      overflow: visible !important;
    }
    [class*="revision-notes_blur"]::after {
      content: none !important;
      background: none !important;
    }
  </style>`);
  document.querySelector('[class^="LimitWall_signUpWrapper"]')?.remove();
})();
