$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}

document.querySelector('#save_lincoln')
.addEventListener('click', saveLincoln)

function saveLincoln(event) {
  // document.querySelector('#foreground').style.visibility = 'hidden'
  for (opacity = 1; opacity > 0; opacity = opacity - 0.1)
  {
      setTimeout(function(){document.getElementById('#foreground').style.opacity = opacity;},100)
  }
}
