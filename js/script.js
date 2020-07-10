$(document).ready(function(){
  // Menu dropdown quando il mouse passa su solution
  $('#solution-dropdown').mouseenter(function(){
    $('.drop-down').addClass('show');
  });
  // Cliccando su solution apro e chiudo il menu dropdown
  $('#solution-dropdown').click(function(){
    $('.drop-down').toggleClass('show');
  });
  // Cliccando sul'icona burgher menu apro e chiudo il menu dropdown
  $('#burgher-menu').click(function(){
    $('.burgher-drop-down').toggleClass('show');
  });

});
