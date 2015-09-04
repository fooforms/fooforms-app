describe('SiteController', function () {
    beforeEach(module('fooforms'));

    /*
     * Get a new controller before each test is executed
     */
    var $controller = {};
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should be created successfully', function () {
        expect($controller).toBeDefined();
    });
});
