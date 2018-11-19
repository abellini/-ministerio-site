(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./app.po"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app_po_1 = require("./app.po");
    describe('workspace-project App', function () {
        var page;
        beforeEach(function () {
            page = new app_po_1.AppPage();
        });
        it('should display welcome message', function () {
            page.navigateTo();
            expect(page.getParagraphText()).toEqual('Welcome to APM!');
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map