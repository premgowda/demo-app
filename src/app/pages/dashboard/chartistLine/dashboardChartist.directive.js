/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardChartistline', dashboardChartistLine);

  /** @ngInject */
  function dashboardChartistLine() {
    return {
      restrict: 'E',
      controller: 'chartistLineCtrl',
      templateUrl: 'app/pages/dashboard/chartistLine/chartist.html'
    };
  }
})();