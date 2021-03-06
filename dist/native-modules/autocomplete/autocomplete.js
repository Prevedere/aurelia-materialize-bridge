import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var MdAutoComplete = /** @class */ (function () {
    function MdAutoComplete(element) {
        this.element = element;
        this.input = null;
        this.values = {};
    }
    MdAutoComplete.prototype.valuesChanged = function () {
        if (this.instance) {
            this.instance.updateData(this.values);
        }
    };
    MdAutoComplete.prototype.bind = function () {
        // suppress initial change handler calls
    };
    MdAutoComplete.prototype.attached = function () {
        var _this = this;
        if (this.element.tagName.toLowerCase() === "input") {
            this.input = this.element;
        }
        else if (this.element.tagName.toLowerCase() === "md-input") {
            this.input = this.element.au["md-input"].viewModel.input;
        }
        else {
            throw new Error("md-autocomplete must be attached to either an input or md-input element");
        }
        var options = {
            data: this.values,
            limit: this.limit,
            minLength: this.minLength,
            onAutocomplete: function (text) {
                au.fireMaterializeEvent(_this.element, "autocomplete", { text: text });
            }
        };
        au.cleanOptions(options);
        this.instance = new M.Autocomplete(this.input, options);
    };
    MdAutoComplete.prototype.detached = function () {
        this.instance.destroy();
    };
    __decorate([
        au.ato.bindable.numberMd,
        __metadata("design:type", Number)
    ], MdAutoComplete.prototype, "limit", void 0);
    __decorate([
        au.ato.bindable.numberMd,
        __metadata("design:type", Number)
    ], MdAutoComplete.prototype, "minLength", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Object)
    ], MdAutoComplete.prototype, "values", void 0);
    MdAutoComplete = __decorate([
        au.customAttribute("md-autocomplete"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdAutoComplete);
    return MdAutoComplete;
}());
export { MdAutoComplete };
//# sourceMappingURL=autocomplete.js.map