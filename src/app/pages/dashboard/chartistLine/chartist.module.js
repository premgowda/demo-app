/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartistLine', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.chartistLine', {
          url: '/chartist',
          templateUrl: 'app/pages/dashboard/chartistLine/chartist.html',
          title: 'Chartist',
          sidebarMeta: {
            order: 100,
          },
        });
  }

})();