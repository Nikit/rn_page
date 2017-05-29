(function ($) {

/**
 * Attach the machine-readable name form element behavior.
 */
Drupal.behaviors.custom = {
  attach: function (context, settings) {
    $("select").once(function() {
      $(this).selectmenu();
    });
  }
};

})(jQuery);
