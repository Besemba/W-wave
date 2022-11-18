$(".podcasts__podcast-table").each(function() {
  let more = $(this).find(".podcasts__load-more-btn");
  let hide = $(this).find(".podcasts__card_hidden");
  hide.hide();
  more.click(function() {
      hide.slideToggle();
      more.text(more.text() == "Скрыть" ? "Ещё подкасты" : "Скрыть");
  });
});

// $(".podcasts__podcast-table").each(function() {
//   let more = $(this).find(".podcasts__load-more-btn");
//   let hide = $(this).find(".podcasts__card_hidden-320");
//   hide.hide();
//   more.click(function() {
//       hide.slideToggle();
//       more.text(more.text() == "Скрыть" ? "Ещё подкасты" : "Скрыть");
//   });
// });