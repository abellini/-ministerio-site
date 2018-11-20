(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "protractor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var protractor_1 = require("protractor");
    var AppPage = /** @class */ (function () {
        function AppPage() {
        }
        AppPage.prototype.navigateTo = function () {
            return protractor_1.browser.get('/');
        };
        AppPage.prototype.getParagraphText = function () {
            return protractor_1.element(protractor_1.by.css('pm-root h1')).getText();
        };
        return AppPage;
    }());
    exports.AppPage = AppPage;
});
//# sourceMappingURL=app.po.js.map