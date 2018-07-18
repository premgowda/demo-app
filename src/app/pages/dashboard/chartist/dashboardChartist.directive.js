/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardChartist', dashboardChartist);

  /** @ngInject */
  function dashboardChartist() {
    return {
      restrict: 'E',
      controller: 'chartistCtrl',
      templateUrl: 'app/pages/dashboard/chartist/chartist.html'
    };
  }
})();