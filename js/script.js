$(document).ready(function(){
  // Menu dropdown quando il mouse passa su solution
  $('#solution-dropdown').mouseenter(function(){
    $('.drop-down').addClass('show');
  });
  // Cliccando su solution apro e chiudo il menu dropdown
  $('#solution-dropdown').click(function(){
    $('.drop-down').toggleClass('show');
  });
});
