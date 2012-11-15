(function () {
  "use strict";

  $('body').hide();

  $(document).ready(function () {
    $('body').fadeIn(1000);
  });

  window.onload = function () {
    $('body').fadeIn(1000);
  };
  window.onunload = function(){};

  $('a').on('click', function (evt) {
    evt.preventDefault();

    var link = $(this).attr('href');
    $('body').fadeOut(1000, function () {
      window.location = link;
    });
  });

}());
