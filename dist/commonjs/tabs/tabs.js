'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _commonEvents = require('../common/events');

var _commonAttributeManager = require('../common/attributeManager');

var MdTabs = (function () {
  function MdTabs(element) {
    _classCallCheck(this, _MdTabs);

    this.element = element;
    this.attributeManager = new _commonAttributeManager.AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new _commonAttributeManager.AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this.tabAttributeManagers.push(setter);
    });

    $(this.element).tabs();

    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.addEventListener('click', _this.fireTabSelectedEvent.bind(_this));
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this2 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this2.fireTabSelectedEvent.bind(_this2));
    });
  };

  MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
    var href = $(e.target).attr('href');
    _commonEvents.fireMaterializeEvent(this.element, 'selected', href);
  };

  var _MdTabs = MdTabs;
  MdTabs = _aureliaFramework.inject(Element)(MdTabs) || MdTabs;
  MdTabs = _aureliaFramework.customAttribute('md-tabs')(MdTabs) || MdTabs;
  return MdTabs;
})();

exports.MdTabs = MdTabs;