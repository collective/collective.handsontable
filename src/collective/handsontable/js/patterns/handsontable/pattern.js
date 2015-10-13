/* Handsontable
 *
 * Options:
 *    text(string): The text, which should be shown.
 *
 * Documentation:
 *   # Handsontable
 *
 *   This is an example pattern, which does nothing but chaning the text of
 *   the selected element.
 *
 *   # Default text example
 *
 *   {{ example-1 }}
 *
 *   # Custom text example
 *
 *   {{ example-2 }}
 *
 * Example: example-1
 *    <div class="pat-handsontable"></div>
 *
 * Example: example-2
 *    <div class="pat-handsontable" data-pat-handsontable='{"text": "whats up?"}'></div>
 *
 */

define([
  'jquery',
  'pat-base',
  'handsontable'
], function ($, Base, Handsontable) {
  'use strict';

  var PatHandsontable = Base.extend({
    name: 'handsontable',
    parser: 'mockup',
    trigger: '.pat-handsontable',  // has to be exact like this: 'pat-' + patternname.
    defaults: {
      data_src: '@@json-data'
    },
    init: function () {
      var self = this;
      var hot = new Handsontable(self.$el[0], {
        height: 396,
        colHeaders: true,
        rowHeaders: true,
        stretchH: 'all',
        columnSorting: true,
        contextMenu: true
      });

      if (self.options.data_src){
        $.ajax({url: self.options.data_src}).done(
          function(data){
            hot.loadData(data);
          });
      }

    }
  });
  return PatHandsontable;
});
