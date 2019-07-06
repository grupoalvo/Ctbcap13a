$('p').each(function() {
  var sentences = $(this)
    .text()
    .replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
            '<span class="sentence">$1</span>$2')
  $(this).html(sentences);
});

$('.sentence').click(function() {
  if ($(this).hasClass('highlight')) {
    $(this).toggleClass('highlight delete').mouseout(function() {
      $(this).removeClass('delete')
    })
  }
  else {
    $(this).toggleClass('highlight new').mouseout(function() {
      $(this).removeClass('new')
    })
  }
})