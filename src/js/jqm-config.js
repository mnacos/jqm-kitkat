(function() {
  $(document).bind("mobileinit", function() {
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.touchOverflowEnabled = true;
    $.mobile.transitionFallbacks.slidefade = 'none';
    return $.extend($.mobile.zoom, {
      locked: true,
      enabled: false
    });
  });
}).call(this);
