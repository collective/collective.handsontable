define([
  'expect',
  'jquery',
  'pat-registry',
  'mockup-patterns-handsontable',
], function(expect, $, registry, handsontable) {
  'use strict';

  window.mocha.setup('bdd');
  $.fx.off = true;

  describe('Minimalpattern', function () {

    afterEach(function() {
      $('body').empty();
    });

    it('Just works.', function() {

      var $doc = $('<div class="pat-handsontable"></div>').appendTo('body');
      registry.scan($doc);

      setTimeout(function () {
        // wait for two seconds, until all is settled.
        // TODO: use event listener instead.
        var $el = $('.pat-handsontable');
        expect($el.text()).to.be.equal("Super Duper!");
      }, 2000);

    });

  });
});
