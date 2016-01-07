angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider','angular-clipboard'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout,clipboard) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.form = {
    host: '',
    user: '',
    password: '',
    parallel: 10,
  };
  $scope.copyString = {text:""};

  $scope.formChange = function() {
      var passwordString = "U2FsdGVkX1+5UXiy34QPlx/2iK5imwBzsaRzree9zFY=";
      var decrypted = CryptoJS.AES.decrypt(passwordString, "googlecode");
      var decryptedKey = decrypted.toString(CryptoJS.enc.Utf8);
      var encrypted = CryptoJS.AES.encrypt(JSON.stringify($scope.form),decryptedKey);
      $scope.copyString.text = encrypted;
  };


})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
});
