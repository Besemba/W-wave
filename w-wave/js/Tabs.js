document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.guests-accordion__btn').forEach(function(stepsLink) {
    stepsLink.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.guests-accordion__btn').forEach(function (btn) {
        btn.classList.remove('guests-accordion__btn_active')});
      e.currentTarget.classList.add('guests-accordion__btn_active');

      document.querySelectorAll('.guests__card').forEach(function(consultTabs) {
        consultTabs.classList.remove('guests__card_active')});
      
      document.querySelector(`[data-target="${path}"]`).classList.add('guests__card_active')

    })
  })
})    
