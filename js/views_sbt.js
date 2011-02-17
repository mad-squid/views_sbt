// $Id$
(function ($) {

  Drupal.views_sbt = Drupal.views_sbt || {};

  Drupal.behaviors.views_sbt = {
    attach: function(context, settings) {

      $.each(Drupal.settings.views_sbt, function(i, form_id) {
        $('form#'+form_id+':not(.views-sbt-processed)', context).each(function() {
          var self = this;
          $('a.views-sbt-tab-link', self).click(function() {
						// set sort by
						$('select[name=sort_by] option:contains("'+ $(this).text() +'")').attr('selected', 'selected');
            // set sort order
            $('select[name=sort_order]', self).val(
							$(this).attr('id').substr(21)
						);
            $('input:submit.form-submit', self).click();
            return false;
          });
          $(self).addClass('views_sbt-processed');
        });
      });


    }
  };

})(jQuery);
