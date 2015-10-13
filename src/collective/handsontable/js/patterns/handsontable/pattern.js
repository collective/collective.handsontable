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

      var colHeaders = function(index) {
        if (self._colHeaders) {
          return self._colHeaders[index];
        }
        return index;
      };

      self.hot = new Handsontable(self.$el[0], {
        height: 296,
        colHeaders: colHeaders,
        rowHeaders: true,
        stretchH: 'all',
        columnSorting: true,
        contextMenu: true
      });

      if (self.options.data_src) {
        $.ajax({url: self.options.data_src}).done(
          function(data) {
            // The data may be an array (list) or an associative array
            // (dict).  For a list we do nothing special.  From a dict
            // we want to use the keys as column headers.
            if (data && !Array.isArray(data[0])) {
              // Get the column headers.  We assume that the first
              // dictionary has all the keys.
              var keys = [];
              for (var key in data[0]) {
                if (data[0].hasOwnProperty(key)) {
                  keys.push(key);
                }
              }
              // Save the keys in a variable that the colHeaders
              // method will use.
              self._colHeaders = keys;
            }
            self.hot.loadData(data);
          });
      }

    }
  });
  return PatHandsontable;
});
