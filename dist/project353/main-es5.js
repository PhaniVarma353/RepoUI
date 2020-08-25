function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, ProjComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjComponents", function () {
      return ProjComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _myaccount_mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./myaccount/mylogin/mylogin.component */
    "./src/app/myaccount/mylogin/mylogin.component.ts");
    /* harmony import */


    var _myaccount_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myaccount/logout/logout.component */
    "./src/app/myaccount/logout/logout.component.ts");
    /* harmony import */


    var _myaccount_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./myaccount/forget-password/forget-password.component */
    "./src/app/myaccount/forget-password/forget-password.component.ts");
    /* harmony import */


    var _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mybusiness/mybusiness.component */
    "./src/app/mybusiness/mybusiness.component.ts");
    /* harmony import */


    var _myhomeview_myhomeview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myhomeview/myhomeview.component */
    "./src/app/myhomeview/myhomeview.component.ts");
    /* harmony import */


    var _homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./homelayout/homelayout.component */
    "./src/app/homelayout/homelayout.component.ts");
    /* harmony import */


    var _myaccount_manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./myaccount/manage-roles/manage-roles.component */
    "./src/app/myaccount/manage-roles/manage-roles.component.ts");
    /* harmony import */


    var _myaccount_managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./myaccount/managerole-admin/managerole-admin.component */
    "./src/app/myaccount/managerole-admin/managerole-admin.component.ts");
    /* harmony import */


    var _myaccount_managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./myaccount/managerole-manager/managerole-manager.component */
    "./src/app/myaccount/managerole-manager/managerole-manager.component.ts");
    /* harmony import */


    var _myaccount_managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./myaccount/managerole-user/managerole-user.component */
    "./src/app/myaccount/managerole-user/managerole-user.component.ts");
    /* harmony import */


    var _shared_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/registrationform/registrationform.component */
    "./src/app/shared/registrationform/registrationform.component.ts");
    /* harmony import */


    var _application_details_application_aboutus_application_aboutus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./application-details/application-aboutus/application-aboutus.component */
    "./src/app/application-details/application-aboutus/application-aboutus.component.ts");
    /* harmony import */


    var _application_details_application_contactus_application_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./application-details/application-contactus/application-contactus.component */
    "./src/app/application-details/application-contactus/application-contactus.component.ts");
    /* harmony import */


    var _application_details_application_services_application_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./application-details/application-services/application-services.component */
    "./src/app/application-details/application-services/application-services.component.ts");
    /* harmony import */


    var _application_details_application_clients_application_clients_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./application-details/application-clients/application-clients.component */
    "./src/app/application-details/application-clients/application-clients.component.ts");
    /* harmony import */


    var _header_two_details_movies_movies_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./header-two-details/movies/movies.component */
    "./src/app/header-two-details/movies/movies.component.ts");
    /* harmony import */


    var _header_two_details_sports_sports_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./header-two-details/sports/sports.component */
    "./src/app/header-two-details/sports/sports.component.ts");
    /* harmony import */


    var _header_two_details_events_events_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./header-two-details/events/events.component */
    "./src/app/header-two-details/events/events.component.ts");
    /* harmony import */


    var _header_two_details_plays_plays_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./header-two-details/plays/plays.component */
    "./src/app/header-two-details/plays/plays.component.ts");
    /* harmony import */


    var _header_two_details_activities_activities_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./header-two-details/activities/activities.component */
    "./src/app/header-two-details/activities/activities.component.ts");
    /* harmony import */


    var _myaccount_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./myaccount/myaccount/myaccount.component */
    "./src/app/myaccount/myaccount/myaccount.component.ts");
    /* harmony import */


    var _myaccount_account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./myaccount/account-details/settings/settings.component */
    "./src/app/myaccount/account-details/settings/settings.component.ts");
    /* harmony import */


    var _myaccount_account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./myaccount/account-details/faq/faq.component */
    "./src/app/myaccount/account-details/faq/faq.component.ts");
    /* harmony import */


    var _myaccount_account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./myaccount/account-details/helpandsupport/helpandsupport.component */
    "./src/app/myaccount/account-details/helpandsupport/helpandsupport.component.ts");
    /* harmony import */


    var _common_headerone_headerone_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./common/headerone/headerone.component */
    "./src/app/common/headerone/headerone.component.ts");
    /* harmony import */


    var _common_header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./common/header/header.component */
    "./src/app/common/header/header.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./common/footer/footer.component */
    "./src/app/common/footer/footer.component.ts");
    /* harmony import */


    var _common_imgcaurousel_imgcaurousel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./common/imgcaurousel/imgcaurousel.component */
    "./src/app/common/imgcaurousel/imgcaurousel.component.ts");
    /* harmony import */


    var _common_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./common/headertwo/headertwo.component */
    "./src/app/common/headertwo/headertwo.component.ts");
    /* harmony import */


    var _myaccount_managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./myaccount/managerole-superadmin/managerole-superadmin.component */
    "./src/app/myaccount/managerole-superadmin/managerole-superadmin.component.ts");
    /* harmony import */


    var _myaccount_projectproperties_projectproperties_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./myaccount/projectproperties/projectproperties.component */
    "./src/app/myaccount/projectproperties/projectproperties.component.ts");

    var routes = [{
      path: '',
      component: _homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_7__["HomelayoutComponent"]
    }, {
      path: 'main',
      component: _homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_7__["HomelayoutComponent"]
    }, {
      path: 'login',
      component: _myaccount_mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_2__["MyloginComponent"]
    }, {
      path: 'aboutus',
      component: _application_details_application_aboutus_application_aboutus_component__WEBPACK_IMPORTED_MODULE_13__["ApplicationAboutusComponent"]
    }, {
      path: 'contactus',
      component: _application_details_application_contactus_application_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationContactusComponent"]
    }, {
      path: 'services',
      component: _application_details_application_services_application_services_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationServicesComponent"]
    }, {
      path: 'clients',
      component: _application_details_application_clients_application_clients_component__WEBPACK_IMPORTED_MODULE_16__["ApplicationClientsComponent"]
    }, {
      path: 'activities',
      component: _header_two_details_activities_activities_component__WEBPACK_IMPORTED_MODULE_21__["ActivitiesComponent"]
    }, {
      path: 'events',
      component: _header_two_details_events_events_component__WEBPACK_IMPORTED_MODULE_19__["EventsComponent"]
    }, {
      path: 'movies',
      component: _header_two_details_movies_movies_component__WEBPACK_IMPORTED_MODULE_17__["MoviesComponent"]
    }, {
      path: 'plays',
      component: _header_two_details_plays_plays_component__WEBPACK_IMPORTED_MODULE_20__["PlaysComponent"]
    }, {
      path: 'sports',
      component: _header_two_details_sports_sports_component__WEBPACK_IMPORTED_MODULE_18__["SportsComponent"]
    }, {
      path: 'mybusiness/:id',
      component: _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_5__["MybusinessComponent"]
    }, {
      path: 'myhomeview/:id',
      component: _myhomeview_myhomeview_component__WEBPACK_IMPORTED_MODULE_6__["MyhomeviewComponent"]
    }, {
      path: 'mybusiness/:id/manageroles',
      component: _myaccount_manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_8__["ManageRolesComponent"],
      children: [{
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      }, {
        path: 'superadmin',
        component: _myaccount_managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_31__["ManageroleSuperadminComponent"]
      }, {
        path: 'admin',
        component: _myaccount_managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_9__["ManageroleAdminComponent"]
      }, {
        path: 'manager',
        component: _myaccount_managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_10__["ManageroleManagerComponent"]
      }, {
        path: 'user',
        component: _myaccount_managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_11__["ManageroleUserComponent"]
      }]
    }, {
      path: 'mybusiness/:id/manageproject',
      component: _myaccount_projectproperties_projectproperties_component__WEBPACK_IMPORTED_MODULE_32__["ProjectpropertiesComponent"]
    }, {
      path: 'myaccount/:id/manageaccount/:tab',
      component: _myaccount_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_22__["MyaccountComponent"],
      children: [{
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      }, {
        path: 'settings',
        component: _myaccount_account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"]
      }, {
        path: 'helpandsupport',
        component: _myaccount_account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_25__["HelpandsupportComponent"]
      }, {
        path: 'faq',
        component: _myaccount_account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_24__["FaqComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          declarations: []
        }]
      }], null, null);
    })();

    var ProjComponents = [_common_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"], _myaccount_mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_2__["MyloginComponent"], _myaccount_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"], _myaccount_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordComponent"], _common_imgcaurousel_imgcaurousel_component__WEBPACK_IMPORTED_MODULE_29__["ImgcaurouselComponent"], _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_5__["MybusinessComponent"], _myhomeview_myhomeview_component__WEBPACK_IMPORTED_MODULE_6__["MyhomeviewComponent"], _common_headerone_headerone_component__WEBPACK_IMPORTED_MODULE_26__["HeaderoneComponent"], _common_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_30__["HeadertwoComponent"], _homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_7__["HomelayoutComponent"], _myaccount_manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_8__["ManageRolesComponent"], _myaccount_managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_9__["ManageroleAdminComponent"], _myaccount_managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_10__["ManageroleManagerComponent"], _myaccount_managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_11__["ManageroleUserComponent"], _shared_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationformComponent"], _application_details_application_aboutus_application_aboutus_component__WEBPACK_IMPORTED_MODULE_13__["ApplicationAboutusComponent"], _application_details_application_contactus_application_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationContactusComponent"], _application_details_application_services_application_services_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationServicesComponent"], _application_details_application_clients_application_clients_component__WEBPACK_IMPORTED_MODULE_16__["ApplicationClientsComponent"], _header_two_details_movies_movies_component__WEBPACK_IMPORTED_MODULE_17__["MoviesComponent"], _header_two_details_sports_sports_component__WEBPACK_IMPORTED_MODULE_18__["SportsComponent"], _header_two_details_events_events_component__WEBPACK_IMPORTED_MODULE_19__["EventsComponent"], _header_two_details_plays_plays_component__WEBPACK_IMPORTED_MODULE_20__["PlaysComponent"], _header_two_details_activities_activities_component__WEBPACK_IMPORTED_MODULE_21__["ActivitiesComponent"], _myaccount_account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"], _myaccount_account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_25__["HelpandsupportComponent"], _myaccount_account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_24__["FaqComponent"], _myaccount_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_22__["MyaccountComponent"], _myaccount_managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_31__["ManageroleSuperadminComponent"], _myaccount_projectproperties_projectproperties_component__WEBPACK_IMPORTED_MODULE_32__["ProjectpropertiesComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.routes.ts":
  /*!*****************************************!*\
    !*** ./src/app/app.component.routes.ts ***!
    \*****************************************/

  /*! exports provided: Project353Routes */

  /***/
  function srcAppAppComponentRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project353Routes", function () {
      return Project353Routes;
    });

    var Project353Routes = {
      main: 'main',
      home: 'home',
      login: 'login',
      aboutus: 'aboutus',
      contactus: 'contactus',
      services: 'services',
      clients: 'clients',
      myhomeview: 'myhomeview',
      mybusiness: 'mybusiness',
      myaccount: 'myaccount',
      manageroles: 'manageroles',
      manageProject: 'manageproject',
      manageaccount: 'manageaccount',
      roles_admin: 'admin',
      roles_manager: 'manager',
      roles_user: 'user',
      activities: 'activities',
      events: 'events',
      movies: 'movies',
      plays: 'plays',
      sports: 'sports'
    };
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _common_headerone_headerone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common/headerone/headerone.component */
    "./src/app/common/headerone/headerone.component.ts");
    /* harmony import */


    var _common_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/headertwo/headertwo.component */
    "./src/app/common/headertwo/headertwo.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./common/footer/footer.component */
    "./src/app/common/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'project353';
      }

      _createClass(AppComponent, [{
        key: "goToPage",
        value: function goToPage() {
          this.router.navigate(['/']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler() {
            return ctx.goToPage();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 5,
      vars: 0,
      consts: [[1, "main-content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-headertwo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_common_headerone_headerone_component__WEBPACK_IMPORTED_MODULE_2__["HeaderoneComponent"], _common_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_3__["HeadertwoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: [".main-content[_ngcontent-%COMP%] {\r\n  margin-top: 125px !important;\r\n  margin-left: 15px !important;\r\n}\r\n\r\n.progress-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 8px;\r\n  background: #ccc;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n  height: 8px;\r\n  background: #4caf50;\r\n  width: 0%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTI1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xyXG4gIHdpZHRoOiAwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        goToPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/login-service */
    "./src/app/services/login-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_project_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/project-properties-service */
    "./src/app/services/project-properties-service.ts");
    /* harmony import */


    var _services_contact_us_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/contact-us-service */
    "./src/app/services/contact-us-service.ts");
    /* harmony import */


    var _services_address_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/address-service */
    "./src/app/services/address-service.ts");
    /* harmony import */


    var _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./common/header/header.component */
    "./src/app/common/header/header.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./common/footer/footer.component */
    "./src/app/common/footer/footer.component.ts");
    /* harmony import */


    var _myaccount_mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./myaccount/mylogin/mylogin.component */
    "./src/app/myaccount/mylogin/mylogin.component.ts");
    /* harmony import */


    var _myaccount_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./myaccount/logout/logout.component */
    "./src/app/myaccount/logout/logout.component.ts");
    /* harmony import */


    var _myaccount_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./myaccount/forget-password/forget-password.component */
    "./src/app/myaccount/forget-password/forget-password.component.ts");
    /* harmony import */


    var _common_imgcaurousel_imgcaurousel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./common/imgcaurousel/imgcaurousel.component */
    "./src/app/common/imgcaurousel/imgcaurousel.component.ts");
    /* harmony import */


    var _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./mybusiness/mybusiness.component */
    "./src/app/mybusiness/mybusiness.component.ts");
    /* harmony import */


    var _myhomeview_myhomeview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./myhomeview/myhomeview.component */
    "./src/app/myhomeview/myhomeview.component.ts");
    /* harmony import */


    var _common_headerone_headerone_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./common/headerone/headerone.component */
    "./src/app/common/headerone/headerone.component.ts");
    /* harmony import */


    var _common_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./common/headertwo/headertwo.component */
    "./src/app/common/headertwo/headertwo.component.ts");
    /* harmony import */


    var _homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./homelayout/homelayout.component */
    "./src/app/homelayout/homelayout.component.ts");
    /* harmony import */


    var _myaccount_manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./myaccount/manage-roles/manage-roles.component */
    "./src/app/myaccount/manage-roles/manage-roles.component.ts");
    /* harmony import */


    var _myaccount_managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./myaccount/managerole-admin/managerole-admin.component */
    "./src/app/myaccount/managerole-admin/managerole-admin.component.ts");
    /* harmony import */


    var _myaccount_managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./myaccount/managerole-manager/managerole-manager.component */
    "./src/app/myaccount/managerole-manager/managerole-manager.component.ts");
    /* harmony import */


    var _myaccount_managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./myaccount/managerole-user/managerole-user.component */
    "./src/app/myaccount/managerole-user/managerole-user.component.ts");
    /* harmony import */


    var _shared_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./shared/registrationform/registrationform.component */
    "./src/app/shared/registrationform/registrationform.component.ts");
    /* harmony import */


    var _application_details_application_aboutus_application_aboutus_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./application-details/application-aboutus/application-aboutus.component */
    "./src/app/application-details/application-aboutus/application-aboutus.component.ts");
    /* harmony import */


    var _application_details_application_contactus_application_contactus_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./application-details/application-contactus/application-contactus.component */
    "./src/app/application-details/application-contactus/application-contactus.component.ts");
    /* harmony import */


    var _application_details_application_services_application_services_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./application-details/application-services/application-services.component */
    "./src/app/application-details/application-services/application-services.component.ts");
    /* harmony import */


    var _application_details_application_clients_application_clients_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./application-details/application-clients/application-clients.component */
    "./src/app/application-details/application-clients/application-clients.component.ts");
    /* harmony import */


    var _header_two_details_movies_movies_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./header-two-details/movies/movies.component */
    "./src/app/header-two-details/movies/movies.component.ts");
    /* harmony import */


    var _header_two_details_sports_sports_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./header-two-details/sports/sports.component */
    "./src/app/header-two-details/sports/sports.component.ts");
    /* harmony import */


    var _header_two_details_events_events_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./header-two-details/events/events.component */
    "./src/app/header-two-details/events/events.component.ts");
    /* harmony import */


    var _header_two_details_plays_plays_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./header-two-details/plays/plays.component */
    "./src/app/header-two-details/plays/plays.component.ts");
    /* harmony import */


    var _header_two_details_activities_activities_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./header-two-details/activities/activities.component */
    "./src/app/header-two-details/activities/activities.component.ts");
    /* harmony import */


    var _myaccount_account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./myaccount/account-details/settings/settings.component */
    "./src/app/myaccount/account-details/settings/settings.component.ts");
    /* harmony import */


    var _myaccount_account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./myaccount/account-details/helpandsupport/helpandsupport.component */
    "./src/app/myaccount/account-details/helpandsupport/helpandsupport.component.ts");
    /* harmony import */


    var _myaccount_account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./myaccount/account-details/faq/faq.component */
    "./src/app/myaccount/account-details/faq/faq.component.ts");
    /* harmony import */


    var _myaccount_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./myaccount/myaccount/myaccount.component */
    "./src/app/myaccount/myaccount/myaccount.component.ts");
    /* harmony import */


    var _myaccount_managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./myaccount/managerole-superadmin/managerole-superadmin.component */
    "./src/app/myaccount/managerole-superadmin/managerole-superadmin.component.ts");
    /* harmony import */


    var _myaccount_projectproperties_projectproperties_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./myaccount/projectproperties/projectproperties.component */
    "./src/app/myaccount/projectproperties/projectproperties.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _services_project_properties_service__WEBPACK_IMPORTED_MODULE_11__["ProjectPropertiesService"], _services_contact_us_service__WEBPACK_IMPORTED_MODULE_12__["ContactusService"], _services_address_service__WEBPACK_IMPORTED_MODULE_13__["AddressService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _myaccount_mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_16__["MyloginComponent"], _myaccount_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"], _myaccount_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgetPasswordComponent"], _common_imgcaurousel_imgcaurousel_component__WEBPACK_IMPORTED_MODULE_19__["ImgcaurouselComponent"], _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_20__["MybusinessComponent"], _myhomeview_myhomeview_component__WEBPACK_IMPORTED_MODULE_21__["MyhomeviewComponent"], _common_headerone_headerone_component__WEBPACK_IMPORTED_MODULE_22__["HeaderoneComponent"], _common_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_23__["HeadertwoComponent"], _homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_24__["HomelayoutComponent"], _myaccount_manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_25__["ManageRolesComponent"], _myaccount_managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_26__["ManageroleAdminComponent"], _myaccount_managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_27__["ManageroleManagerComponent"], _myaccount_managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_28__["ManageroleUserComponent"], _shared_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_29__["RegistrationformComponent"], _application_details_application_aboutus_application_aboutus_component__WEBPACK_IMPORTED_MODULE_30__["ApplicationAboutusComponent"], _application_details_application_contactus_application_contactus_component__WEBPACK_IMPORTED_MODULE_31__["ApplicationContactusComponent"], _application_details_application_services_application_services_component__WEBPACK_IMPORTED_MODULE_32__["ApplicationServicesComponent"], _application_details_application_clients_application_clients_component__WEBPACK_IMPORTED_MODULE_33__["ApplicationClientsComponent"], _header_two_details_movies_movies_component__WEBPACK_IMPORTED_MODULE_34__["MoviesComponent"], _header_two_details_sports_sports_component__WEBPACK_IMPORTED_MODULE_35__["SportsComponent"], _header_two_details_events_events_component__WEBPACK_IMPORTED_MODULE_36__["EventsComponent"], _header_two_details_plays_plays_component__WEBPACK_IMPORTED_MODULE_37__["PlaysComponent"], _header_two_details_activities_activities_component__WEBPACK_IMPORTED_MODULE_38__["ActivitiesComponent"], _myaccount_account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_39__["SettingsComponent"], _myaccount_account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_40__["HelpandsupportComponent"], _myaccount_account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_41__["FaqComponent"], _myaccount_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_42__["MyaccountComponent"], _myaccount_managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_43__["ManageroleSuperadminComponent"], _myaccount_projectproperties_projectproperties_component__WEBPACK_IMPORTED_MODULE_44__["ProjectpropertiesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        exports: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _myaccount_mylogin_mylogin_component__WEBPACK_IMPORTED_MODULE_16__["MyloginComponent"], _myaccount_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"], _myaccount_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgetPasswordComponent"], _common_imgcaurousel_imgcaurousel_component__WEBPACK_IMPORTED_MODULE_19__["ImgcaurouselComponent"], _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_20__["MybusinessComponent"], _myhomeview_myhomeview_component__WEBPACK_IMPORTED_MODULE_21__["MyhomeviewComponent"], _common_headerone_headerone_component__WEBPACK_IMPORTED_MODULE_22__["HeaderoneComponent"], _common_headertwo_headertwo_component__WEBPACK_IMPORTED_MODULE_23__["HeadertwoComponent"], _homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_24__["HomelayoutComponent"], _myaccount_manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_25__["ManageRolesComponent"], _myaccount_managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_26__["ManageroleAdminComponent"], _myaccount_managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_27__["ManageroleManagerComponent"], _myaccount_managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_28__["ManageroleUserComponent"], _shared_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_29__["RegistrationformComponent"], _application_details_application_aboutus_application_aboutus_component__WEBPACK_IMPORTED_MODULE_30__["ApplicationAboutusComponent"], _application_details_application_contactus_application_contactus_component__WEBPACK_IMPORTED_MODULE_31__["ApplicationContactusComponent"], _application_details_application_services_application_services_component__WEBPACK_IMPORTED_MODULE_32__["ApplicationServicesComponent"], _application_details_application_clients_application_clients_component__WEBPACK_IMPORTED_MODULE_33__["ApplicationClientsComponent"], _header_two_details_movies_movies_component__WEBPACK_IMPORTED_MODULE_34__["MoviesComponent"], _header_two_details_sports_sports_component__WEBPACK_IMPORTED_MODULE_35__["SportsComponent"], _header_two_details_events_events_component__WEBPACK_IMPORTED_MODULE_36__["EventsComponent"], _header_two_details_plays_plays_component__WEBPACK_IMPORTED_MODULE_37__["PlaysComponent"], _header_two_details_activities_activities_component__WEBPACK_IMPORTED_MODULE_38__["ActivitiesComponent"], _myaccount_account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_39__["SettingsComponent"], _myaccount_account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_40__["HelpandsupportComponent"], _myaccount_account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_41__["FaqComponent"], _myaccount_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_42__["MyaccountComponent"], _myaccount_managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_43__["ManageroleSuperadminComponent"], _myaccount_projectproperties_projectproperties_component__WEBPACK_IMPORTED_MODULE_44__["ProjectpropertiesComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjComponents"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _services_project_properties_service__WEBPACK_IMPORTED_MODULE_11__["ProjectPropertiesService"], _services_contact_us_service__WEBPACK_IMPORTED_MODULE_12__["ContactusService"], _services_address_service__WEBPACK_IMPORTED_MODULE_13__["AddressService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjComponents"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/application-details/application-aboutus/application-aboutus.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/application-details/application-aboutus/application-aboutus.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ApplicationAboutusComponent */

  /***/
  function srcAppApplicationDetailsApplicationAboutusApplicationAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationAboutusComponent", function () {
      return ApplicationAboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApplicationAboutusComponent = /*#__PURE__*/function () {
      function ApplicationAboutusComponent() {
        _classCallCheck(this, ApplicationAboutusComponent);
      }

      _createClass(ApplicationAboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplicationAboutusComponent;
    }();

    ApplicationAboutusComponent.ɵfac = function ApplicationAboutusComponent_Factory(t) {
      return new (t || ApplicationAboutusComponent)();
    };

    ApplicationAboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationAboutusComponent,
      selectors: [["app-application-aboutus"]],
      decls: 2,
      vars: 0,
      template: function ApplicationAboutusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "application-aboutus works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLWRldGFpbHMvYXBwbGljYXRpb24tYWJvdXR1cy9hcHBsaWNhdGlvbi1hYm91dHVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationAboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application-aboutus',
          templateUrl: './application-aboutus.component.html',
          styleUrls: ['./application-aboutus.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/application-details/application-clients/application-clients.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/application-details/application-clients/application-clients.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ApplicationClientsComponent */

  /***/
  function srcAppApplicationDetailsApplicationClientsApplicationClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationClientsComponent", function () {
      return ApplicationClientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApplicationClientsComponent = /*#__PURE__*/function () {
      function ApplicationClientsComponent() {
        _classCallCheck(this, ApplicationClientsComponent);
      }

      _createClass(ApplicationClientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplicationClientsComponent;
    }();

    ApplicationClientsComponent.ɵfac = function ApplicationClientsComponent_Factory(t) {
      return new (t || ApplicationClientsComponent)();
    };

    ApplicationClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationClientsComponent,
      selectors: [["app-application-clients"]],
      decls: 2,
      vars: 0,
      template: function ApplicationClientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "application-clients works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLWRldGFpbHMvYXBwbGljYXRpb24tY2xpZW50cy9hcHBsaWNhdGlvbi1jbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application-clients',
          templateUrl: './application-clients.component.html',
          styleUrls: ['./application-clients.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/application-details/application-contactus/application-contactus.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/application-details/application-contactus/application-contactus.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ApplicationContactusComponent */

  /***/
  function srcAppApplicationDetailsApplicationContactusApplicationContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationContactusComponent", function () {
      return ApplicationContactusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contact-us-service */
    "./src/app/services/contact-us-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/loginutilityservice */
    "./src/app/shared/services/loginutilityservice.ts");
    /* harmony import */


    var src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/project-properties-service */
    "./src/app/services/project-properties-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ApplicationContactusComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationContactusComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationContactusComponent_div_21_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contactusFormControl.fullName.errors.required);
      }
    }

    function ApplicationContactusComponent_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationContactusComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationContactusComponent_div_27_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contactusFormControl.email.errors.required);
      }
    }

    function ApplicationContactusComponent_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationContactusComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationContactusComponent_div_33_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.contactusFormControl.phoneNumber.errors.required);
      }
    }

    function ApplicationContactusComponent_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationContactusComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationContactusComponent_div_39_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.contactusFormControl.message.errors.required);
      }
    }

    function ApplicationContactusComponent_button_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationContactusComponent_button_41_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send Message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ApplicationContactusComponent = /*#__PURE__*/function () {
      function ApplicationContactusComponent(_contactusService, formBuilder, toastr, _loginUtilityService, _projectPropertiesService) {
        _classCallCheck(this, ApplicationContactusComponent);

        this._contactusService = _contactusService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this._loginUtilityService = _loginUtilityService;
        this._projectPropertiesService = _projectPropertiesService;
        this.showSpinner = false;
        this.contactusSubmitted = false;
        this.userId = 0;
      }

      _createClass(ApplicationContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.contactus = {};
          this.getAllRequests();

          this._loginUtilityService.getUserLoginData$().subscribe(function (userLoginData) {
            if (userLoginData && userLoginData.userRole) {
              _this.userId = userLoginData.uid;
            }
          });

          this.createContactusForm();
        }
      }, {
        key: "createContactusForm",
        value: function createContactusForm() {
          this.contactusForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "getAllRequests",
        value: function getAllRequests() {
          var _this2 = this;

          this.showSpinner = true;

          this._projectPropertiesService.getProjectProperties().subscribe(function (data) {
            debugger;
            console.log(data);
            _this2.imageUrl = data.propertiesMap["CONTACT_US_PAGE_PNG"][0];
            _this2.showSpinner = false;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          this.contactusSubmitted = true;
          this.showSpinner = true;

          if (this.contactusForm.invalid) {
            setTimeout(function () {
              return _this3.toastr.warning('You must fill all the Required fields', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          debugger;
          this.contactus.id = 0;
          this.contactus.userId = this.userId;

          this._contactusService.saveNotes(this.contactus).subscribe(function (data) {
            if (data !== null && data.status) {
              debugger;
              console.log(data);
              console.log("Success");
              setTimeout(function () {
                return _this3.toastr.success('Thank you for filling out the Form', 'Contact us', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
              _this3.contactus = {};
              _this3.showSpinner = false;
              _this3.contactusSubmitted = false;
            } else {
              console.log('Failed');
              _this3.showSpinner = false;
              setTimeout(function () {
                return _this3.toastr.error('Submit Failed - ' + data.errors[0].errorMessage, 'Contact us', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
            }
          }, function (error) {
            console.log('Failed');
            _this3.showSpinner = false;
            setTimeout(function () {
              return _this3.toastr.error('Failed - unknown error', 'Contact us', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });
        }
      }, {
        key: "contactusFormControl",
        get: function get() {
          return this.contactusForm.controls;
        }
      }]);

      return ApplicationContactusComponent;
    }();

    ApplicationContactusComponent.ɵfac = function ApplicationContactusComponent_Factory(t) {
      return new (t || ApplicationContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_4__["LoginUtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_5__["ProjectPropertiesService"]));
    };

    ApplicationContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationContactusComponent,
      selectors: [["app-application-contactus"]],
      decls: 42,
      vars: 23,
      consts: [[1, ""], [2, "text-align", "center"], [1, "fa", "fa-fw", "fa-envelope"], [1, "row"], [1, "col-sm-7", "mt-3"], ["alt", "Girl in a jacket", "width", "735", "height", "500", 3, "src"], [1, "col-sm-5"], ["novalidate", "", 3, "formGroup"], [1, "modal-body"], [1, "form-group", "col-sm-12"], ["for", "name"], ["type", "text", "formControlName", "fullName", "id", "fullName", "placeholder", "Full Name", "name", "fullName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "email", "id", "email", "placeholder", "Email", "name", "email", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "form-group", "col-12"], ["type", "text", "formControlName", "phoneNumber", "id", "phoneNumber", "placeholder", "Phone Number", "name", "phoneNumber", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "message"], ["formControlName", "message", "id", "message", "placeholder", "Message", "name", "message", "rows", "3", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "modal-footer"], ["type", "submit", "class", "btn btn-primary text-center", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 3, "click"]],
      template: function ApplicationContactusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Drop a Line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Don't hesitate to contact us.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Swing by for a cup of coffee, or leave us a message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Full Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationContactusComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.contactus.fullName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ApplicationContactusComponent_div_21_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationContactusComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.contactus.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ApplicationContactusComponent_div_27_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationContactusComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.contactus.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ApplicationContactusComponent_div_33_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Message:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationContactusComponent_Template_textarea_ngModelChange_38_listener($event) {
            return ctx.contactus.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ApplicationContactusComponent_div_39_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ApplicationContactusComponent_button_41_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactusForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactus.fullName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.contactusSubmitted && ctx.contactusFormControl.fullName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactusSubmitted && ctx.contactusFormControl.fullName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactus.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.contactusSubmitted && ctx.contactusFormControl.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactusSubmitted && ctx.contactusFormControl.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactus.phoneNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.contactusSubmitted && ctx.contactusFormControl.phoneNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactusSubmitted && ctx.contactusFormControl.phoneNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactus.message)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.contactusSubmitted && ctx.contactusFormControl.message.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactusSubmitted && ctx.contactusFormControl.message.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  \r\n  \r\n  input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    margin-top: 6px;\r\n    margin-bottom: 16px;\r\n    resize: vertical;\r\n  }\r\n  \r\n  input[type=submit][_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background-color: #45a049;\r\n  }\r\n  \r\n  \r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  .column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    margin-top: 6px;\r\n    padding: 20px;\r\n  }\r\n  \r\n  \r\n  \r\n  .row[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  \r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .column[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin-top: 0;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24tZGV0YWlscy9hcHBsaWNhdGlvbi1jb250YWN0dXMvYXBwbGljYXRpb24tY29udGFjdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUEsaUJBQWlCOztFQUNqQjtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUEsd0NBQXdDOztFQUN4QztJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztFQUVBLG9EQUFvRDs7RUFDcEQ7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUEsbUNBQW1DOztFQUNuQztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBLCtJQUErSTs7RUFDL0k7SUFDRTtNQUNFLFdBQVc7TUFDWCxhQUFhO0lBQ2Y7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLWRldGFpbHMvYXBwbGljYXRpb24tY29udGFjdHVzL2FwcGxpY2F0aW9uLWNvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSBpbnB1dHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgY29udGFpbmVyL2NvbnRhY3Qgc2VjdGlvbiAqL1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0d28gY29sdW1ucyB0aGF0IGZsb2F0IG5leHQgdG8gZWFjaG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application-contactus',
          templateUrl: './application-contactus.component.html',
          styleUrls: ['./application-contactus.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactusService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_4__["LoginUtilityService"]
        }, {
          type: src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_5__["ProjectPropertiesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/application-details/application-services/application-services.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/application-details/application-services/application-services.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ApplicationServicesComponent */

  /***/
  function srcAppApplicationDetailsApplicationServicesApplicationServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationServicesComponent", function () {
      return ApplicationServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApplicationServicesComponent = /*#__PURE__*/function () {
      function ApplicationServicesComponent() {
        _classCallCheck(this, ApplicationServicesComponent);
      }

      _createClass(ApplicationServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplicationServicesComponent;
    }();

    ApplicationServicesComponent.ɵfac = function ApplicationServicesComponent_Factory(t) {
      return new (t || ApplicationServicesComponent)();
    };

    ApplicationServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationServicesComponent,
      selectors: [["app-application-services"]],
      decls: 2,
      vars: 0,
      template: function ApplicationServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "application-services works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLWRldGFpbHMvYXBwbGljYXRpb24tc2VydmljZXMvYXBwbGljYXRpb24tc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application-services',
          templateUrl: './application-services.component.html',
          styleUrls: ['./application-services.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCommonFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "page-footer", "font-small", "lighten-3", "pt-4", 2, "position", "relative"], [1, "footer-copyright", "text-center", "py-3"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright 2020 \xA9 Project@353. All rights Reserved ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.footer-main[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n\r\n.footer-first[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  border-top: 2px solid #e45641;\r\n  border-bottom: 2px solid #e45641;\r\n  background: #3d687c;\r\n}\r\n\r\n.footer-second[_ngcontent-%COMP%] {\r\n  background: #212c43;\r\n}\r\n\r\n.footer-second[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #5a6f95;\r\n  padding-top: 10px;\r\n}\r\n\r\n.footer-second[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #5a6f95;\r\n}\r\n\r\n.footer-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  border: 2px solid #fff;\r\n  border-radius: 4px;\r\n  padding: 10px 13px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.footer-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n  border-color: #fff;\r\n  background: rgba(255, 255, 255, 0.05);\r\n  transform: scale(0.93);\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 360px) {\r\n  .footer-second[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 15px !important;\r\n    margin-bottom: 2px !important;\r\n    text-align: center;\r\n  }\r\n  .footer-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding: 7px 8px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUlyQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlci1tYWluIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5mb290ZXItZmlyc3Qge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNDU2NDE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNDU2NDE7XHJcbiAgYmFja2dyb3VuZDogIzNkNjg3YztcclxufVxyXG4uZm9vdGVyLXNlY29uZCB7XHJcbiAgYmFja2dyb3VuZDogIzIxMmM0MztcclxufVxyXG4uZm9vdGVyLXNlY29uZCBwIHtcclxuICBjb2xvcjogIzVhNmY5NTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uZm9vdGVyLXNlY29uZCBhIHtcclxuICBjb2xvcjogIzVhNmY5NTtcclxufVxyXG4uZm9vdGVyLWljb24gaSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweCAxM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5mb290ZXItaWNvbiBpOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45Myk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTMpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTMpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Myk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAuZm9vdGVyLXNlY29uZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb290ZXItaWNvbiBpIHtcclxuICAgIHBhZGRpbmc6IDdweCA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 34,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-sm", "bg-info", "navbar-dark", "header-fixed-top"], ["href", "#", 1, "navbar-brand", "logo-pad-0", "img-magnifier-container"], ["src", "https://picsum.photos/285/200/?image=0&random", "alt", "Cinque Terre", 1, "logo-img"], ["href", "#", 1, "navbar-brand", "justify-content-between", "d-none", "d-md-flex", "flex-row", "pos-logo"], [1, "navbar-nav", "justify-content-between", "d-none", "d-md-flex", "flex-row", "pos-right"], [1, "nav-item", "d-none", "d-md-block"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown", "d-none", "d-md-block"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", "aria-hidden", "true", 1, "fas", "fa-user", "nav-link", 2, "font-size", "20px"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-left", "login-dropdown"], [1, "nav-item"], ["href", "#", 1, "navbar-brand"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PROJECT 353");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Dropdown link ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Link 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Link 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".double-nav[_ngcontent-%COMP%]   .breadcrumb-dn[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.side-nav.wide.slim[_ngcontent-%COMP%]   .sn-ad-avatar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.header-fixed-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1032;\r\n}\r\n.pos-right[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 0px;\r\n    padding-right: 50px\r\n}\r\n.pos-logo[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 536px !important;\r\n    \r\n}\r\n.dropdown[_ngcontent-%COMP%]:hover > .login-dropdown[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n.logo-img[_ngcontent-%COMP%] {    \r\n    height: 45px;\r\n    width: 70px;\r\n  }\r\n.logo-pad-0[_ngcontent-%COMP%] {\r\n      padding: 0px !important;\r\n  }\r\n.img-magnifier-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n.img-magnifier-glass[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border: 3px solid #000;\r\n    border-radius: 50%;\r\n    cursor: none;\r\n    \r\n    width: 100px;\r\n    height: 100px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBRUE7TUFDSSx1QkFBdUI7RUFDM0I7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3VibGUtbmF2IC5icmVhZGNydW1iLWRuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaWRlLW5hdi53aWRlLnNsaW0gLnNuLWFkLWF2YXRhci13cmFwcGVyIGEgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5oZWFkZXItZml4ZWQtdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAzMjtcclxufVxyXG4ucG9zLXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHhcclxufVxyXG5cclxuLnBvcy1sb2dve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTM2cHggIWltcG9ydGFudDtcclxuICAgIC8qIHJpZ2h0OiAwOyAqL1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXI+LmxvZ2luLWRyb3Bkb3due1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubG9nby1pbWcgeyAgICBcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28tcGFkLTAge1xyXG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbWctbWFnbmlmaWVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWctbWFnbmlmaWVyLWdsYXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IG5vbmU7XHJcbiAgICAvKlNldCB0aGUgc2l6ZSBvZiB0aGUgbWFnbmlmaWVyIGdsYXNzOiovXHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/headerone/headerone.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/common/headerone/headerone.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderoneComponent */

  /***/
  function srcAppCommonHeaderoneHeaderoneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderoneComponent", function () {
      return HeaderoneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.component.routes */
    "./src/app/app.component.routes.ts");
    /* harmony import */


    var src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/userroleenum */
    "./src/app/shared/userroleenum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/loginutilityservice */
    "./src/app/shared/services/loginutilityservice.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderoneComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.navigateToLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderoneComponent_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_button_21_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.openAccountSideNav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx_r1.fullName, "");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "isDisabled": a0
      };
    };

    function HeaderoneComponent_a_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_a_41_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.manageUsers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx_r2.loginStatus || !ctx_r2.accessManageRoles));
      }
    }

    function HeaderoneComponent_a_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_a_42_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.manageProject();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx_r3.loginStatus || !ctx_r3.accessManageProject));
      }
    }

    var HeaderoneComponent = /*#__PURE__*/function () {
      function HeaderoneComponent(_router, _activatedRoute, _loginUtilityService) {
        _classCallCheck(this, HeaderoneComponent);

        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._loginUtilityService = _loginUtilityService;
        this.loginStatus = false;
        this.accessManageRoles = false;
        this.accessManageProject = false;
      }

      _createClass(HeaderoneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sideNavOpen = false;
          this.accountSideNavOpen = false;
          this.subscriptions = this._loginUtilityService.getUserLoginData$().subscribe(function (userLoginData) {
            if (userLoginData && userLoginData.userRole) {
              _this4.userRole = userLoginData.userRole;
              _this4.userRoleName = userLoginData.userName;
              _this4.fullName = userLoginData.fullName;
              _this4.loginStatus = true;
              _this4.accessManageProject = false;
              _this4.accessManageRoles = false;

              if (_this4.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_2__["UserRoleType"].SUPERADMIN || _this4.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_2__["UserRoleType"].ADMIN || _this4.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_2__["UserRoleType"].MANAGER) {
                _this4.accessManageRoles = true;
              }

              if (_this4.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_2__["UserRoleType"].SUPERADMIN || _this4.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_2__["UserRoleType"].ADMIN) {
                _this4.accessManageProject = true;
              }
            } else {
              _this4.loginStatus = false;
            }
          });
        }
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].login], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToHome",
        value: function navigateToHome() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].main], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToAboutUs",
        value: function navigateToAboutUs() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].aboutus], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToContactUs",
        value: function navigateToContactUs() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].contactus], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToServices",
        value: function navigateToServices() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].services], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToClients",
        value: function navigateToClients() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].clients], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToMain",
        value: function navigateToMain() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].main], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToSettings",
        value: function navigateToSettings(tab) {
          this.closeAccountNav();

          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].myaccount + '/' + this.userRole + '/' + src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].manageaccount + '/' + tab + '/' + 'settings'], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToHelpAndSupport",
        value: function navigateToHelpAndSupport(tab) {
          this.closeAccountNav();

          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].myaccount + '/' + this.userRole + '/' + src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].manageaccount + '/' + tab + '/' + 'helpandsupport'], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "openNav",
        value: function openNav() {
          if (this.sideNavOpen === false) {
            this.closeAccountNav();
            document.getElementById("mySidenav").style.width = "250px";
            this.sideNavOpen = true;
            this.accountSideNavOpen = false;
          } else if (this.sideNavOpen === true) {
            this.closeNav();
          }
        }
      }, {
        key: "openAccountSideNav",
        value: function openAccountSideNav() {
          if (this.accountSideNavOpen === false) {
            this.closeNav();
            document.getElementById("accountSidenav").style.width = "250px";
            this.accountSideNavOpen = true;
            this.sideNavOpen = false;
          } else if (this.accountSideNavOpen === true) {
            this.closeAccountNav();
          }
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
          this.sideNavOpen = false;
          this.accountSideNavOpen = false;
        }
      }, {
        key: "closeAccountNav",
        value: function closeAccountNav() {
          document.getElementById("accountSidenav").style.width = "0";
          this.accountSideNavOpen = false;
          this.sideNavOpen = false;
        }
      }, {
        key: "manageUsers",
        value: function manageUsers() {
          if (this.loginStatus) {
            this.closeNav();

            this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].mybusiness + '/' + 0 + '/' + src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].manageroles], {
              relativeTo: this._activatedRoute
            });
          }
        }
      }, {
        key: "manageProject",
        value: function manageProject() {
          if (this.loginStatus) {
            this.closeNav();

            this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].mybusiness + '/' + 0 + '/' + src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].manageProject], {
              relativeTo: this._activatedRoute
            });
          }
        }
      }, {
        key: "signOut",
        value: function signOut() {
          // this._loginUtilityService.clearUserLoginData();
          // this._loginUtilityService.setUserLoginData(null);
          this.loginStatus = false;
          this.closeAccountNav();

          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].login], {
            relativeTo: this._activatedRoute
          });
        }
      }]);

      return HeaderoneComponent;
    }();

    HeaderoneComponent.ɵfac = function HeaderoneComponent_Factory(t) {
      return new (t || HeaderoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_4__["LoginUtilityService"]));
    };

    HeaderoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderoneComponent,
      selectors: [["app-headerone"]],
      decls: 52,
      vars: 7,
      consts: [[1, "navbar", "navbar-expand-sm|md|lg|xl", "header", "bg-info", "justify-content-between", "fixed-top"], [1, "logo", "text-white", 3, "click"], ["src", "https://picsum.photos/285/200/?image=0&random", "alt", "Cinque Terre", 1, "logo-img"], [1, "form-inline", "header-search"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2", "mr-md-2", "mr-lg-2", "mr-xl-2"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", "text-white", "btn-border-0"], [1, "navbar", "navbar-expand-sm|md|lg|xl", "header-right", "text-white"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", "text-white", "btn-border-0", 3, "click"], [1, "fa", "fa-fw", "fa-home"], [1, "fa", "fa-fw", "fa-search", "text-white"], [1, "fa", "fa-fw", "fa-envelope"], ["class", "btn btn-outline-success my-2 my-sm-0 text-white btn-border-0 user-logo-text", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success my-2 my-sm-0 text-white btn-border-0 user-logo-text", "data-placement", "top", 3, "title", "click", 4, "ngIf"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-left", "user-dropdown"], ["href", "#", 1, "dropdown-item"], [1, "side-nav-opt"], ["id", "mySidenav", 1, "sidenav"], [3, "click"], [3, "ngClass", "click"], ["href", "javascript:void(0)", 3, "ngClass", "click", 4, "ngIf"], ["id", "accountSidenav", 1, "sidenav"], [1, "text-center"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", "text-white", "btn-border-0", "user-logo-text", 3, "click"], [1, "fa", "fa-fw", "fa-user", "text-white"], ["data-placement", "top", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", "text-white", "btn-border-0", "user-logo-text", 3, "title", "click"], ["id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", "aria-hidden", "true", 1, "fa", "fa-fw", "fa-user", "text-white", 2, "font-size", "20px", "width", "24%"], ["href", "javascript:void(0)", 3, "ngClass", "click"]],
      template: function HeaderoneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_a_click_2_listener() {
            return ctx.navigateToAboutUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 353");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_button_click_11_listener() {
            return ctx.navigateToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_button_click_14_listener() {
            return ctx.navigateToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " FAQ's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_button_click_17_listener() {
            return ctx.navigateToContactUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderoneComponent_button_20_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderoneComponent_button_21_Template, 3, 2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Link 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_button_click_29_listener() {
            return ctx.openNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u2630 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_a_click_33_listener() {
            return ctx.navigateToAboutUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_a_click_35_listener() {
            return ctx.navigateToServices();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_a_click_37_listener() {
            return ctx.navigateToClients();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_a_click_39_listener() {
            return ctx.navigateToContactUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HeaderoneComponent_a_41_Template, 2, 3, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HeaderoneComponent_a_42_Template, 2, 3, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_a_click_44_listener() {
            return ctx.navigateToHelpAndSupport(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Help & Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_a_click_46_listener() {
            return ctx.navigateToSettings(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderoneComponent_Template_button_click_49_listener() {
            return ctx.signOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sign out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.accessManageRoles));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginStatus && ctx.accessManageRoles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginStatus && ctx.accessManageProject);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  \r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  padding: 0px;\r\n  width: auto;\r\n}\r\n\r\n.header-fixed-top[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0px;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1032;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  line-height: 25px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #28a745;\r\n  color: black;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n}\r\n\r\n.header-right[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n.header-search[_ngcontent-%COMP%] {\r\n  left: 205px !important;\r\n  position: absolute;\r\n}\r\n\r\n.btn-border-0[_ngcontent-%COMP%] {\r\n  border: 0px;\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n  width: 35px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n\r\n  .header-right[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #111;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 100px;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 8px 8px 8px 32px;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  color: #818181;\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-top: 80px;\r\n  \r\n}\r\n\r\n.side-nav-opt[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav[_ngcontent-%COMP%] {\r\n    padding-top: 105px;\r\n  }\r\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.user-logo-text[_ngcontent-%COMP%] {\r\n  width: 93px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis !important;\r\n  white-space: nowrap;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n    top: 15%;\r\n    width: 20px;\r\n    right: 60px;\r\n    left: 1138px;\r\n    z-index: 1000;\r\n    display: none;\r\n    float: left;\r\n    min-width: 10rem;\r\n    padding: .5rem 0;\r\n    margin: .125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #98b0d4;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-radius: .25rem;\r\n}\r\n\r\n.dropdown-menu.show[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover > .user-dropdown[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.isDisabled[_ngcontent-%COMP%] {\r\n  color: currentColor;\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n  text-decoration: none;\r\n  pointer-events: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlcm9uZS9oZWFkZXJvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2hlYWRlcm9uZS9oZWFkZXJvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgKi9cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXItZml4ZWQtdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMyO1xyXG59XHJcblxyXG4uaGVhZGVyIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmhlYWRlciBhLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlciBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhlYWRlciBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmhlYWRlci1zZWFyY2gge1xyXG4gIGxlZnQ6IDIwNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYnRuLWJvcmRlci0wIHtcclxuICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLmxvZ28taW1nIHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmhlYWRlciBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1yaWdodCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiBhIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICAvKiBtYXJnaW4tbGVmdDogNTBweDsgKi9cclxufVxyXG5cclxuLnNpZGUtbmF2LW9wdCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDEwNXB4O1xyXG4gIH1cclxuICAuc2lkZW5hdiBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWxvZ28tdGV4dCB7XHJcbiAgd2lkdGg6IDkzcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDYwcHg7XHJcbiAgICBsZWZ0OiAxMTM4cHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgICBtYXJnaW46IC4xMjVyZW0gMCAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OGIwZDQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyPi51c2VyLWRyb3Bkb3due1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pc0Rpc2FibGVkIHtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-headerone',
          templateUrl: './headerone.component.html',
          styleUrls: ['./headerone.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_4__["LoginUtilityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/headertwo/headertwo.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/common/headertwo/headertwo.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeadertwoComponent */

  /***/
  function srcAppCommonHeadertwoHeadertwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadertwoComponent", function () {
      return HeadertwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.component.routes */
    "./src/app/app.component.routes.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeadertwoComponent = /*#__PURE__*/function () {
      function HeadertwoComponent(_router, _activatedRoute) {
        _classCallCheck(this, HeadertwoComponent);

        this._router = _router;
        this._activatedRoute = _activatedRoute;
      }

      _createClass(HeadertwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToActivities",
        value: function navigateToActivities() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].activities], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToEvents",
        value: function navigateToEvents() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].events], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToMovies",
        value: function navigateToMovies() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].movies], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToPlays",
        value: function navigateToPlays() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].plays], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToSports",
        value: function navigateToSports() {
          this._router.navigate([src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].sports], {
            relativeTo: this._activatedRoute
          });
        }
      }]);

      return HeadertwoComponent;
    }();

    HeadertwoComponent.ɵfac = function HeadertwoComponent_Factory(t) {
      return new (t || HeadertwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    HeadertwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadertwoComponent,
      selectors: [["app-headertwo"]],
      decls: 17,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-sm", "bg-secondary", "navbar-dark", "fixed-top", "header-two-margin-top"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", "test-white", 3, "click"]],
      template: function HeadertwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadertwoComponent_Template_a_click_3_listener() {
            return ctx.navigateToMovies();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Movies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadertwoComponent_Template_a_click_6_listener() {
            return ctx.navigateToEvents();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadertwoComponent_Template_a_click_9_listener() {
            return ctx.navigateToPlays();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Plays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadertwoComponent_Template_a_click_12_listener() {
            return ctx.navigateToSports();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadertwoComponent_Template_a_click_15_listener() {
            return ctx.navigateToActivities();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header-two-margin-top[_ngcontent-%COMP%] {\r\n    margin-top: 53px;\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlcnR3by9oZWFkZXJ0d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2hlYWRlcnR3by9oZWFkZXJ0d28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdHdvLW1hcmdpbi10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadertwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-headertwo',
          templateUrl: './headertwo.component.html',
          styleUrls: ['./headertwo.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/imgcaurousel/imgcaurousel.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/common/imgcaurousel/imgcaurousel.component.ts ***!
    \***************************************************************/

  /*! exports provided: ImgcaurouselComponent */

  /***/
  function srcAppCommonImgcaurouselImgcaurouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgcaurouselComponent", function () {
      return ImgcaurouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImgcaurouselComponent = /*#__PURE__*/function () {
      function ImgcaurouselComponent() {
        _classCallCheck(this, ImgcaurouselComponent);
      }

      _createClass(ImgcaurouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImgcaurouselComponent;
    }();

    ImgcaurouselComponent.ɵfac = function ImgcaurouselComponent_Factory(t) {
      return new (t || ImgcaurouselComponent)();
    };

    ImgcaurouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImgcaurouselComponent,
      selectors: [["app-imgcaurousel"]],
      decls: 43,
      vars: 0,
      consts: [[1, "container", "carousel-max-width", "carousel-padding"], [1, "row"], ["id", "carousel", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carousel", "data-slide-to", "0", 1, "active"], ["data-target", "#carousel", "data-slide-to", "1"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "d-none", "d-lg-block"], [1, "slide-box"], ["src", "https://picsum.photos/285/200/?image=0&random", "alt", "First slide"], ["src", "https://picsum.photos/285/200/?image=1&random", "alt", "First slide"], ["src", "https://picsum.photos/285/200/?image=2&random", "alt", "First slide"], ["src", "https://picsum.photos/285/200/?image=3&random", "alt", "First slide"], [1, "d-none", "d-md-block", "d-lg-none"], ["src", "https://picsum.photos/240/200/?image=0&random", "alt", "First slide"], ["src", "https://picsum.photos/240/200/?image=1&random", "alt", "First slide"], ["src", "https://picsum.photos/240/200/?image=2&random", "alt", "First slide"], [1, "d-none", "d-sm-block", "d-md-none"], ["src", "https://picsum.photos/270/200/?image=0&random", "alt", "First slide"], ["src", "https://picsum.photos/270/200/?image=1&random", "alt", "First slide"], [1, "d-block", "d-sm-none"], ["src", "https://picsum.photos/600/400/?image=0&random", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://picsum.photos/285/200/?image=4&random", "alt", "Second slide"], ["src", "https://picsum.photos/285/200/?image=5&random", "alt", "Second slide"], ["src", "https://picsum.photos/285/200/?image=6&random", "alt", "Second slide"], ["src", "https://picsum.photos/285/200/?image=7&random", "alt", "Second slide"], ["src", "https://picsum.photos/240/200/?image=3&random", "alt", "Second slide"], ["src", "https://picsum.photos/240/200/?image=4&random", "alt", "Second slide"], ["src", "https://picsum.photos/240/200/?image=5&random", "alt", "Second slide"], ["src", "https://picsum.photos/270/200/?image=2&random", "alt", "Second slide"], ["src", "https://picsum.photos/270/200/?image=3&random", "alt", "Second slide"], ["src", "https://picsum.photos/600/400/?image=1&random", "alt", "Second slide", 1, "d-block", "w-100"]],
      template: function ImgcaurouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.slide-box[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) {\r\n  .slide-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) {\r\n  .slide-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    flex: 0 0 33.3333%;\r\n    max-width: 33.3333%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .slide-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.carousel-max-width[_ngcontent-%COMP%] {\r\n  max-width: 1285px;\r\n}\r\n\r\n.carousel-padding[_ngcontent-%COMP%] {\r\n  padding: 20px 0px 20px 0px;\r\n}\r\n\r\n.carousel-pos[_ngcontent-%COMP%] {\r\n  position: inherit !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2ltZ2NhdXJvdXNlbC9pbWdjYXVyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUVFLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBRUUsYUFBYTtJQUNiLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2ltZ2NhdXJvdXNlbC9pbWdjYXVyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGUtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAuc2xpZGUtYm94IGltZyB7XHJcbiAgICAtbXMtZmxleDogMCAwIDUwJTtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLnNsaWRlLWJveCBpbWcge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzJTtcclxuICAgIGZsZXg6IDAgMCAzMy4zMzMzJTtcclxuICAgIG1heC13aWR0aDogMzMuMzMzMyU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuc2xpZGUtYm94IGltZyB7XHJcbiAgICAtbXMtZmxleDogMCAwIDI1JTtcclxuICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1tYXgtd2lkdGgge1xyXG4gIG1heC13aWR0aDogMTI4NXB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1wb3Mge1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgcaurouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-imgcaurousel',
          templateUrl: './imgcaurousel.component.html',
          styleUrls: ['./imgcaurousel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header-two-details/activities/activities.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/header-two-details/activities/activities.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ActivitiesComponent */

  /***/
  function srcAppHeaderTwoDetailsActivitiesActivitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function () {
      return ActivitiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ActivitiesComponent = /*#__PURE__*/function () {
      function ActivitiesComponent() {
        _classCallCheck(this, ActivitiesComponent);
      }

      _createClass(ActivitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActivitiesComponent;
    }();

    ActivitiesComponent.ɵfac = function ActivitiesComponent_Factory(t) {
      return new (t || ActivitiesComponent)();
    };

    ActivitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivitiesComponent,
      selectors: [["app-activities"]],
      decls: 2,
      vars: 0,
      template: function ActivitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "activities works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci10d28tZGV0YWlscy9hY3Rpdml0aWVzL2FjdGl2aXRpZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-activities',
          templateUrl: './activities.component.html',
          styleUrls: ['./activities.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header-two-details/events/events.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/header-two-details/events/events.component.ts ***!
    \***************************************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppHeaderTwoDetailsEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventsComponent = /*#__PURE__*/function () {
      function EventsComponent() {
        _classCallCheck(this, EventsComponent);
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventsComponent;
    }();

    EventsComponent.ɵfac = function EventsComponent_Factory(t) {
      return new (t || EventsComponent)();
    };

    EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventsComponent,
      selectors: [["app-events"]],
      decls: 2,
      vars: 0,
      template: function EventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "events works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci10d28tZGV0YWlscy9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-events',
          templateUrl: './events.component.html',
          styleUrls: ['./events.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header-two-details/movies/movies.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/header-two-details/movies/movies.component.ts ***!
    \***************************************************************/

  /*! exports provided: MoviesComponent */

  /***/
  function srcAppHeaderTwoDetailsMoviesMoviesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesComponent", function () {
      return MoviesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MoviesComponent = /*#__PURE__*/function () {
      function MoviesComponent() {
        _classCallCheck(this, MoviesComponent);
      }

      _createClass(MoviesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoviesComponent;
    }();

    MoviesComponent.ɵfac = function MoviesComponent_Factory(t) {
      return new (t || MoviesComponent)();
    };

    MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MoviesComponent,
      selectors: [["app-movies"]],
      decls: 2,
      vars: 0,
      template: function MoviesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "movies works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci10d28tZGV0YWlscy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movies',
          templateUrl: './movies.component.html',
          styleUrls: ['./movies.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header-two-details/plays/plays.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/header-two-details/plays/plays.component.ts ***!
    \*************************************************************/

  /*! exports provided: PlaysComponent */

  /***/
  function srcAppHeaderTwoDetailsPlaysPlaysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaysComponent", function () {
      return PlaysComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PlaysComponent = /*#__PURE__*/function () {
      function PlaysComponent() {
        _classCallCheck(this, PlaysComponent);
      }

      _createClass(PlaysComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlaysComponent;
    }();

    PlaysComponent.ɵfac = function PlaysComponent_Factory(t) {
      return new (t || PlaysComponent)();
    };

    PlaysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaysComponent,
      selectors: [["app-plays"]],
      decls: 2,
      vars: 0,
      template: function PlaysComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "plays works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci10d28tZGV0YWlscy9wbGF5cy9wbGF5cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-plays',
          templateUrl: './plays.component.html',
          styleUrls: ['./plays.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header-two-details/sports/sports.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/header-two-details/sports/sports.component.ts ***!
    \***************************************************************/

  /*! exports provided: SportsComponent */

  /***/
  function srcAppHeaderTwoDetailsSportsSportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsComponent", function () {
      return SportsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SportsComponent = /*#__PURE__*/function () {
      function SportsComponent() {
        _classCallCheck(this, SportsComponent);
      }

      _createClass(SportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SportsComponent;
    }();

    SportsComponent.ɵfac = function SportsComponent_Factory(t) {
      return new (t || SportsComponent)();
    };

    SportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SportsComponent,
      selectors: [["app-sports"]],
      decls: 2,
      vars: 0,
      template: function SportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sports works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci10d28tZGV0YWlscy9zcG9ydHMvc3BvcnRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sports',
          templateUrl: './sports.component.html',
          styleUrls: ['./sports.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/must-match-password.ts":
  /*!************************************************!*\
    !*** ./src/app/helpers/must-match-password.ts ***!
    \************************************************/

  /*! exports provided: MustMatchPassword */

  /***/
  function srcAppHelpersMustMatchPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatchPassword", function () {
      return MustMatchPassword;
    }); // custom validator to check that two fields match


    function MustMatchPassword(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true,
            mustMatchPassword: 'No'
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/helpers/username-validation.ts":
  /*!************************************************!*\
    !*** ./src/app/helpers/username-validation.ts ***!
    \************************************************/

  /*! exports provided: UserNameValidation */

  /***/
  function srcAppHelpersUsernameValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNameValidation", function () {
      return UserNameValidation;
    });

    var UserNameValidation = function UserNameValidation(control) {
      var value = control.value || '';
      var msg = "";

      if (!value) {
        return null;
      }

      var upperCaseCharacters = /[A-Z]+/g;
      var lowerCaseCharacters = /[a-z]+/g;
      var numberCharacters = /[0-9]+/g;
      var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

      if (upperCaseCharacters.test(value) === true || specialCharacters.test(value) === true) {
        return {
          userNameValidation: 'User Name must contain lowercase letters, digits only'
        };
      }

      if (!(lowerCaseCharacters.test(value) && numberCharacters.test(value))) {
        return {
          userNameValidation: 'User Name must contain lowercase letters, digits only'
        };
      }
    };
    /***/

  },

  /***/
  "./src/app/homelayout/homelayout.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/homelayout/homelayout.component.ts ***!
    \****************************************************/

  /*! exports provided: HomelayoutComponent */

  /***/
  function srcAppHomelayoutHomelayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomelayoutComponent", function () {
      return HomelayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.component.routes */
    "./src/app/app.component.routes.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomelayoutComponent = /*#__PURE__*/function () {
      function HomelayoutComponent(_router, _activatedRoute) {
        _classCallCheck(this, HomelayoutComponent);

        this._router = _router;
        this._activatedRoute = _activatedRoute;
      }

      _createClass(HomelayoutComponent, [{
        key: "goToPage",
        value: function goToPage() {
          this._router.navigate(['/home']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToAboutUs",
        value: function navigateToAboutUs() {
          this._router.navigate([_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].aboutus], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToContactUs",
        value: function navigateToContactUs() {
          this._router.navigate([_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].contactus], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToServices",
        value: function navigateToServices() {
          this._router.navigate([_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].services], {
            relativeTo: this._activatedRoute
          });
        }
      }, {
        key: "navigateToClients",
        value: function navigateToClients() {
          this._router.navigate([_app_component_routes__WEBPACK_IMPORTED_MODULE_1__["Project353Routes"].clients], {
            relativeTo: this._activatedRoute
          });
        }
      }]);

      return HomelayoutComponent;
    }();

    HomelayoutComponent.ɵfac = function HomelayoutComponent_Factory(t) {
      return new (t || HomelayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    HomelayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomelayoutComponent,
      selectors: [["app-homelayout"]],
      hostBindings: function HomelayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function HomelayoutComponent_beforeunload_HostBindingHandler() {
            return ctx.goToPage();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 84,
      vars: 0,
      consts: [["id", "demo", "data-ride", "carousel", "data-interval", "4000", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#demo", "data-slide-to", "0", 1, "active"], ["data-target", "#demo", "data-slide-to", "1"], ["data-target", "#demo", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://c4.wallpaperflare.com/wallpaper/465/952/896/prabhas-8k-4k-baahubali-2-the-conclusion-wallpaper-preview.jpg", "alt", "Los Angeles", "width", "1100", "height", "500"], [1, "carousel-caption"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", "text-white", "btn-border-0"], [1, "carousel-item"], ["src", "https://4.bp.blogspot.com/-HmCbVjEb-ww/VzRalabyHJI/AAAAAAAAAFA/lj9U-_tgdR8XqgXzWp4yrWuWOtU9Fe-jwCLcB/s1600/Bahubali%2BPrabhas%2BWallpaper%2B2%2528SouthyMania%2529.jpg", "alt", "Chicago", "width", "1100", "height", "500"], ["src", "https://udagam360.com/wp-content/uploads/2017/05/Bahubali-2-prabhas-hd-wallpaper.jpg", "alt", "New York", "width", "1100", "height", "500"], [1, "container-sm|md|lg|xl", "mt-3", "pt-3"], [1, "row"], [1, "col-sm-2", "col-md-2", "col-lg-2", "col-xl-2"], [1, "sidenav", "bg-info"], [1, "text-white", 3, "click"], [1, "col-sm-10", "col-md-10", "col-lg-10", "col-xl-10"], [1, "card-group"], [1, "card-deck"], [1, "card"], ["src", "https://udagam360.com/wp-content/uploads/2017/05/Bahubali-2-prabhas-hd-wallpaper.jpg", "alt", "Card image cap", 1, "card-img-top", "card-img-height"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer", "pt-1", "pb-1"], [1, "text-muted"], [1, "col", "text-center"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", "text-gray", "btn-border-0"], ["src", "https://c4.wallpaperflare.com/wallpaper/465/952/896/prabhas-8k-4k-baahubali-2-the-conclusion-wallpaper-preview.jpg", "alt", "Card image cap", 1, "card-img-top", "card-img-height"], ["src", "https://4.bp.blogspot.com/-HmCbVjEb-ww/VzRalabyHJI/AAAAAAAAAFA/lj9U-_tgdR8XqgXzWp4yrWuWOtU9Fe-jwCLcB/s1600/Bahubali%2BPrabhas%2BWallpaper%2B2%2528SouthyMania%2529.jpg", "alt", "Card image cap", 1, "card-img-top", "card-img-height"], [1, "card-body", "text-overlay"]],
      template: function HomelayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Book Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Baahubali 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jai Maahismathi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Book Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Baahubali 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Jai Maahismathi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Book Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Baahubali 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Jai Maahismathi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomelayoutComponent_Template_a_click_37_listener() {
            return ctx.navigateToAboutUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomelayoutComponent_Template_a_click_39_listener() {
            return ctx.navigateToServices();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomelayoutComponent_Template_a_click_41_listener() {
            return ctx.navigateToClients();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomelayoutComponent_Template_a_click_43_listener() {
            return ctx.navigateToContactUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Baahubali 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Book Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Baahubali 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "This card has supporting text below as a natural lead-in to additional content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "small", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Book Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Baahubali 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "small", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Book Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 80%;\r\n}\r\n.btn-border-0[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.sidenav[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 160px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 300;\r\n  left: 7;\r\n  overflow-x: hidden;\r\n  padding-top: 20px !important;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #f1f1f1;\r\n  background-color: #28a745;\r\n}\r\n.main[_ngcontent-%COMP%] {\r\n  margin-left: 160px; \r\n  font-size: 28px; \r\n  padding: 0px 10px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n  .sidenav[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n}\r\n.card-img-height[_ngcontent-%COMP%] {\r\n  height: 50% !important;\r\n}\r\n.text-overlay[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZWxheW91dC9ob21lbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0VBQ3pELGVBQWUsRUFBRSx1Q0FBdUM7RUFDeEQsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVsYXlvdXQvaG9tZWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFrZSB0aGUgaW1hZ2UgZnVsbHkgcmVzcG9uc2l2ZSAqL1xyXG4uY2Fyb3VzZWwtaW5uZXIgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uYnRuLWJvcmRlci0wIHtcclxuICAvKiBib3JkZXI6IDBweDsgKi9cclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAzMDA7XHJcbiAgbGVmdDogNztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVuYXYgYSB7XHJcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gIGZvbnQtc2l6ZTogMjhweDsgLyogSW5jcmVhc2VkIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZyAqL1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1pbWctaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1vdmVybGF5IHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomelayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homelayout',
          templateUrl: './homelayout.component.html',
          styleUrls: ['./homelayout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        goToPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/account-details/faq/faq.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/myaccount/account-details/faq/faq.component.ts ***!
    \****************************************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppMyaccountAccountDetailsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FaqComponent = /*#__PURE__*/function () {
      function FaqComponent() {
        _classCallCheck(this, FaqComponent);
      }

      _createClass(FaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent.ɵfac = function FaqComponent_Factory(t) {
      return new (t || FaqComponent)();
    };

    FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaqComponent,
      selectors: [["app-faq"]],
      decls: 2,
      vars: 0,
      template: function FaqComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "faq works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9hY2NvdW50LWRldGFpbHMvZmFxL2ZhcS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faq',
          templateUrl: './faq.component.html',
          styleUrls: ['./faq.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/account-details/helpandsupport/helpandsupport.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/myaccount/account-details/helpandsupport/helpandsupport.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: HelpandsupportComponent */

  /***/
  function srcAppMyaccountAccountDetailsHelpandsupportHelpandsupportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpandsupportComponent", function () {
      return HelpandsupportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelpandsupportComponent = /*#__PURE__*/function () {
      function HelpandsupportComponent() {
        _classCallCheck(this, HelpandsupportComponent);
      }

      _createClass(HelpandsupportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpandsupportComponent;
    }();

    HelpandsupportComponent.ɵfac = function HelpandsupportComponent_Factory(t) {
      return new (t || HelpandsupportComponent)();
    };

    HelpandsupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpandsupportComponent,
      selectors: [["app-helpandsupport"]],
      decls: 2,
      vars: 0,
      template: function HelpandsupportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "helpandsupport works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9hY2NvdW50LWRldGFpbHMvaGVscGFuZHN1cHBvcnQvaGVscGFuZHN1cHBvcnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpandsupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-helpandsupport',
          templateUrl: './helpandsupport.component.html',
          styleUrls: ['./helpandsupport.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/account-details/settings/settings.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/myaccount/account-details/settings/settings.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppMyaccountAccountDetailsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_username_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/username-validation */
    "./src/app/helpers/username-validation.ts");
    /* harmony import */


    var src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/userroleenum */
    "./src/app/shared/userroleenum.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/loginutilityservice */
    "./src/app/shared/services/loginutilityservice.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/login-service */
    "./src/app/services/login-service.ts");
    /* harmony import */


    var src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/project-properties-service */
    "./src/app/services/project-properties-service.ts");
    /* harmony import */


    var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/address-service */
    "./src/app/services/address-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["fileInput"];

    function SettingsComponent_div_12_div_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_div_42_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.userViewDetails.userAddress.gender = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "g", i_r7, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r6)("ngModel", ctx_r4.userViewDetails.userAddress.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r6);
      }
    }

    function SettingsComponent_div_12_div_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_div_47_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.userViewDetails.userAddress.maritalStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "m", i_r11, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r10)("ngModel", ctx_r5.userViewDetails.userAddress.maritalStatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r10);
      }
    }

    function SettingsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_12_Template_input_change_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.uploadFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Full Name(Display Name):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.userViewDetails.fullName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "User Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.userViewDetails.userName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User Role:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.roleName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.userViewDetails.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.userViewDetails.phoneNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Gender: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SettingsComponent_div_12_div_42_Template, 4, 4, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Marital Status: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SettingsComponent_div_12_div_47_Template, 4, 4, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Address Line 1:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_53_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.userViewDetails.userAddress.addressOne = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Address Line 2:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_57_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.userViewDetails.userAddress.addressTwo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Land Mark:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.userViewDetails.userAddress.landMark = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "City:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_66_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.userViewDetails.userAddress.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "State:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_71_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.userViewDetails.userAddress.state = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Country:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_12_Template_input_ngModelChange_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.userViewDetails.userAddress.country = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.imageUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.roleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.genderRadio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.maritalStatusRadio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.userAddress.addressOne);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.userAddress.addressTwo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.userAddress.landMark);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.userAddress.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.userAddress.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userViewDetails.userAddress.country);
      }
    }

    function SettingsComponent_div_13_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_25_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.settingsFormControl.fullName.errors.required);
      }
    }

    function SettingsComponent_div_13_div_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_30_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r48.settingsForm.get("userName").errors["userNameValidation"], " ");
      }
    }

    function SettingsComponent_div_13_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_30_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingsComponent_div_13_div_30_div_2_Template, 2, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.settingsFormControl.userName.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.settingsForm.get("userName").hasError("userNameValidation"));
      }
    }

    function SettingsComponent_div_13_div_40_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_40_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.settingsFormControl.email.errors.required);
      }
    }

    function SettingsComponent_div_13_div_45_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_45_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number must be at least 10 digits ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_45_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingsComponent_div_13_div_45_div_2_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.settingsFormControl.phoneNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.settingsFormControl.phoneNumber.errors.minLenght);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    function SettingsComponent_div_13_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_div_52_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r54.userDetails.userAddress.gender = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r52 = ctx.$implicit;
        var i_r53 = ctx.index;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "g", i_r53, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r52)("ngModel", ctx_r32.userDetails.userAddress.gender)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r32.settingsSubmitted && ctx_r32.settingsFormControl.gender.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r52);
      }
    }

    function SettingsComponent_div_13_div_53_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gender is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_53_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.settingsFormControl.gender.errors.required);
      }
    }

    function SettingsComponent_div_13_div_58_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_div_58_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r59.userDetails.userAddress.maritalStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r57 = ctx.$implicit;
        var i_r58 = ctx.index;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "m", i_r58, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r57)("ngModel", ctx_r34.userDetails.userAddress.maritalStatus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r34.settingsSubmitted && ctx_r34.settingsFormControl.married.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r57);
      }
    }

    function SettingsComponent_div_13_div_59_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Marital Status is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_59_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.settingsFormControl.married.errors.required);
      }
    }

    function SettingsComponent_div_13_div_66_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address line 1 is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_66_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.settingsFormControl.addressOne.errors.required);
      }
    }

    function SettingsComponent_div_13_div_71_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address Line 2 is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_71_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.settingsFormControl.addressTwo.errors.required);
      }
    }

    function SettingsComponent_div_13_div_77_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Land Mark is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_77_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.settingsFormControl.landMark.errors.required);
      }
    }

    function SettingsComponent_div_13_option_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r65 = ctx.$implicit;

        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", city_r65.name)("selected", ctx_r39.selectedCity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, city_r65.name));
      }
    }

    function SettingsComponent_div_13_div_85_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_85_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.settingsFormControl.city.errors.required);
      }
    }

    function SettingsComponent_div_13_option_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r67 = ctx.$implicit;

        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", state_r67.name)("selected", state_r67.name === ctx_r41.selectedState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r67.name);
      }
    }

    function SettingsComponent_div_13_div_94_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "State is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_div_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_13_div_94_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.settingsFormControl.state.errors.required);
      }
    }

    function SettingsComponent_div_13_option_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r69 = ctx.$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r69.name)("selected", country_r69.name === ctx_r43.selectedCountry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, country_r69.name));
      }
    }

    function SettingsComponent_div_13_button_105_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r44.showSpinner);
      }
    }

    function SettingsComponent_div_13_button_106_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_13_button_106_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r70.saveSettings();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_13_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_13_Template_input_change_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.uploadFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_13_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.removeUploadedFile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_13_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          return _r27.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Upload Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Full Name(Display Name):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.userDetails.fullName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SettingsComponent_div_13_div_25_Template, 2, 1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "User Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.userDetails.userName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SettingsComponent_div_13_div_30_Template, 3, 2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "User Role:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.roleName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.userDetails.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SettingsComponent_div_13_div_40_Template, 2, 1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Phone Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.userDetails.phoneNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SettingsComponent_div_13_div_45_Template, 3, 2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Gender: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SettingsComponent_div_13_div_52_Template, 4, 7, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SettingsComponent_div_13_div_53_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Marital Status: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, SettingsComponent_div_13_div_58_Template, 4, 7, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, SettingsComponent_div_13_div_59_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Address Line 1:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_65_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.userDetails.userAddress.addressOne = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, SettingsComponent_div_13_div_66_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Address Line 2:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.userDetails.userAddress.addressTwo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, SettingsComponent_div_13_div_71_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Land Mark:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_input_ngModelChange_76_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.userDetails.userAddress.landMark = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SettingsComponent_div_13_div_77_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "City:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "select", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_select_ngModelChange_81_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.userDetails.userAddress.city = $event;
        })("ngModelChange", function SettingsComponent_div_13_Template_select_ngModelChange_81_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.onStateSelection();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Select City ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, SettingsComponent_div_13_option_84_Template, 3, 5, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, SettingsComponent_div_13_div_85_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "State:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "select", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_13_Template_select_ngModelChange_90_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.userDetails.userAddress.state = $event;
        })("ngModelChange", function SettingsComponent_div_13_Template_select_ngModelChange_90_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.stateChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Select State ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SettingsComponent_div_13_option_93_Template, 2, 3, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SettingsComponent_div_13_div_94_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Country:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "select", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_13_Template_select_change_98_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.countryChange($event);
        })("ngModelChange", function SettingsComponent_div_13_Template_select_ngModelChange_98_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.userDetails.userAddress.country = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Select Country ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, SettingsComponent_div_13_option_101_Template, 3, 5, "option", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_13_Template_button_click_103_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, SettingsComponent_div_13_button_105_Template, 3, 1, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, SettingsComponent_div_13_button_106_Template, 2, 0, "button", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.registrationForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.imageUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.settingsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.fullName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.fullName.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.fullName.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.userName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.userName.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.userName.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.roleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.email.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.email.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.phoneNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.phoneNumber.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.phoneNumber.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.genderRadio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.gender.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.maritalStatusRadio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.married.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.userAddress.addressOne)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.addressOne.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.addressOne.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.userAddress.addressTwo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.addressTwo.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.addressTwo.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.userAddress.landMark)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.landMark.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.landMark.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.userAddress.city)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.city.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.citiesList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.city.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.userAddress.state)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.state.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined)("selected", ctx_r1.selectedCity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.statesList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.state.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.userAddress.country)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c1, ctx_r1.settingsSubmitted && ctx_r1.settingsFormControl.country.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.countryList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showSpinner);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showSpinner);
      }
    }

    function SettingsComponent_div_14_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Old Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_14_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_14_div_20_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.changePasswordFormControl.oldPassword.errors.required);
      }
    }

    function SettingsComponent_div_14_div_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_14_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_14_div_34_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.changePasswordFormControl.newPassword.errors.required);
      }
    }

    function SettingsComponent_div_14_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_14_div_39_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_14_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_div_14_div_39_div_1_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingsComponent_div_14_div_39_div_2_Template, 2, 0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.changePasswordFormControl.confirmPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.changePasswordFormControl.confirmPassword.errors.mustMatchPassword);
      }
    }

    function SettingsComponent_div_14_button_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Change Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r96.showSpinner);
      }
    }

    function SettingsComponent_div_14_button_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_14_button_43_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r102.changePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_14_Template_input_change_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.uploadFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Old Password:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.changePasswordDetails.oldPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SettingsComponent_div_14_div_20_Template, 2, 1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Full Name(Display Name):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r107.fullName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Role:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.roleName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "New Password:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r109.changePasswordDetails.newPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SettingsComponent_div_14_div_34_Template, 2, 1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Confirm Password:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.changePasswordDetails.confirmPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SettingsComponent_div_14_div_39_Template, 3, 2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SettingsComponent_div_14_button_42_Template, 3, 1, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SettingsComponent_div_14_button_43_Template, 2, 0, "button", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r2.imageUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.changePasswordForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.changePasswordDetails.oldPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx_r2.changePasswordSubmitted && ctx_r2.changePasswordFormControl.oldPassword.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.changePasswordSubmitted && ctx_r2.changePasswordFormControl.oldPassword.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.roleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.changePasswordDetails.newPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx_r2.changePasswordSubmitted && ctx_r2.changePasswordFormControl.newPassword.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.changePasswordSubmitted && ctx_r2.changePasswordFormControl.newPassword.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.changePasswordDetails.confirmPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx_r2.changePasswordSubmitted && ctx_r2.changePasswordFormControl.confirmPassword.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.changePasswordSubmitted && ctx_r2.changePasswordFormControl.confirmPassword.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showSpinner);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showSpinner);
      }
    }

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(formBuilder, toastr, _userService, _loginUtilityService, _loginService, cd, fb, _projectPropertiesService, _addressService) {
        _classCallCheck(this, SettingsComponent);

        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this._userService = _userService;
        this._loginUtilityService = _loginUtilityService;
        this._loginService = _loginService;
        this.cd = cd;
        this.fb = fb;
        this._projectPropertiesService = _projectPropertiesService;
        this._addressService = _addressService;
        this.showSpinner = false;
        this.roleName = '';
        this.userDetails = {
          userId: 0
        };
        this.userViewDetails = {};
        this.settingsSubmitted = false;
        this.selectedTab = 1;
        this.genderRadio = ['Male', 'Female'];
        this.maritalStatusRadio = ['Single', 'Married'];
        this.changePasswordSubmitted = false;
        this.citiesList = [];
        this.statesList = [];
        this.countryList = [];
        this.country = 'India';
        this.selectedCountry = 'India';
        this.selectedState = undefined;
        this.selectedCity = undefined;
        this.editFile = true;
        this.removeUpload = true;
        this.registrationForm = this.fb.group({
          file: [null]
        });
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.userDetails.userAddress = {};
          this.userDetails.userAddress.country = this.country;
          this.userViewDetails.userAddress = {};
          this.userDetails.userAddress.state = undefined;
          this.userDetails.userAddress.city = undefined;
          this.changePasswordDetails = {};
          this.subscriptions = this._loginUtilityService.getUserLoginData$().subscribe(function (userLoginData) {
            if (userLoginData && userLoginData.userRole) {
              _this5.userName = userLoginData.userName;
              _this5.fullName = userLoginData.fullName;
              _this5.userRole = userLoginData.userRole;

              if (_this5.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__["UserRoleType"].SUPERADMIN) {
                _this5.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__["UserRoleTypeName"].SUPERADMIN;
              } else if (_this5.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__["UserRoleType"].ADMIN) {
                _this5.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__["UserRoleTypeName"].ADMIN;
              } else if (_this5.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__["UserRoleType"].MANAGER) {
                _this5.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__["UserRoleTypeName"].MANAGER;
              } else {
                _this5.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_3__["UserRoleTypeName"].USER;
              }

              _this5.userId = userLoginData.uid;

              _this5.getUserById(_this5.userId);
            }
          });
          this.getStatesAndCountriesList();
          this.createSettingsForm();
          this.createChangePasswordForm();
        }
      }, {
        key: "getStatesAndCountriesList",
        value: function getStatesAndCountriesList() {
          var _this6 = this;

          this.showSpinner = true;

          this._projectPropertiesService.getCountriesAndStatesList().subscribe(function (data) {
            debugger;
            console.log(data);
            var statesMap = data.statesMap;
            Object.keys(statesMap).forEach(function (key) {
              _this6.statesList.push({
                id: +key,
                name: statesMap[key]
              });
            });
            var countriesMap = data.countriesMap;
            Object.keys(countriesMap).forEach(function (key) {
              _this6.countryList.push({
                id: +key,
                name: countriesMap[key]
              });
            });
            var citiesMap = data.citiesMap;
            Object.keys(citiesMap).forEach(function (key) {
              _this6.citiesList.push({
                id: +key,
                name: citiesMap[key]
              });
            });

            _this6.getStatesListByCountryId(104);

            _this6.showSpinner = false;
          });
        }
      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this7 = this;

          this.showSpinner = true;

          this._projectPropertiesService.getCountries().subscribe(function (data) {
            debugger;
            console.log(data);
            var countriesMap = data.countriesMap;
            Object.keys(countriesMap).forEach(function (key) {
              _this7.countryList.push({
                id: +key,
                name: countriesMap[key]
              });
            });
            _this7.showSpinner = false;
          });
        }
      }, {
        key: "getStatesListByCountryId",
        value: function getStatesListByCountryId(countryId) {
          var _this8 = this;

          this.showSpinner = true;

          this._addressService.getStatesListByCountryId(countryId).subscribe(function (data) {
            debugger;
            console.log(data);
            var statesMap = data;
            Object.keys(statesMap).forEach(function (key) {
              _this8.statesList.push({
                id: +key,
                name: statesMap[key]
              });
            });

            if (_this8.userId && _this8.userDetails && _this8.userDetails.userAddress && _this8.userDetails.userAddress.state && _this8.userDetails.userAddress.state !== undefined) {
              _this8.statesList.filter(function (item) {
                if (item.name === _this8.userDetails.userAddress.state) {
                  _this8.getCitiesListByCountryId(item.id);
                }
              });
            }

            _this8.showSpinner = false;
          });
        }
      }, {
        key: "getCitiesListByCountryId",
        value: function getCitiesListByCountryId(stateId) {
          var _this9 = this;

          this.showSpinner = true;

          this._addressService.getCitiesListByStateId(stateId).subscribe(function (data) {
            debugger;
            console.log(data);
            var citiesMap = data;
            _this9.citiesList = [];
            Object.keys(citiesMap).forEach(function (key) {
              _this9.citiesList.push({
                id: +key,
                name: citiesMap[key]
              });
            });

            _this9.settingsForm.controls['city'].enable();

            _this9.showSpinner = false;
          });
        }
      }, {
        key: "getUserById",
        value: function getUserById(userId) {
          var _this10 = this;

          this.showSpinner = true;

          var a = this._userService.getUserById(userId).subscribe(function (data) {
            debugger;
            console.log(data);
            _this10.userViewDetails = JSON.parse(JSON.stringify(data));
            ;
            _this10.userDetails = JSON.parse(JSON.stringify(data));
            _this10.fullName = _this10.userDetails.fullName;
            _this10.userDetails.userAddress.country = 'India';
            _this10.userViewDetails.userAddress.country = 'INDIA';
            _this10.showSpinner = false;
            _this10.userDetails.userId = data.uid;
            _this10.changePasswordDetails.userId = data.uid;
            _this10.imageUrl = _this10.userDetails.imageUrl;
            _this10.selectedState = _this10.userDetails.userAddress.state;
            _this10.selectedCity = _this10.userDetails.userAddress.city;
          });
        }
      }, {
        key: "createSettingsForm",
        value: function createSettingsForm() {
          this.settingsForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userName: [{
              value: '',
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_helpers_username_validation__WEBPACK_IMPORTED_MODULE_2__["UserNameValidation"]]],
            email: [{
              value: '',
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phoneNumber: [{
              value: '',
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            married: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addressTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            landMark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: [{
              value: '',
              disabled: true
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: [{
              value: '',
              disabled: false
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: [{
              value: '',
              disabled: true
            }],
            roleName: [{
              value: '',
              disabled: true
            }]
          });
        }
      }, {
        key: "createChangePasswordForm",
        value: function createChangePasswordForm() {
          this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            roleName: [{
              value: '',
              disabled: true
            }],
            fullName: [{
              value: '',
              disabled: true
            }]
          });
        }
      }, {
        key: "selectTab",
        value: function selectTab(tabIndex) {
          this.selectedTab = tabIndex;
        }
      }, {
        key: "saveSettings",
        value: function saveSettings() {
          var _this11 = this;

          debugger;
          this.settingsSubmitted = true;
          this.showSpinner = true;

          if (this.settingsForm.invalid) {
            setTimeout(function () {
              return _this11.toastr.warning('You must fill all the Required fields', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          this.userDetails.userId = this.userId;
          this.userDetails.imageUrl = this.imageUrl;
          debugger;

          this._userService.saveSettings(this.userDetails).subscribe(function (data) {
            _this11.userDetails = JSON.parse(JSON.stringify(data));
            _this11.userViewDetails = JSON.parse(JSON.stringify(data));

            if (_this11.userDetails.errors === null) {
              _this11.showSpinner = false;
              setTimeout(function () {
                return _this11.toastr.success('Profile updated Successfully', 'Settings', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
              document.getElementById("view").click();
            } else {
              _this11.showSpinner = false;

              _this11.toastr.error(_this11.userDetails.errors[0].errorMessage);
            }
          }, function (error) {
            console.log(error);
            _this11.showSpinner = false;
            setTimeout(function () {
              return _this11.toastr.error('Profile update Failed - unknown error', 'Settings', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });

          debugger;
        }
      }, {
        key: "close",
        value: function close() {}
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this12 = this;

          this.changePasswordSubmitted = true;
          this.showSpinner = true;

          if (this.changePasswordForm.invalid) {
            setTimeout(function () {
              return _this12.toastr.warning('You must fill all the Required fields', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          this._loginService.changePassword(this.changePasswordDetails).subscribe(function (data) {
            if (data !== null && data.changePasswordStatus) {
              _this12.changePasswordResponse = data;
              console.log(data);
              console.log("Success");
              setTimeout(function () {
                return _this12.toastr.success('Your password has changed Successful', 'Change Password', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
              document.getElementById("view").click();
              _this12.changePasswordDetails = {};
              _this12.showSpinner = false;
              _this12.changePasswordSubmitted = false;
            } else {
              console.log('Failed');
              _this12.showSpinner = false;
              setTimeout(function () {
                return _this12.toastr.error('Password change Failed - ' + data.message, 'Change Password', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
            }
          }, function (error) {
            console.log('Failed');
            _this12.showSpinner = false;
            setTimeout(function () {
              return _this12.toastr.error('Password change Failed - unknown error', 'Change Password', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this13 = this;

          var reader = new FileReader(); // HTML5 FileReader API

          var file = event.target.files[0];

          if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(file); // When file uploads set it to file formcontrol

            reader.onload = function () {
              _this13.imageUrl = reader.result;
              _this13.userDetails.profilePicture = "Y";

              _this13.registrationForm.patchValue({
                file: reader.result
              });

              _this13.editFile = false;
              _this13.removeUpload = true;
            }; // ChangeDetectorRef since file is loading outside the zone


            this.cd.markForCheck();
          }
        } // Function to remove uploaded file

      }, {
        key: "removeUploadedFile",
        value: function removeUploadedFile() {
          var newFileList = Array.from(this.el.nativeElement.files);
          this.imageUrl = null;
          this.userDetails.profilePicture = 'N';
          this.editFile = true;
          this.removeUpload = false;
          this.registrationForm.patchValue({
            file: [null]
          });
        } // Submit Registration Form

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (!this.registrationForm.valid) {
            alert('Please fill all the required fields to create a super hero!');
            return false;
          } else {
            console.log(this.registrationForm.value);
          }
        }
      }, {
        key: "onStateSelection",
        value: function onStateSelection() {}
      }, {
        key: "countryChange",
        value: function countryChange(event) {
          console.log(event);
        }
      }, {
        key: "stateChange",
        value: function stateChange(state) {
          var _this14 = this;

          this.selectedState = state;
          this.selectedCity = undefined;
          console.log(state);
          this.statesList.filter(function (x) {
            if (x.name === state) {
              debugger;

              _this14.getCitiesListByCountryId(x.id);
            }
          });
        }
      }, {
        key: "settingsFormControl",
        get: function get() {
          return this.settingsForm.controls;
        }
      }, {
        key: "changePasswordFormControl",
        get: function get() {
          return this.changePasswordForm.controls;
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_6__["LoginUtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPropertiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_9__["AddressService"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      viewQuery: function SettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
        }
      },
      decls: 15,
      vars: 3,
      consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item", "content-cursor-pointer"], ["id", "view", "data-toggle", "tab", 1, "nav-link", "active", 3, "click"], ["id", "edit", "data-toggle", "tab", 1, "nav-link", 3, "click"], ["data-toggle", "tab", 1, "nav-link", 3, "click"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "ml-3"], [1, "row", "custom-wrapper"], [1, "col-md-12"], [1, "group-gap"], [1, "avatar-upload"], [1, "avatar-edit"], ["type", "file", "id", "imageUpload", "accept", ".png, .jpg, .jpeg", 1, "content-display-none", 3, "change"], ["fileInput", ""], [1, "img-picture"], ["id", "imagePreview", 1, "img-preview"], [1, "card-title", "text-capitalize"], [1, "modal-body"], [1, "row"], [1, "col-sm-4", "form-group"], ["for", "viewFullName"], ["type", "text", "disabled", "true", "id", "fullName", "placeholder", "Full Name", "name", "fullNameView", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "viewUserName"], ["type", "text", "disabled", "true", "id", "userName", "placeholder", "User Name", "name", "usersignupemail1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "viewUserRole"], ["type", "text", "disabled", "true", "id", "roleName", "placeholder", "User Role", "name", "roleName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "viewEmail"], ["type", "text", "disabled", "true", "id", "email", "maxlength", "80", "placeholder", "Email Address", "name", "usersignupemail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phoneNumber"], ["type", "number", "disabled", "true", "placeholder", "Phone Number", "name", "userviewphonenumber", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-4"], ["for", "gender"], ["class", "form-check-inline", 4, "ngFor", "ngForOf"], ["for", "addressOne"], ["disabled", "true", "type", "text", "id", "email", "maxlength", "800", "placeholder", "Address line 1", "name", "addressOne", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", "true", "type", "text", "placeholder", "Address line 2", "name", "addressTwo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "landMark"], ["disabled", "true", "type", "text", "id", "email", "maxlength", "800", "placeholder", "Land mark", "name", "landMark", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", "true", "type", "text", "placeholder", "City", "name", "city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "state"], ["disabled", "true", "type", "text", "id", "email", "maxlength", "800", "placeholder", "State", "name", "state", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", "true", "type", "text", "placeholder", "Country", "name", "addressTwo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check-inline"], ["name", "gender", "type", "radio", "disabled", "", 3, "id", "value", "ngModel", "ngModelChange"], ["for", "", 1, "radio-label"], ["name", "married", "type", "radio", "disabled", "", 3, "id", "value", "ngModel", "ngModelChange"], [3, "formGroup", "ngSubmit"], ["type", "button", "id", "removeimg", "data-dismiss", "modal", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "btn-sm", "ml-2", 3, "click"], ["novalidate", "", 3, "formGroup"], ["for", "fulName"], ["type", "text", "formControlName", "fullName", "id", "fullName", "placeholder", "Full Name", "name", "fullName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "userName"], ["type", "text", "formControlName", "userName", "id", "userName", "placeholder", "User Name", "name", "usersignupemail1", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "userRole"], ["type", "text", "formControlName", "roleName", "id", "roleName", "placeholder", "User Name", "name", "roleName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "formControlName", "email", "id", "email", "maxlength", "80", "placeholder", "Email Address", "name", "usersignupemail", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "number", "formControlName", "phoneNumber", "placeholder", "Phone Number", "name", "usersignupphonenumber", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback error-display-block", 4, "ngIf"], ["type", "text", "formControlName", "addressOne", "id", "email", "maxlength", "800", "placeholder", "Address line 1", "name", "addressOne", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "text", "formControlName", "addressTwo", "placeholder", "Address line 2", "name", "addressTwo", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "text", "formControlName", "landMark", "id", "email", "maxlength", "800", "placeholder", "Land mark", "name", "landMark", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "city"], ["placeholder", "Select", "formControlName", "city", "name", "city", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["disabled", "", 3, "ngValue"], ["class", "text-uppercase", 3, "ngValue", "selected", 4, "ngFor", "ngForOf"], ["for", "name"], ["placeholder", "Select", "formControlName", "state", "name", "state", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["disabled", "", 3, "ngValue", "selected"], ["placeholder", "Select", "formControlName", "country", "name", "country", 1, "form-control", 3, "ngModel", "ngClass", "change", "ngModelChange"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "signup-close", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["class", "btn btn-primary text-center", "type", "button", 3, "disabled", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary text-center", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["class", "error-text", 4, "ngIf"], [1, "error-text"], ["formControlName", "gender", "name", "gender", "type", "radio", 3, "id", "value", "ngModel", "ngClass", "ngModelChange"], [1, "invalid-feedback", "error-display-block"], ["formControlName", "married", "name", "married", "type", "radio", 3, "id", "value", "ngModel", "ngClass", "ngModelChange"], [1, "text-uppercase", 3, "ngValue", "selected"], [3, "value", "selected"], ["type", "button", 1, "btn", "btn-primary", "text-center", 3, "disabled"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 3, "click"], ["for", "oldPassword"], ["type", "text", "formControlName", "oldPassword", "id", "oldPassword", "placeholder", "Old Password", "name", "oldPassword", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "fullname"], ["type", "text", "formControlName", "fullName", "id", "fullName", "placeholder", "Full Name", "name", "fullName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "formControlName", "newPassword", "placeholder", "New password", "name", "newPassword", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "ConfirmPassword"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm password", "name", "confirmPassword", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_4_listener() {
            return ctx.selectTab(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_7_listener() {
            return ctx.selectTab(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_10_listener() {
            return ctx.selectTab(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SettingsComponent_div_12_Template, 76, 16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SettingsComponent_div_13_Template, 107, 68, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SettingsComponent_div_14_Template, 44, 23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab === 3);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]],
      styles: [".radio-label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.error-display-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.img-preview[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.img-picture[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    position: relative;\r\n    border-radius: 100%;\r\n    overflow: hidden;\r\n    border: 12px solid #fff;\r\n}\r\n\r\n.content-display-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.content-cursor-pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlhY2NvdW50L2FjY291bnQtZGV0YWlscy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9teWFjY291bnQvYWNjb3VudC1kZXRhaWxzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8tbGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5lcnJvci1kaXNwbGF5LWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW1nLXByZXZpZXcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctcGljdHVyZSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5jb250ZW50LWRpc3BsYXktbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29udGVudC1jdXJzb3ItcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_6__["LoginUtilityService"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_8__["ProjectPropertiesService"]
        }, {
          type: src_app_services_address_service__WEBPACK_IMPORTED_MODULE_9__["AddressService"]
        }];
      }, {
        el: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/forget-password/forget-password.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/myaccount/forget-password/forget-password.component.ts ***!
    \************************************************************************/

  /*! exports provided: ForgetPasswordComponent */

  /***/
  function srcAppMyaccountForgetPasswordForgetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
      return ForgetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ForgetPasswordComponent = /*#__PURE__*/function () {
      function ForgetPasswordComponent() {
        _classCallCheck(this, ForgetPasswordComponent);
      }

      _createClass(ForgetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgetPasswordComponent;
    }();

    ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) {
      return new (t || ForgetPasswordComponent)();
    };

    ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgetPasswordComponent,
      selectors: [["app-forget-password"]],
      decls: 2,
      vars: 0,
      template: function ForgetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forget-password works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forget-password',
          templateUrl: './forget-password.component.html',
          styleUrls: ['./forget-password.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/logout/logout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/myaccount/logout/logout.component.ts ***!
    \******************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppMyaccountLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent() {
        _classCallCheck(this, LogoutComponent);
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)();
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 2,
      vars: 0,
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logout',
          templateUrl: './logout.component.html',
          styleUrls: ['./logout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/manage-roles/manage-roles.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/myaccount/manage-roles/manage-roles.component.ts ***!
    \******************************************************************/

  /*! exports provided: ManageRolesComponent */

  /***/
  function srcAppMyaccountManageRolesManageRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageRolesComponent", function () {
      return ManageRolesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/userroleenum */
    "./src/app/shared/userroleenum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/loginutilityservice */
    "./src/app/shared/services/loginutilityservice.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../managerole-superadmin/managerole-superadmin.component */
    "./src/app/myaccount/managerole-superadmin/managerole-superadmin.component.ts");
    /* harmony import */


    var _shared_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/registrationform/registrationform.component */
    "./src/app/shared/registrationform/registrationform.component.ts");
    /* harmony import */


    var _managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../managerole-admin/managerole-admin.component */
    "./src/app/myaccount/managerole-admin/managerole-admin.component.ts");
    /* harmony import */


    var _managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../managerole-manager/managerole-manager.component */
    "./src/app/myaccount/managerole-manager/managerole-manager.component.ts");
    /* harmony import */


    var _managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../managerole-user/managerole-user.component */
    "./src/app/myaccount/managerole-user/managerole-user.component.ts");

    function ManageRolesComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_li_3_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.selectRole(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Super Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.createdByRole === 1);
      }
    }

    function ManageRolesComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_li_4_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.selectRole(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.createdByRole === 2);
      }
    }

    function ManageRolesComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_li_5_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selectRole(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manager");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.createdByRole === 3);
      }
    }

    function ManageRolesComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_li_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.selectRole(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManageRolesComponent_div_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-registrationform", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateUserTable", function ManageRolesComponent_div_7_div_9_Template_app_registrationform_updateUserTable_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.updateUserTable($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("registerInputData", ctx_r16.roleInputData);
      }
    }

    function ManageRolesComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Super Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "With supporting text below as a natural lead-in to additional content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_div_7_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.register(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create New Super Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-managerole-superadmin", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManageRolesComponent_div_7_div_9_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("superAdminList", ctx_r4.superAdminList)("columnDefs", ctx_r4.columnDefs)("roleDefinitions", ctx_r4.roleDefinitions)("accountStatusDefinitions", ctx_r4.accountStatusDefinitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showRegistration);
      }
    }

    function ManageRolesComponent_div_8_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_div_8_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.register(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create New Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManageRolesComponent_div_8_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-registrationform", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateUserTable", function ManageRolesComponent_div_8_div_8_Template_app_registrationform_updateUserTable_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.updateUserTable($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("registerInputData", ctx_r22.roleInputData);
      }
    }

    function ManageRolesComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "With supporting text below as a natural lead-in to additional content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageRolesComponent_div_8_button_5_Template, 2, 0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-managerole-admin", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageRolesComponent_div_8_div_8_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.createdByRole === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adminList", ctx_r5.adminList)("columnDefs", ctx_r5.columnDefs)("roleDefinitions", ctx_r5.roleDefinitions)("accountStatusDefinitions", ctx_r5.accountStatusDefinitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showRegistration);
      }
    }

    function ManageRolesComponent_div_9_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_div_9_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.register(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Manager");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManageRolesComponent_div_9_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-registrationform", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateUserTable", function ManageRolesComponent_div_9_div_8_Template_app_registrationform_updateUserTable_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.updateUserTable($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("registerInputData", ctx_r28.roleInputData);
      }
    }

    function ManageRolesComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manager");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "With supporting text below as a natural lead-in to additional content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageRolesComponent_div_9_button_5_Template, 2, 0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-managerole-manager", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageRolesComponent_div_9_div_8_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.createdByRole === 1 || ctx_r6.createdByRole === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("managerList", ctx_r6.managerList)("columnDefs", ctx_r6.columnDefs)("roleDefinitions", ctx_r6.roleDefinitions)("accountStatusDefinitions", ctx_r6.accountStatusDefinitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.showRegistration);
      }
    }

    function ManageRolesComponent_div_10_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRolesComponent_div_10_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.register(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create New User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManageRolesComponent_div_10_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-registrationform", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateUserTable", function ManageRolesComponent_div_10_div_8_Template_app_registrationform_updateUserTable_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.updateUserTable($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("registerInputData", ctx_r34.roleInputData);
      }
    }

    function ManageRolesComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "With supporting text below as a natural lead-in to additional content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageRolesComponent_div_10_button_5_Template, 2, 0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-managerole-user", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageRolesComponent_div_10_div_8_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.createdByRole === 1 || ctx_r7.createdByRole === 2 || ctx_r7.createdByRole === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userList", ctx_r7.userList)("columnDefs", ctx_r7.columnDefs)("roleDefinitions", ctx_r7.roleDefinitions)("accountStatusDefinitions", ctx_r7.accountStatusDefinitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.showRegistration);
      }
    }

    var ManageRolesComponent = /*#__PURE__*/function () {
      function ManageRolesComponent(_activatedRoute, _loginUtilityService, _userService) {
        _classCallCheck(this, ManageRolesComponent);

        this._activatedRoute = _activatedRoute;
        this._loginUtilityService = _loginUtilityService;
        this._userService = _userService;
        this.showSpinner = false;
        this.roleTab = 1;
        this.showRegistration = false;
        this.roleInputData = {};
        this.roleDefinitions = {
          1: 'Super Admin',
          2: 'Admin',
          3: 'Manager',
          4: 'User'
        };
        this.accountStatusDefinitions = {
          1: 'ACTIVE',
          2: 'INACTIVE',
          3: 'LOCKED',
          4: 'DELETED'
        };
      }

      _createClass(ManageRolesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.columnDefs = ['USERID', 'FULL NAME', 'USER NAME', 'EMAIL', 'PHONE NUMBER', 'ROLE', 'ACCOUNT STATUS']; // this.createdByRole = +this._activatedRoute.snapshot.params['id'];

          this.subscriptions = this._loginUtilityService.getUserLoginData$().subscribe(function (userLoginData) {
            if (userLoginData && userLoginData.userRole) {
              debugger;
              _this15.createdByRole = userLoginData.userRole;
              _this15.roleTab = userLoginData.userRole;

              _this15.getAllUsersOnRole(_this15.roleTab);
            }
          });
        }
      }, {
        key: "getAllUsersOnRole",
        value: function getAllUsersOnRole(role) {
          var _this16 = this;

          this.showSpinner = true;

          this._userService.getAllUsersOnRole(role).subscribe(function (data) {
            debugger;
            console.log(data);

            if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].SUPERADMIN) {
              _this16.superAdminList = data;
            } else if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].ADMIN) {
              _this16.adminList = data;
            } else if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].MANAGER) {
              _this16.managerList = data;
            } else {
              _this16.userList = data;
            }

            _this16.showSpinner = false;
          });
        }
      }, {
        key: "selectRole",
        value: function selectRole(role) {
          this, this.roleTab = role;

          if ((this.superAdminList === undefined || this.superAdminList.length === 0) && role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].SUPERADMIN) {
            this.getAllUsersOnRole(this.roleTab);
          } else if ((this.adminList === undefined || this.adminList.length === 0) && role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].ADMIN) {
            this.getAllUsersOnRole(this.roleTab);
          } else if ((this.managerList === undefined || this.managerList.length === 0) && role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].MANAGER) {
            this.getAllUsersOnRole(this.roleTab);
          } else {
            if (this.userList === undefined || this.userList.length === 0) this.getAllUsersOnRole(this.roleTab);
          }

          debugger;
        }
      }, {
        key: "register",
        value: function register(role) {
          this.roleInputData.createdByRole = this.createdByRole;
          this.roleInputData.createRole = role;

          if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].SUPERADMIN) {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].SUPERADMIN;
          } else if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].ADMIN) {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].ADMIN;
          } else if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].MANAGER) {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].MANAGER;
          } else {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].USER;
          }

          this.showRegistration = true;
        }
      }, {
        key: "updateUserTable",
        value: function updateUserTable(role) {
          this.getAllUsersOnRole(role);
        }
      }]);

      return ManageRolesComponent;
    }();

    ManageRolesComponent.ɵfac = function ManageRolesComponent_Factory(t) {
      return new (t || ManageRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_3__["LoginUtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    ManageRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageRolesComponent,
      selectors: [["app-manage-roles"]],
      decls: 11,
      vars: 8,
      consts: [[1, "card"], [1, "card-header"], [1, "nav", "nav-tabs", "card-header-tabs"], ["class", "nav-item", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "nav-item"], ["data-toggle", "tab", 1, "nav-link", 3, "click"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["data-toggle", "modal", "href", "#myModal", 1, "btn", "btn-primary", 3, "click"], [3, "superAdminList", "columnDefs", "roleDefinitions", "accountStatusDefinitions"], [4, "ngIf"], [3, "registerInputData", "updateUserTable"], ["data-toggle", "modal", "class", "btn btn-primary", "href", "#myModal", 3, "click", 4, "ngIf"], [3, "adminList", "columnDefs", "roleDefinitions", "accountStatusDefinitions"], [3, "managerList", "columnDefs", "roleDefinitions", "accountStatusDefinitions"], [3, "userList", "columnDefs", "roleDefinitions", "accountStatusDefinitions"]],
      template: function ManageRolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageRolesComponent_li_3_Template, 3, 2, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManageRolesComponent_li_4_Template, 3, 2, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageRolesComponent_li_5_Template, 3, 2, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageRolesComponent_li_6_Template, 3, 0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManageRolesComponent_div_7_Template, 10, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageRolesComponent_div_8_Template, 9, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManageRolesComponent_div_9_Template, 9, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManageRolesComponent_div_10_Template, 9, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createdByRole === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createdByRole === 1 || ctx.createdByRole === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createdByRole === 1 || ctx.createdByRole === 2 || ctx.createdByRole === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createdByRole === 1 || ctx.createdByRole === 2 || ctx.createdByRole === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleTab === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleTab === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleTab === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleTab === 4);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _managerole_superadmin_managerole_superadmin_component__WEBPACK_IMPORTED_MODULE_6__["ManageroleSuperadminComponent"], _shared_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationformComponent"], _managerole_admin_managerole_admin_component__WEBPACK_IMPORTED_MODULE_8__["ManageroleAdminComponent"], _managerole_manager_managerole_manager_component__WEBPACK_IMPORTED_MODULE_9__["ManageroleManagerComponent"], _managerole_user_managerole_user_component__WEBPACK_IMPORTED_MODULE_10__["ManageroleUserComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9tYW5hZ2Utcm9sZXMvbWFuYWdlLXJvbGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manage-roles',
          templateUrl: './manage-roles.component.html',
          styleUrls: ['./manage-roles.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_3__["LoginUtilityService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/managerole-admin/managerole-admin.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/myaccount/managerole-admin/managerole-admin.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ManageroleAdminComponent */

  /***/
  function srcAppMyaccountManageroleAdminManageroleAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageroleAdminComponent", function () {
      return ManageroleAdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageroleAdminComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r2);
      }
    }

    function ManageroleAdminComponent_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.uid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r1.roleDefinitions[user_r3.userRole]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.accountStatusDefinitions[user_r3.accountStatus]);
      }
    }

    var ManageroleAdminComponent = /*#__PURE__*/function () {
      function ManageroleAdminComponent() {
        _classCallCheck(this, ManageroleAdminComponent);
      }

      _createClass(ManageroleAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManageroleAdminComponent;
    }();

    ManageroleAdminComponent.ɵfac = function ManageroleAdminComponent_Factory(t) {
      return new (t || ManageroleAdminComponent)();
    };

    ManageroleAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageroleAdminComponent,
      selectors: [["app-managerole-admin"]],
      inputs: {
        adminList: "adminList",
        columnDefs: "columnDefs",
        roleDefinitions: "roleDefinitions",
        accountStatusDefinitions: "accountStatusDefinitions"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "table-responsive", "mt-3"], [1, "table", "table-bordered"], [1, "thead-light"], [4, "ngFor", "ngForOf"]],
      template: function ManageroleAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManageroleAdminComponent_th_4_Template, 2, 1, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageroleAdminComponent_tr_6_Template, 16, 9, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnDefs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adminList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9tYW5hZ2Vyb2xlLWFkbWluL21hbmFnZXJvbGUtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageroleAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-managerole-admin',
          templateUrl: './managerole-admin.component.html',
          styleUrls: ['./managerole-admin.component.css']
        }]
      }], function () {
        return [];
      }, {
        adminList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        accountStatusDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/managerole-manager/managerole-manager.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/myaccount/managerole-manager/managerole-manager.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ManageroleManagerComponent */

  /***/
  function srcAppMyaccountManageroleManagerManageroleManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageroleManagerComponent", function () {
      return ManageroleManagerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageroleManagerComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r2);
      }
    }

    function ManageroleManagerComponent_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.uid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r1.roleDefinitions[user_r3.userRole]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.accountStatusDefinitions[user_r3.accountStatus]);
      }
    }

    var ManageroleManagerComponent = /*#__PURE__*/function () {
      function ManageroleManagerComponent() {
        _classCallCheck(this, ManageroleManagerComponent);
      }

      _createClass(ManageroleManagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManageroleManagerComponent;
    }();

    ManageroleManagerComponent.ɵfac = function ManageroleManagerComponent_Factory(t) {
      return new (t || ManageroleManagerComponent)();
    };

    ManageroleManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageroleManagerComponent,
      selectors: [["app-managerole-manager"]],
      inputs: {
        managerList: "managerList",
        columnDefs: "columnDefs",
        roleDefinitions: "roleDefinitions",
        accountStatusDefinitions: "accountStatusDefinitions"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "table-responsive", "mt-3"], [1, "table", "table-bordered"], [1, "thead-light"], [4, "ngFor", "ngForOf"]],
      template: function ManageroleManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManageroleManagerComponent_th_4_Template, 2, 1, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageroleManagerComponent_tr_6_Template, 16, 9, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnDefs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.managerList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9tYW5hZ2Vyb2xlLW1hbmFnZXIvbWFuYWdlcm9sZS1tYW5hZ2VyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageroleManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-managerole-manager',
          templateUrl: './managerole-manager.component.html',
          styleUrls: ['./managerole-manager.component.css']
        }]
      }], function () {
        return [];
      }, {
        managerList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        accountStatusDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/managerole-superadmin/managerole-superadmin.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/myaccount/managerole-superadmin/managerole-superadmin.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ManageroleSuperadminComponent */

  /***/
  function srcAppMyaccountManageroleSuperadminManageroleSuperadminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageroleSuperadminComponent", function () {
      return ManageroleSuperadminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageroleSuperadminComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r2);
      }
    }

    function ManageroleSuperadminComponent_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.uid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r1.roleDefinitions[user_r3.userRole]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.accountStatusDefinitions[user_r3.accountStatus]);
      }
    }

    var ManageroleSuperadminComponent = /*#__PURE__*/function () {
      function ManageroleSuperadminComponent() {
        _classCallCheck(this, ManageroleSuperadminComponent);
      }

      _createClass(ManageroleSuperadminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManageroleSuperadminComponent;
    }();

    ManageroleSuperadminComponent.ɵfac = function ManageroleSuperadminComponent_Factory(t) {
      return new (t || ManageroleSuperadminComponent)();
    };

    ManageroleSuperadminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageroleSuperadminComponent,
      selectors: [["app-managerole-superadmin"]],
      inputs: {
        superAdminList: "superAdminList",
        columnDefs: "columnDefs",
        roleDefinitions: "roleDefinitions",
        accountStatusDefinitions: "accountStatusDefinitions"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "table-responsive", "mt-3"], [1, "table", "table-bordered"], [1, "thead-light"], [4, "ngFor", "ngForOf"]],
      template: function ManageroleSuperadminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManageroleSuperadminComponent_th_4_Template, 2, 1, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageroleSuperadminComponent_tr_6_Template, 16, 9, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnDefs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.superAdminList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9tYW5hZ2Vyb2xlLXN1cGVyYWRtaW4vbWFuYWdlcm9sZS1zdXBlcmFkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageroleSuperadminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-managerole-superadmin',
          templateUrl: './managerole-superadmin.component.html',
          styleUrls: ['./managerole-superadmin.component.css']
        }]
      }], function () {
        return [];
      }, {
        superAdminList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        accountStatusDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/managerole-user/managerole-user.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/myaccount/managerole-user/managerole-user.component.ts ***!
    \************************************************************************/

  /*! exports provided: ManageroleUserComponent */

  /***/
  function srcAppMyaccountManageroleUserManageroleUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageroleUserComponent", function () {
      return ManageroleUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageroleUserComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r2);
      }
    }

    function ManageroleUserComponent_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.uid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r1.roleDefinitions[user_r3.userRole]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.accountStatusDefinitions[user_r3.accountStatus]);
      }
    }

    var ManageroleUserComponent = /*#__PURE__*/function () {
      function ManageroleUserComponent() {
        _classCallCheck(this, ManageroleUserComponent);
      }

      _createClass(ManageroleUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManageroleUserComponent;
    }();

    ManageroleUserComponent.ɵfac = function ManageroleUserComponent_Factory(t) {
      return new (t || ManageroleUserComponent)();
    };

    ManageroleUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageroleUserComponent,
      selectors: [["app-managerole-user"]],
      inputs: {
        userList: "userList",
        columnDefs: "columnDefs",
        roleDefinitions: "roleDefinitions",
        accountStatusDefinitions: "accountStatusDefinitions"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "table-responsive", "mt-3"], [1, "table", "table-bordered"], [1, "thead-light"], [4, "ngFor", "ngForOf"]],
      template: function ManageroleUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManageroleUserComponent_th_4_Template, 2, 1, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageroleUserComponent_tr_6_Template, 16, 9, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnDefs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9tYW5hZ2Vyb2xlLXVzZXIvbWFuYWdlcm9sZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageroleUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-managerole-user',
          templateUrl: './managerole-user.component.html',
          styleUrls: ['./managerole-user.component.css']
        }]
      }], function () {
        return [];
      }, {
        userList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        accountStatusDefinitions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/myaccount/myaccount.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/myaccount/myaccount/myaccount.component.ts ***!
    \************************************************************/

  /*! exports provided: MyaccountComponent */

  /***/
  function srcAppMyaccountMyaccountMyaccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function () {
      return MyaccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/userroleenum */
    "./src/app/shared/userroleenum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/loginutilityservice */
    "./src/app/shared/services/loginutilityservice.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../account-details/settings/settings.component */
    "./src/app/myaccount/account-details/settings/settings.component.ts");
    /* harmony import */


    var _account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../account-details/helpandsupport/helpandsupport.component */
    "./src/app/myaccount/account-details/helpandsupport/helpandsupport.component.ts");
    /* harmony import */


    var _account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../account-details/faq/faq.component */
    "./src/app/myaccount/account-details/faq/faq.component.ts");

    function MyaccountComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "With supporting text below as a natural lead-in to additional content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyaccountComponent_div_12_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.register(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.fullName, "(", ctx_r0.userName, ")");
      }
    }

    function MyaccountComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "With supporting text below as a natural lead-in to additional content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyaccountComponent_div_13_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.register(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Help & Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-helpandsupport");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.fullName, "(", ctx_r1.userName, ")");
      }
    }

    function MyaccountComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "With supporting text below as a natural lead-in to additional content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyaccountComponent_div_14_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.register(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FAQ's");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-faq");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.fullName, "(", ctx_r2.userName, ")");
      }
    }

    var MyaccountComponent = /*#__PURE__*/function () {
      function MyaccountComponent(_router, _activatedRoute, _cdr, _loginUtilityService) {
        _classCallCheck(this, MyaccountComponent);

        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._cdr = _cdr;
        this._loginUtilityService = _loginUtilityService;
        this.tab = 1;
        this.showRegistration = false;
        this.roleInputData = {};
        this.accountSelectedTabIndex = +this._activatedRoute.snapshot.params['tab'];
      }

      _createClass(MyaccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.accountSelectedTabIndex = +this._activatedRoute.snapshot.params['tab'];
          this.userId = +this._activatedRoute.snapshot.params['id'];
          this.subscriptions = this._loginUtilityService.getUserLoginData$().subscribe(function (userLoginData) {
            if (userLoginData && userLoginData.userRole) {
              debugger;
              _this17.userRole = userLoginData.userRole;
              _this17.userName = userLoginData.userName;
              _this17.fullName = userLoginData.fullName;
            }
          });

          if (this.accountSelectedTabIndex === 1) {
            document.getElementById("settings").click();
          } else if (this.accountSelectedTabIndex = 2) {
            document.getElementById("help").click();
          }

          this._cdr.detectChanges();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // this.accountSelectedTabIndex = +this._activatedRoute.snapshot.params['tab'];
          // if (this.accountSelectedTabIndex === 1) {
          //   document.getElementById("settings").click();
          // } else if (this.accountSelectedTabIndex = 2) {
          //   document.getElementById("help").click();
          // }
          this._cdr.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._cdr.detectChanges();
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // this.accountSelectedTabIndex = +this._activatedRoute.snapshot.params['tab'];
          // if (this.accountSelectedTabIndex === 1) {
          //   document.getElementById("settings").click();
          // } else if (this.accountSelectedTabIndex = 2) {
          //   document.getElementById("help").click();
          // }
          this._cdr.detectChanges();
        }
      }, {
        key: "selectTab",
        value: function selectTab(tabIndex) {
          this.accountSelectedTabIndex = tabIndex;

          if (tabIndex === 1) {// this.navigateToSettings(tabIndex);
          } else if (tabIndex === 2) {// this.navigateToHelpAndSupport(tabIndex);
          }
        }
      }, {
        key: "navigateToSettings",
        value: function navigateToSettings(tab) {//this._router.navigate(['../../../' + tab + '/' + 'settings'], { relativeTo: this._activatedRoute });
        }
      }, {
        key: "navigateToHelpAndSupport",
        value: function navigateToHelpAndSupport(tab) {//this._router.navigate(['../../../' + tab + '/' + 'helpandsupport'], { relativeTo: this._activatedRoute });
        }
      }, {
        key: "register",
        value: function register(role) {
          this.roleInputData.createRole = role;

          if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].SUPERADMIN) {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].SUPERADMIN;
          } else if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].ADMIN) {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].ADMIN;
          } else if (role === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleType"].MANAGER) {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].MANAGER;
          } else {
            this.roleInputData.roleName = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_1__["UserRoleTypeName"].USER;
          }

          this.showRegistration = true;
        }
      }]);

      return MyaccountComponent;
    }();

    MyaccountComponent.ɵfac = function MyaccountComponent_Factory(t) {
      return new (t || MyaccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_3__["LoginUtilityService"]));
    };

    MyaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyaccountComponent,
      selectors: [["app-myaccount"]],
      decls: 15,
      vars: 7,
      consts: [[1, "card"], [1, "card-header"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item"], ["id", "settings", "data-toggle", "tab", 1, "nav-link", 3, "click"], ["id", "help", "data-toggle", "tab", 1, "nav-link", 3, "click"], ["data-toggle", "tab", 1, "nav-link", "disabled", "active", 3, "click"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "card-title", "text-uppercase"], [1, "card-text"], ["data-toggle", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "card-title"], ["data-toggle", "modal", "href", "#myModal", 1, "btn", "btn-primary", 3, "click"]],
      template: function MyaccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyaccountComponent_Template_a_click_4_listener() {
            return ctx.selectTab(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyaccountComponent_Template_a_click_7_listener() {
            return ctx.selectTab(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Help & Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyaccountComponent_Template_a_click_10_listener() {
            return ctx.selectTab(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "FAQ's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyaccountComponent_div_12_Template, 8, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MyaccountComponent_div_13_Template, 8, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MyaccountComponent_div_14_Template, 8, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.accountSelectedTabIndex === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.accountSelectedTabIndex === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountSelectedTabIndex === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountSelectedTabIndex === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountSelectedTabIndex === 3);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _account_details_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"], _account_details_helpandsupport_helpandsupport_component__WEBPACK_IMPORTED_MODULE_6__["HelpandsupportComponent"], _account_details_faq_faq_component__WEBPACK_IMPORTED_MODULE_7__["FaqComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YWNjb3VudC9teWFjY291bnQvbXlhY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyaccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myaccount',
          templateUrl: './myaccount.component.html',
          styleUrls: ['./myaccount.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_3__["LoginUtilityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/mylogin/mylogin.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/myaccount/mylogin/mylogin.component.ts ***!
    \********************************************************/

  /*! exports provided: MyloginComponent */

  /***/
  function srcAppMyaccountMyloginMyloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyloginComponent", function () {
      return MyloginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_must_match_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/must-match-password */
    "./src/app/helpers/must-match-password.ts");
    /* harmony import */


    var src_app_helpers_username_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/username-validation */
    "./src/app/helpers/username-validation.ts");
    /* harmony import */


    var src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/userroleenum */
    "./src/app/shared/userroleenum.ts");
    /* harmony import */


    var src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.component.routes */
    "./src/app/app.component.routes.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/login-service */
    "./src/app/services/login-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/loginutilityservice */
    "./src/app/shared/services/loginutilityservice.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_imgcaurousel_imgcaurousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../common/imgcaurousel/imgcaurousel.component */
    "./src/app/common/imgcaurousel/imgcaurousel.component.ts");

    function MyloginComponent_div_74_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_74_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginFormControl.userName.errors.required);
      }
    }

    function MyloginComponent_div_82_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_82_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginFormControl.password.errors.required);
      }
    }

    function MyloginComponent_button_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign In ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.showSpinner);
      }
    }

    function MyloginComponent_button_90_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyloginComponent_button_90_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_113_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_113_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.registerForm.get("userName").errors["userNameValidation"], " ");
      }
    }

    function MyloginComponent_div_113_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_113_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyloginComponent_div_113_div_2_Template, 2, 1, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.registerFormControl.userName.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.registerForm.get("userName").hasError("userNameValidation"));
      }
    }

    function MyloginComponent_div_118_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_118_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerFormControl.email.errors.required);
      }
    }

    function MyloginComponent_div_124_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_124_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_124_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.registerFormControl.password.errors.required);
      }
    }

    function MyloginComponent_div_129_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_129_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number must be at least 10 digits ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_129_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyloginComponent_div_129_div_2_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.registerFormControl.phoneNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.registerFormControl.phoneNumber.errors.minLenght);
      }
    }

    function MyloginComponent_div_136_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_136_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_136_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_136_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyloginComponent_div_136_div_2_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.registerFormControl.confirmPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.registerFormControl.confirmPassword.errors.mustMatchPassword);
      }
    }

    function MyloginComponent_div_140_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_140_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_140_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.registerFormControl.agreeTerms.errors.required);
      }
    }

    function MyloginComponent_button_146_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Signup ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.showSpinner);
      }
    }

    function MyloginComponent_button_147_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyloginComponent_button_147_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.registerUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_163_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyloginComponent_div_163_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyloginComponent_div_163_div_1_Template, 2, 0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.resetFormControl.email.errors.required);
      }
    }

    function MyloginComponent_button_172_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reset Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.showSpinner);
      }
    }

    function MyloginComponent_button_173_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyloginComponent_button_173_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.resetPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var MyloginComponent = /*#__PURE__*/function () {
      function MyloginComponent(_userService, _loginService, toastr, formBuilder, formBuilderLogin, _router, _activatedRoute, _loginUtilityService) {
        _classCallCheck(this, MyloginComponent);

        this._userService = _userService;
        this._loginService = _loginService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.formBuilderLogin = formBuilderLogin;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._loginUtilityService = _loginUtilityService;
        this.showSpinner = false;
        this.user = {};
        this.userDetails = {};
        this.userSignupDetails = {};
        this.resetPasswordDetails = {};
        this.registerUserSubmitted = false;
        this.loginSubmitted = false;
        this.acceptTerms = false;
        this.resetPasswordSubmitted = false;
        this.createRegisterForm();
        this.createLoginForm();
        this.createResetPasswordForm();
      }

      _createClass(MyloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser(); // setTimeout(() => this.toastr.success('New', 'dfg', { timeOut: 10000, progressBar: true, positionClass: "toast-bottom-left" }))
        }
      }, {
        key: "signupModalPopUp",
        value: function signupModalPopUp() {
          this.userSignupDetails = {};
          this.registerUserSubmitted = false;
        }
      }, {
        key: "resetPasswordModalPopUp",
        value: function resetPasswordModalPopUp() {
          this.resetPasswordDetails = {};
          this.resetPasswordSubmitted = false;
        }
      }, {
        key: "createRegisterForm",
        value: function createRegisterForm() {
          this.registerForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_helpers_username_validation__WEBPACK_IMPORTED_MODULE_3__["UserNameValidation"]]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            agreeTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: Object(src_app_helpers_must_match_password__WEBPACK_IMPORTED_MODULE_2__["MustMatchPassword"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "createLoginForm",
        value: function createLoginForm() {
          this.loginForm = this.formBuilderLogin.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "createResetPasswordForm",
        value: function createResetPasswordForm() {
          this.resetPasswordForm = this.formBuilderLogin.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this18 = this;

          this.resetPasswordSubmitted = true;
          this.showSpinner = true;

          if (this.resetPasswordForm.invalid) {
            setTimeout(function () {
              return _this18.toastr.warning('Please enter valid Registered Email Address', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          this._loginService.resetUserLogin(this.resetPasswordDetails).subscribe(function (data) {
            if (data !== null && data.success) {
              console.log(data);
              console.log("Success");
              setTimeout(function () {
                return _this18.toastr.success('Your password has reseted Successful, New password sent to - ' + data.email, 'Reset Password', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
              document.getElementById("forget-password-close").click();

              _this18.clearData();

              _this18.createRegisterForm();

              _this18.loginForm.reset();

              _this18.createResetPasswordForm();

              _this18.showSpinner = false;
            } else {
              console.log('Failed');
              _this18.showSpinner = false;
              setTimeout(function () {
                return _this18.toastr.error('Password reset Failed - ' + data.message, 'Reset Password', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
            }
          }, function (error) {
            console.log('Failed');
            _this18.showSpinner = false;
            setTimeout(function () {
              return _this18.toastr.error('Password reset Failed - unknown error', 'Signup', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this19 = this;

          this.loginSubmitted = true;
          this.showSpinner = true;

          if (this.loginForm.invalid) {
            this.showSpinner = false;
            return;
          }

          this._loginService.authenticateUserLogin(this.user).subscribe(function (data) {
            _this19.userDetails = data;
            console.log(data);
            _this19.showSpinner = false;

            if (data.accountStatus === 3) {
              setTimeout(function () {
                return _this19.toastr.error(data.errors[0].errorMessage, 'Account Locked', {
                  timeOut: 10000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
            } else if (data.status === true && data.accountStatus === 1) {
              _this19._loginUtilityService.setUserLoginData(_this19.userDetails);

              setTimeout(function () {
                return _this19.toastr.success('Login Successful - Welcome ' + data.userName, 'Login', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });

              if (_this19.userDetails.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_4__["UserRoleType"].USER) {
                _this19._router.navigate(['../' + src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_5__["Project353Routes"].myhomeview + '/' + _this19.userDetails.uid], {
                  relativeTo: _this19._activatedRoute
                });
              } else if (_this19.userDetails.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_4__["UserRoleType"].SUPERADMIN || _this19.userDetails.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_4__["UserRoleType"].ADMIN || _this19.userDetails.userRole === src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_4__["UserRoleType"].MANAGER) {
                _this19._router.navigate(['../' + src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_5__["Project353Routes"].mybusiness + '/' + _this19.userDetails.uid + '/' + src_app_app_component_routes__WEBPACK_IMPORTED_MODULE_5__["Project353Routes"].manageroles], {
                  relativeTo: _this19._activatedRoute
                });
              }
            } else if (data.status === false && data.accountStatus === 1 || data.accountStatus === 0) {
              setTimeout(function () {
                return _this19.toastr.error(data.errors[0].errorMessage, 'Invalid', {
                  timeOut: 10000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
            }
          }, function (error) {
            console.log(error);
            _this19.showSpinner = false;
            setTimeout(function () {
              return _this19.toastr.error('Login Failed', 'Login', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this20 = this;

          this.registerUserSubmitted = true;
          this.showSpinner = true;

          if (this.registerForm.invalid) {
            setTimeout(function () {
              return _this20.toastr.warning('You must fill all the Required fields', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          if (!this.acceptTerms) {
            this.showSpinner = false;
            setTimeout(function () {
              return _this20.toastr.warning('You must accept Terms & Conditions', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            return;
          }

          this.userSignupDetails.createdBy = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_4__["UserRoleType"].USER;
          this.userSignupDetails.role = src_app_shared_userroleenum__WEBPACK_IMPORTED_MODULE_4__["UserRoleType"].USER; // this.userSignupDetails.roleName = UserRoleTypeName.USER;

          this._userService.saveUser(this.userSignupDetails).subscribe(function (data) {
            _this20.user = data;

            if (_this20.user.errors === null) {
              _this20.showSpinner = false;
              setTimeout(function () {
                return _this20.toastr.success('Registration Successful', 'Signup', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
              document.getElementById("signup-close").click();

              _this20.clearData();
            } else {
              _this20.showSpinner = false;

              _this20.toastr.error(_this20.user.errors[0].errorMessage);
            }
          }, function (error) {
            console.log(error);
            _this20.showSpinner = false;
            setTimeout(function () {
              return _this20.toastr.error('Registration Failed - unknown error', 'Signup', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });
        }
      }, {
        key: "clearData",
        value: function clearData() {
          this.user = {};
          this.userSignupDetails = {};
          this.resetPasswordDetails = {};
        }
      }, {
        key: "close",
        value: function close() {
          this.loginForm.reset(); // this.createLoginForm();
          // this.createRegisterForm();
          // this.createResetPasswordForm();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this21 = this;

          this.showSpinner = true;

          var a = this._userService.getUsers().subscribe(function (data) {
            console.log(data);
            _this21.showSpinner = false;
          });
        }
      }, {
        key: "registerFormControl",
        get: function get() {
          return this.registerForm.controls;
        }
      }, {
        key: "loginFormControl",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "resetFormControl",
        get: function get() {
          return this.resetPasswordForm.controls;
        }
      }]);

      return MyloginComponent;
    }();

    MyloginComponent.ɵfac = function MyloginComponent_Factory(t) {
      return new (t || MyloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_10__["LoginUtilityService"]));
    };

    MyloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyloginComponent,
      selectors: [["app-mylogin"]],
      decls: 174,
      vars: 54,
      consts: [[1, "login-top-margin"], [1, "row"], [1, "col-sm-8"], [1, "card", "card-data-height"], [1, "card-header", "card", "bg-info", "text-white", "text-center"], [1, "card-body"], ["data-spy", "scroll", "data-target", "#myScrollspy", "data-offset", "1", 1, "scroll-height"], [1, "container-fluid", "data-cls"], ["id", "myScrollspy", 1, "col-sm-3", "col-4"], [1, "nav", "nav-pills", "flex-column"], [1, "nav-item"], ["href", "#section1", 1, "nav-link", "active"], ["href", "#section2", 1, "nav-link"], ["href", "#section3", 1, "nav-link"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "#", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#section41", 1, "dropdown-item"], ["href", "#section42", 1, "dropdown-item"], [1, "col-sm-9", "col-8", "content-data"], ["id", "section1", 1, "bg-success", "content-data"], ["id", "section2", 1, "bg-warning", "content-data"], ["id", "section3", 1, "bg-secondary", "content-data"], ["id", "section41", 1, "bg-danger", "content-data"], ["id", "section42", 1, "bg-info", "content-data"], [1, "card-footer", "text-center"], [1, "col-sm-8", "text-right"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "col-sm-4"], [1, "card"], ["novalidate", "", 3, "formGroup"], ["for", "email"], ["formControlName", "userName", "type", "text", "id", "unn", "placeholder", "User Name / Email", "name", "email", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "name", "pswd", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["data-toggle", "modal", "href", "#forgerPasswordModal", 1, "forgetPwd-link", 3, "click"], [1, "col-sm-4", "text-right"], ["class", "btn btn-primary text-center", "type", "button", 3, "disabled", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary text-center", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "href", "#myModal", 3, "click"], ["id", "myModal", 1, "modal"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "text-center"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "col-sm-6", "form-group"], ["type", "text", "formControlName", "userName", "id", "userName", "placeholder", "User Name", "name", "usersignupemail1", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-sm-6"], ["type", "text", "formControlName", "email", "id", "email", "maxlength", "80", "placeholder", "Email Address", "name", "usersignupemail", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "name", "usersignuppswd", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "phoneNumber"], ["type", "number", "formControlName", "phoneNumber", "placeholder", "Phone Number", "name", "usersignupphonenumber", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "ConfirmPassword"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm password", "name", "usersignupcnfpswd", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "modal-footer"], [1, "col-sm-5", "text-right"], ["formControlName", "agreeTerms", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "button", "id", "signup-close", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["id", "forgerPasswordModal", 1, "modal"], ["type", "text", "formControlName", "email", "id", "forget-email", "placeholder", "Registered Email Address", "name", "usersignupemail", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "button", "id", "forget-password-close", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "text-center", 3, "disabled"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 3, "click"], ["class", "error-text", 4, "ngIf"], [1, "error-text"]],
      template: function MyloginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Coming up features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Section 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Section 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Section 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Section 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Section 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Try to scroll this section and look at the navigation list while scrolling!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Section 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Try to scroll this section and look at the navigation list while scrolling!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Section 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Try to scroll this section and look at the navigation list while scrolling!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Section 4-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Try to scroll this section and look at the navigation list while scrolling!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Section 4-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Try to scroll this section and look at the navigation list while scrolling!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "I accept the Terms & Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Already Member Sign In Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "User Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_73_listener($event) {
            return ctx.user.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, MyloginComponent_div_74_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_81_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, MyloginComponent_div_82_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyloginComponent_Template_a_click_86_listener() {
            return ctx.resetPasswordModalPopUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Forget password? Reset it here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, MyloginComponent_button_89_Template, 3, 1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, MyloginComponent_button_90_Template, 2, 0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyloginComponent_Template_a_click_92_listener() {
            return ctx.signupModalPopUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Not a Member? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Signup Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-imgcaurousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "User Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_112_listener($event) {
            return ctx.userSignupDetails.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, MyloginComponent_div_113_Template, 3, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_117_listener($event) {
            return ctx.userSignupDetails.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, MyloginComponent_div_118_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_123_listener($event) {
            return ctx.userSignupDetails.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, MyloginComponent_div_124_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Phone Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_128_listener($event) {
            return ctx.userSignupDetails.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, MyloginComponent_div_129_Template, 3, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Confirm Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_135_listener($event) {
            return ctx.userSignupDetails.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, MyloginComponent_div_136_Template, 3, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, MyloginComponent_div_140_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_142_listener($event) {
            return ctx.acceptTerms = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "I accept the Terms & Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyloginComponent_Template_button_click_144_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, MyloginComponent_button_146_Template, 3, 1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, MyloginComponent_button_147_Template, 2, 0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Enter Registered Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyloginComponent_Template_input_ngModelChange_162_listener($event) {
            return ctx.resetPasswordDetails.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, MyloginComponent_div_163_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Password will be sent to Registered Email Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, MyloginComponent_button_172_Template, 3, 1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, MyloginComponent_button_173_Template, 2, 0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.userName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.loginSubmitted && ctx.loginFormControl.userName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginSubmitted && ctx.loginFormControl.userName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.loginSubmitted && ctx.loginFormControl.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginSubmitted && ctx.loginFormControl.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.userName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.userName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.userName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.phoneNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.phoneNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.phoneNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.confirmPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.confirmPassword.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.confirmPassword.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.agreeTerms.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acceptTerms)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.agreeTerms.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resetPasswordDetails.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx.resetPasswordSubmitted && ctx.resetFormControl.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resetPasswordSubmitted && ctx.resetFormControl.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _common_imgcaurousel_imgcaurousel_component__WEBPACK_IMPORTED_MODULE_12__["ImgcaurouselComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: [".image-style[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  background: #aaa;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\nul.nav-pills[_ngcontent-%COMP%] {\r\n  top: 20px;\r\n  position: fixed;\r\n}\r\n\r\ndiv.col-8[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n}\r\n\r\n.login-top-margin[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n.forgetPwd-link[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #007bff;\r\n  text-decoration: underline;\r\n}\r\n\r\n.width-cls[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n}\r\n\r\n  .toast-container {\r\n  width: 500px !important;\r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\nul.nav-pills[_ngcontent-%COMP%] {\r\n  top: -14px;\r\n  position: relative;\r\n}\r\n\r\ndiv.col-8[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  height: 500px !important;\r\n}\r\n\r\n.data-cls[_ngcontent-%COMP%] {\r\n  height: 160px !important;\r\n}\r\n\r\n.card-data-height[_ngcontent-%COMP%] {\r\n  height: 305 !important;\r\n}\r\n\r\n.content-data[_ngcontent-%COMP%] {\r\n  height: 180px !important;\r\n  overflow-y: overlay;\r\n}\r\n\r\n.scroll-height[_ngcontent-%COMP%] {\r\n  height: 165px;\r\n}\r\n\r\n.nav-pills-width[_ngcontent-%COMP%] {\r\n  flex: 0 0 25%;\r\n  max-width: 23%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlhY2NvdW50L215bG9naW4vbXlsb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbXlhY2NvdW50L215bG9naW4vbXlsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXN0eWxlIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNhYWE7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG51bC5uYXYtcGlsbHMge1xyXG4gIHRvcDogMjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuZGl2LmNvbC04IGRpdiB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmxvZ2luLXRvcC1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JnZXRQd2QtbGluayB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLndpZHRoLWNscyB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbjo6bmctZGVlcCAudG9hc3QtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQ29taW5nIHVwIGNvbnRlbnQgKi9cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG51bC5uYXYtcGlsbHMge1xyXG4gIHRvcDogLTE0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmRpdi5jb2wtOCBkaXYge1xyXG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGEtY2xzIHtcclxuICBoZWlnaHQ6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWRhdGEtaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDMwNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVudC1kYXRhIHtcclxuICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcclxufVxyXG5cclxuLnNjcm9sbC1oZWlnaHQge1xyXG4gIGhlaWdodDogMTY1cHg7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMtd2lkdGgge1xyXG4gIGZsZXg6IDAgMCAyNSU7XHJcbiAgbWF4LXdpZHRoOiAyMyU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mylogin',
          templateUrl: './mylogin.component.html',
          styleUrls: ['./mylogin.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_loginutilityservice__WEBPACK_IMPORTED_MODULE_10__["LoginUtilityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myaccount/projectproperties/projectproperties.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/myaccount/projectproperties/projectproperties.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProjectpropertiesComponent */

  /***/
  function srcAppMyaccountProjectpropertiesProjectpropertiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectpropertiesComponent", function () {
      return ProjectpropertiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/project-properties-service */
    "./src/app/services/project-properties-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["fileInput"];

    function ProjectpropertiesComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Property Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectpropertiesComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectpropertiesComponent_div_9_div_1_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projectPropertiesFormControl.propertyName.errors.required);
      }
    }

    function ProjectpropertiesComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", type_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r7);
      }
    }

    function ProjectpropertiesComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Property type is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectpropertiesComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectpropertiesComponent_div_16_div_1_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.projectPropertiesFormControl.type.errors.required);
      }
    }

    function ProjectpropertiesComponent_div_17_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload image is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    function ProjectpropertiesComponent_div_17_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectpropertiesComponent_div_17_div_9_div_1_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r9.projectPropertiesSubmitted && ctx_r9.projectPropertiesRequest.type === "image" && !ctx_r9.uploadImage));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.projectPropertiesRequest.type === "image" && !ctx_r9.uploadImage);
      }
    }

    function ProjectpropertiesComponent_div_17_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProjectpropertiesComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectpropertiesComponent_div_17_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.removeUploadedFile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectpropertiesComponent_div_17_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          return _r10.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Upload Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectpropertiesComponent_div_17_div_9_Template, 2, 4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProjectpropertiesComponent_div_17_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.uploadFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectpropertiesComponent_div_17_div_16_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.projectPropertiesSubmitted && ctx_r3.projectPropertiesRequest.type === "image" && !ctx_r3.uploadImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.uploadImage);
      }
    }

    function ProjectpropertiesComponent_div_18_div_1_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectpropertiesComponent_div_18_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectpropertiesComponent_div_18_div_1_div_4_div_1_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.projectPropertiesRequest.value.length === 0);
      }
    }

    function ProjectpropertiesComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Value:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectpropertiesComponent_div_18_div_1_Template_textarea_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.projectPropertiesRequest.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectpropertiesComponent_div_18_div_1_div_4_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.projectPropertiesRequest.value)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r17.projectPropertiesSubmitted && ctx_r17.projectPropertiesRequest.value.length === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.projectPropertiesSubmitted && ctx_r17.projectPropertiesRequest.value.length === 0);
      }
    }

    function ProjectpropertiesComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectpropertiesComponent_div_18_div_1_Template, 5, 5, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.uploadImage);
      }
    }

    function ProjectpropertiesComponent_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectpropertiesComponent_button_21_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProjectpropertiesComponent = /*#__PURE__*/function () {
      function ProjectpropertiesComponent(formBuilder, toastr, _projectPropertiesService, cd) {
        _classCallCheck(this, ProjectpropertiesComponent);

        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this._projectPropertiesService = _projectPropertiesService;
        this.cd = cd;
        this.projectPropertiesSubmitted = false;
        this.uploadImage = false;
        this.selectedType = '';
        this.typeList = ["text", "image"];
      }

      _createClass(ProjectpropertiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projectPropertiesRequest = {};
          this.createProjectPropertiesForm();
        }
      }, {
        key: "createProjectPropertiesForm",
        value: function createProjectPropertiesForm() {
          this.projectPropertiesForm = this.formBuilder.group({
            propertyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this22 = this;

          this.projectPropertiesSubmitted = true;
          this.showSpinner = true;

          if (this.projectPropertiesForm.invalid && (this.projectPropertiesRequest.type === undefined || this.projectPropertiesRequest.type === 'text') && this.projectPropertiesRequest.value.length === 0) {
            setTimeout(function () {
              return _this22.toastr.warning('You must fill all the Required fields', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          if (this.projectPropertiesRequest.type === 'image' && !this.uploadImage) {
            setTimeout(function () {
              return _this22.toastr.warning('No upload image found', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          debugger;

          this._projectPropertiesService.saveProperties(this.projectPropertiesRequest).subscribe(function (data) {
            if (data !== null && data.status) {
              debugger;
              _this22.projectPropertiesResponse = data;
              console.log(data);
              console.log("Success");
              setTimeout(function () {
                return _this22.toastr.success('Property Saved Successfully', 'Project Properties', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
              _this22.projectPropertiesRequest = {};
              _this22.showSpinner = false;
              _this22.projectPropertiesSubmitted = false;
            } else {
              console.log('Failed');
              _this22.showSpinner = false;
              setTimeout(function () {
                return _this22.toastr.error('Property Saving Failed - ' + data.errors[0].errorMessage, 'Project Properties', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
            }
          }, function (error) {
            console.log('Failed');
            _this22.showSpinner = false;
            setTimeout(function () {
              return _this22.toastr.error('Property Saving Failed - unknown error', 'Project Properties', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this23 = this;

          var reader = new FileReader(); // HTML5 FileReader API

          var file = event.target.files[0];

          if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(file); // When file uploads set it to file formcontrol

            reader.onload = function () {
              _this23.uploadImage = true;
              _this23.imageUrl = reader.result;
              _this23.projectPropertiesRequest.value = _this23.imageUrl;
            }; // ChangeDetectorRef since file is loading outside the zone


            this.cd.markForCheck();
          }
        } // Function to remove uploaded file

      }, {
        key: "removeUploadedFile",
        value: function removeUploadedFile() {
          var newFileList = Array.from(this.el.nativeElement.files);
          this.imageUrl = null;
          this.projectPropertiesRequest.value = '';
          this.uploadImage = false;
        }
      }, {
        key: "onTypeSelected",
        value: function onTypeSelected() {
          this.projectPropertiesRequest.value = '';
          this.imageUrl = null;
          this.uploadImage = false;
          this.selectedType = this.projectPropertiesRequest.type;
        }
      }, {
        key: "projectPropertiesFormControl",
        get: function get() {
          return this.projectPropertiesForm.controls;
        }
      }]);

      return ProjectpropertiesComponent;
    }();

    ProjectpropertiesComponent.ɵfac = function ProjectpropertiesComponent_Factory(t) {
      return new (t || ProjectpropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_3__["ProjectPropertiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    ProjectpropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectpropertiesComponent,
      selectors: [["app-projectproperties"]],
      viewQuery: function ProjectpropertiesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
        }
      },
      decls: 22,
      vars: 15,
      consts: [[1, "card-title"], ["novalidate", "", 3, "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-sm-6", "form-group"], ["for", "name"], ["type", "text", "formControlName", "propertyName", "id", "propertyName", "placeholder", "Property Name", "name", "propertyName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Select", "formControlName", "type", "name", "type", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "text-uppercase", 3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", "class", "btn btn-primary text-center", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "text-uppercase", 3, "ngValue"], [1, "row", "custom-wrapper"], [1, "col-md-12"], ["type", "button", "id", "removeimg", "data-dismiss", "modal", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-center", "btn-sm", "ml-2", 3, "click"], ["class", "invalid-feedback content-display-block", 3, "ngClass", 4, "ngIf"], [1, "group-gap"], [1, "avatar-upload"], [1, "avatar-edit"], ["type", "file", "id", "imageUpload", "accept", ".png, .jpg, .jpeg", 1, "content-display-none", 3, "change"], ["fileInput", ""], ["class", "", 4, "ngIf"], [1, "invalid-feedback", "content-display-block", 3, "ngClass"], [1, ""], ["alt", "Girl in a jacket", "width", "500", "height", "333", 3, "src"], ["class", "col-sm-6 form-group", 4, "ngIf"], ["for", "fullname"], ["formControlName", "value", "id", "value", "placeholder", "Full Name", "name", "value", "rows", "3", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 3, "click"]],
      template: function ProjectpropertiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage Project Properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Property Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectpropertiesComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.projectPropertiesRequest.propertyName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectpropertiesComponent_div_9_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Property Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectpropertiesComponent_Template_select_ngModelChange_14_listener($event) {
            return ctx.projectPropertiesRequest.type = $event;
          })("ngModelChange", function ProjectpropertiesComponent_Template_select_ngModelChange_14_listener() {
            return ctx.onTypeSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectpropertiesComponent_option_15_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectpropertiesComponent_div_16_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectpropertiesComponent_div_17_Template, 17, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectpropertiesComponent_div_18_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectpropertiesComponent_button_21_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.projectPropertiesForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.projectPropertiesRequest.propertyName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.projectPropertiesSubmitted && ctx.projectPropertiesFormControl.propertyName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectPropertiesSubmitted && ctx.projectPropertiesFormControl.propertyName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.projectPropertiesRequest.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.projectPropertiesSubmitted && ctx.projectPropertiesFormControl.type.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectPropertiesSubmitted && ctx.projectPropertiesFormControl.type.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedType === "image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedType === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".img-preview[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.img-picture[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    position: relative;\r\n    border-radius: 100%;\r\n    overflow: hidden;\r\n    border: 12px solid #fff;\r\n}\r\n\r\n.content-display-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.content-display-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlhY2NvdW50L3Byb2plY3Rwcm9wZXJ0aWVzL3Byb2plY3Rwcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9teWFjY291bnQvcHJvamVjdHByb3BlcnRpZXMvcHJvamVjdHByb3BlcnRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcHJldmlldyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1waWN0dXJlIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDEycHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmNvbnRlbnQtZGlzcGxheS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50LWRpc3BsYXktYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectpropertiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projectproperties',
          templateUrl: './projectproperties.component.html',
          styleUrls: ['./projectproperties.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: src_app_services_project_properties_service__WEBPACK_IMPORTED_MODULE_3__["ProjectPropertiesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        el: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/mybusiness/mybusiness.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/mybusiness/mybusiness.component.ts ***!
    \****************************************************/

  /*! exports provided: MybusinessComponent */

  /***/
  function srcAppMybusinessMybusinessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MybusinessComponent", function () {
      return MybusinessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MybusinessComponent = /*#__PURE__*/function () {
      function MybusinessComponent() {
        _classCallCheck(this, MybusinessComponent);
      }

      _createClass(MybusinessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MybusinessComponent;
    }();

    MybusinessComponent.ɵfac = function MybusinessComponent_Factory(t) {
      return new (t || MybusinessComponent)();
    };

    MybusinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MybusinessComponent,
      selectors: [["app-mybusiness"]],
      decls: 2,
      vars: 0,
      template: function MybusinessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mybusiness works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YnVzaW5lc3MvbXlidXNpbmVzcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MybusinessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mybusiness',
          templateUrl: './mybusiness.component.html',
          styleUrls: ['./mybusiness.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myhomeview/myhomeview.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/myhomeview/myhomeview.component.ts ***!
    \****************************************************/

  /*! exports provided: MyhomeviewComponent */

  /***/
  function srcAppMyhomeviewMyhomeviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyhomeviewComponent", function () {
      return MyhomeviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MyhomeviewComponent = /*#__PURE__*/function () {
      function MyhomeviewComponent(router) {
        _classCallCheck(this, MyhomeviewComponent);

        this.router = router;
      }

      _createClass(MyhomeviewComponent, [{
        key: "goToPage",
        value: function goToPage() {
          this.router.navigate(['/']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyhomeviewComponent;
    }();

    MyhomeviewComponent.ɵfac = function MyhomeviewComponent_Factory(t) {
      return new (t || MyhomeviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MyhomeviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyhomeviewComponent,
      selectors: [["app-myhomeview"]],
      hostBindings: function MyhomeviewComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function MyhomeviewComponent_beforeunload_HostBindingHandler() {
            return ctx.goToPage();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 2,
      vars: 0,
      template: function MyhomeviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "myhomeview works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215aG9tZXZpZXcvbXlob21ldmlldy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyhomeviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myhomeview',
          templateUrl: './myhomeview.component.html',
          styleUrls: ['./myhomeview.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        goToPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/address-service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/address-service.ts ***!
    \*********************************************/

  /*! exports provided: AddressService */

  /***/
  function srcAppServicesAddressServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressService", function () {
      return AddressService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AddressService = /*#__PURE__*/function () {
      function AddressService(httpClient) {
        _classCallCheck(this, AddressService);

        this.httpClient = httpClient;
      }

      _createClass(AddressService, [{
        key: "getStatesListByCountryId",
        value: function getStatesListByCountryId(countryId) {
          return this.httpClient.get('http://localhost:7077/address/get/state/' + countryId);
        }
      }, {
        key: "getCitiesListByStateId",
        value: function getCitiesListByStateId(stateId) {
          return this.httpClient.get('http://localhost:7077/address/get/city/' + stateId);
        }
      }, {
        key: "getStatesList",
        value: function getStatesList() {
          return this.httpClient.get('http://localhost:7077/common/states');
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return this.httpClient.get('http://localhost:7077/common/countries');
        }
      }, {
        key: "getCountriesAndStatesList",
        value: function getCountriesAndStatesList() {
          return this.httpClient.get('http://localhost:7077/common/countries-and-states');
        }
      }]);

      return AddressService;
    }();

    AddressService.ɵfac = function AddressService_Factory(t) {
      return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AddressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AddressService,
      factory: AddressService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/contact-us-service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/contact-us-service.ts ***!
    \************************************************/

  /*! exports provided: ContactusService */

  /***/
  function srcAppServicesContactUsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusService", function () {
      return ContactusService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ContactusService = /*#__PURE__*/function () {
      function ContactusService(httpClient) {
        _classCallCheck(this, ContactusService);

        this.httpClient = httpClient;
      }

      _createClass(ContactusService, [{
        key: "getProjectProperties",
        value: function getProjectProperties() {
          return this.httpClient.get('http://localhost:7077/contactus/get-all');
        }
      }, {
        key: "saveNotes",
        value: function saveNotes(projectProperties) {
          return this.httpClient.post('http://localhost:7077/contactus/save', projectProperties, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
        }
      }]);

      return ContactusService;
    }();

    ContactusService.ɵfac = function ContactusService_Factory(t) {
      return new (t || ContactusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ContactusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactusService,
      factory: ContactusService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login-service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login-service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(httpClient) {
        _classCallCheck(this, LoginService);

        this.httpClient = httpClient;
      }

      _createClass(LoginService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.httpClient.get('http://localhost:7077/users/all');
        }
      }, {
        key: "authenticateUserLogin",
        value: function authenticateUserLogin(userDetails) {
          return this.httpClient.post('http://localhost:7077/app/login/authenticate', userDetails, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
        }
      }, {
        key: "resetUserLogin",
        value: function resetUserLogin(userDetails) {
          return this.httpClient.post('http://localhost:7077/app/login/reset-password', userDetails, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword(changePasswordRequest) {
          return this.httpClient.post('http://localhost:7077/app/login/change-password', changePasswordRequest, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/project-properties-service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/project-properties-service.ts ***!
    \********************************************************/

  /*! exports provided: ProjectPropertiesService */

  /***/
  function srcAppServicesProjectPropertiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectPropertiesService", function () {
      return ProjectPropertiesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProjectPropertiesService = /*#__PURE__*/function () {
      function ProjectPropertiesService(httpClient) {
        _classCallCheck(this, ProjectPropertiesService);

        this.httpClient = httpClient;
      }

      _createClass(ProjectPropertiesService, [{
        key: "getProjectProperties",
        value: function getProjectProperties() {
          return this.httpClient.get('http://localhost:7077/common/getproperties');
        }
      }, {
        key: "getCountriesAndStatesList",
        value: function getCountriesAndStatesList() {
          return this.httpClient.get('http://localhost:7077/common/countries-and-states');
        }
      }, {
        key: "getStatesList",
        value: function getStatesList() {
          return this.httpClient.get('http://localhost:7077/common/states');
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return this.httpClient.get('http://localhost:7077/common/countries');
        }
      }, {
        key: "saveProperties",
        value: function saveProperties(projectProperties) {
          return this.httpClient.post('http://localhost:7077/project-properties/save', projectProperties, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
        }
      }]);

      return ProjectPropertiesService;
    }();

    ProjectPropertiesService.ɵfac = function ProjectPropertiesService_Factory(t) {
      return new (t || ProjectPropertiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProjectPropertiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectPropertiesService,
      factory: ProjectPropertiesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectPropertiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user-service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user-service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.httpClient.get('http://localhost:7077/users/all');
        }
      }, {
        key: "getAllUsersOnRole",
        value: function getAllUsersOnRole(role) {
          return this.httpClient.get('http://localhost:7077/users/get/allusers/role/' + role);
        }
      }, {
        key: "getUserById",
        value: function getUserById(userId) {
          return this.httpClient.get('http://localhost:7077/users/' + userId);
        }
      }, {
        key: "saveUser",
        value: function saveUser(userDetails) {
          return this.httpClient.post('http://localhost:7077/users/save', userDetails, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
        }
      }, {
        key: "saveSettings",
        value: function saveSettings(userDetails) {
          return this.httpClient.post('http://localhost:7077/users/save', userDetails, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/registrationform/registrationform.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/registrationform/registrationform.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RegistrationformComponent */

  /***/
  function srcAppSharedRegistrationformRegistrationformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationformComponent", function () {
      return RegistrationformComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_username_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/username-validation */
    "./src/app/helpers/username-validation.ts");
    /* harmony import */


    var src_app_helpers_must_match_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/must-match-password */
    "./src/app/helpers/must-match-password.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationformComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationformComponent_div_15_div_1_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerFormControl.fullName.errors.required);
      }
    }

    function RegistrationformComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_20_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.registerForm.get("userName").errors["userNameValidation"], " ");
      }
    }

    function RegistrationformComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationformComponent_div_20_div_1_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationformComponent_div_20_div_2_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerFormControl.userName.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("userName").hasError("userNameValidation"));
      }
    }

    function RegistrationformComponent_div_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationformComponent_div_26_div_1_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerFormControl.email.errors.required);
      }
    }

    function RegistrationformComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number must be at least 10 digits ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationformComponent_div_31_div_1_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationformComponent_div_31_div_2_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.registerFormControl.phoneNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.registerFormControl.phoneNumber.errors.minLenght);
      }
    }

    function RegistrationformComponent_div_38_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationformComponent_div_38_div_1_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.registerFormControl.password.errors.required);
      }
    }

    function RegistrationformComponent_div_43_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_43_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationformComponent_div_43_div_1_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationformComponent_div_43_div_2_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerFormControl.confirmPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerFormControl.confirmPassword.errors.mustMatchPassword);
      }
    }

    function RegistrationformComponent_div_47_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationformComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationformComponent_div_47_div_1_Template, 2, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.registerFormControl.agreeTerms.errors.required);
      }
    }

    function RegistrationformComponent_button_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Signup ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.showSpinner);
      }
    }

    function RegistrationformComponent_button_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationformComponent_button_54_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.registerUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var RegistrationformComponent = /*#__PURE__*/function () {
      function RegistrationformComponent(formBuilder, toastr, _userService) {
        _classCallCheck(this, RegistrationformComponent);

        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this._userService = _userService;
        this.updateUserTable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSpinner = false;
        this.roleName = '';
        this.userSignupDetails = {};
        this.user = {};
        this.registerUserSubmitted = false;
        this.acceptTerms = false;
      }

      _createClass(RegistrationformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.roleName = this.registerInputData.roleName;
          this.signupModalPopUp();
          this.createRegisterForm();
        }
      }, {
        key: "createRegisterForm",
        value: function createRegisterForm() {
          this.registerForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_helpers_username_validation__WEBPACK_IMPORTED_MODULE_2__["UserNameValidation"]]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            agreeTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: Object(src_app_helpers_must_match_password__WEBPACK_IMPORTED_MODULE_3__["MustMatchPassword"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "signupModalPopUp",
        value: function signupModalPopUp() {
          this.userSignupDetails = {};
          this.registerUserSubmitted = false;
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this24 = this;

          this.registerUserSubmitted = true;
          this.showSpinner = true;

          if (this.registerForm.invalid) {
            setTimeout(function () {
              return _this24.toastr.warning('You must fill all the Required fields', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            this.showSpinner = false;
            return;
          }

          if (!this.acceptTerms) {
            this.showSpinner = false;
            setTimeout(function () {
              return _this24.toastr.warning('You must accept Terms & Conditions', 'Alert', {
                timeOut: 3000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
            return;
          }

          this.userSignupDetails.createdBy = this.registerInputData.createdByRole; // change to login role

          this.userSignupDetails.role = this.registerInputData.createRole;
          this.userSignupDetails.roleName = this.registerInputData.roleName;

          this._userService.saveUser(this.userSignupDetails).subscribe(function (data) {
            _this24.user = data;

            if (_this24.user.errors === null) {
              _this24.showSpinner = false;
              setTimeout(function () {
                return _this24.toastr.success('Registration Successful', 'Signup', {
                  timeOut: 4000,
                  progressBar: true,
                  positionClass: "toast-bottom-left"
                });
              });
              document.getElementById("signup-close").click();

              _this24.updateUserTable.emit(_this24.registerInputData.createRole);

              _this24.clearData();
            } else {
              _this24.showSpinner = false;

              _this24.toastr.error(_this24.user.errors[0].errorMessage);
            }
          }, function (error) {
            console.log(error);
            _this24.showSpinner = false;
            setTimeout(function () {
              return _this24.toastr.error('Registration Failed - unknown error', 'Signup', {
                timeOut: 4000,
                progressBar: true,
                positionClass: "toast-bottom-left"
              });
            });
          });
        }
      }, {
        key: "clearData",
        value: function clearData() {
          this.user = {};
          this.userSignupDetails = {};
        }
      }, {
        key: "close",
        value: function close() {}
      }, {
        key: "registerFormControl",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegistrationformComponent;
    }();

    RegistrationformComponent.ɵfac = function RegistrationformComponent_Factory(t) {
      return new (t || RegistrationformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    RegistrationformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationformComponent,
      selectors: [["app-registrationform"]],
      inputs: {
        registerInputData: "registerInputData"
      },
      outputs: {
        updateUserTable: "updateUserTable"
      },
      decls: 55,
      vars: 38,
      consts: [["id", "myModal", 1, "modal"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "text-center"], ["type", "button", "data-dismiss", "modal", 1, "close"], ["novalidate", "", 3, "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-sm-6", "form-group"], ["for", "email"], ["type", "text", "formControlName", "fullName", "id", "fullName", "placeholder", "Full Name", "name", "userFullName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "userName", "id", "userName", "placeholder", "User Name", "name", "usersignupemail1", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-sm-6"], ["type", "text", "formControlName", "email", "id", "email", "maxlength", "80", "placeholder", "Email Address", "name", "usersignupemail", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "phoneNumber"], ["type", "number", "formControlName", "phoneNumber", "placeholder", "Phone Number", "name", "usersignupphonenumber", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "name", "usersignuppswd", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "ConfirmPassword"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm password", "name", "usersignupcnfpswd", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "modal-footer"], [1, "col-sm-5", "text-right"], [1, "form-check"], [1, "form-check-label"], ["formControlName", "agreeTerms", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "button", "id", "signup-close", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["class", "btn btn-primary text-center", "type", "button", 3, "disabled", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary text-center", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["class", "error-text", 4, "ngIf"], [1, "error-text"], ["type", "button", 1, "btn", "btn-primary", "text-center", 3, "disabled"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 3, "click"]],
      template: function RegistrationformComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Full Name(Display Name):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationformComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.userSignupDetails.fullName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationformComponent_div_15_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationformComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.userSignupDetails.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegistrationformComponent_div_20_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationformComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.userSignupDetails.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegistrationformComponent_div_26_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationformComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.userSignupDetails.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegistrationformComponent_div_31_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationformComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.userSignupDetails.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RegistrationformComponent_div_38_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirm Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationformComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.userSignupDetails.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegistrationformComponent_div_43_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RegistrationformComponent_div_47_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationformComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.acceptTerms = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "I accept the Terms & Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationformComponent_Template_button_click_51_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegistrationformComponent_button_53_Template, 3, 1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RegistrationformComponent_button_54_Template, 2, 0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.fullName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.fullName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.fullName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.userName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.userName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.userName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.phoneNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.phoneNumber.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.phoneNumber.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userSignupDetails.confirmPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.confirmPassword.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.confirmPassword.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserSubmitted && ctx.registerFormControl.agreeTerms.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acceptTerms)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.registerUserSubmitted && ctx.registerFormControl.agreeTerms.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yZWdpc3RyYXRpb25mb3JtL3JlZ2lzdHJhdGlvbmZvcm0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registrationform',
          templateUrl: './registrationform.component.html',
          styleUrls: ['./registrationform.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, {
        registerInputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateUserTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/loginutilityservice.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/loginutilityservice.ts ***!
    \********************************************************/

  /*! exports provided: LoginUtilityService */

  /***/
  function srcAppSharedServicesLoginutilityserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginUtilityService", function () {
      return LoginUtilityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoginUtilityService = /*#__PURE__*/function () {
      function LoginUtilityService() {
        _classCallCheck(this, LoginUtilityService);

        this.userLoginData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
      }

      _createClass(LoginUtilityService, [{
        key: "getUserLoginData$",
        value: function getUserLoginData$() {
          return this.userLoginData.asObservable();
        }
      }, {
        key: "setUserLoginData",
        value: function setUserLoginData(userDetails) {
          this.userLoginData.next(userDetails);
        }
      }, {
        key: "clearUserLoginData",
        value: function clearUserLoginData() {
          this.userLoginData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        }
      }]);

      return LoginUtilityService;
    }();

    LoginUtilityService.ɵfac = function LoginUtilityService_Factory(t) {
      return new (t || LoginUtilityService)();
    };

    LoginUtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginUtilityService,
      factory: LoginUtilityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginUtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/userroleenum.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/userroleenum.ts ***!
    \****************************************/

  /*! exports provided: UserRoleType, UserRoleTypeName */

  /***/
  function srcAppSharedUserroleenumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoleType", function () {
      return UserRoleType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoleTypeName", function () {
      return UserRoleTypeName;
    });

    var UserRoleType;

    (function (UserRoleType) {
      UserRoleType[UserRoleType["SUPERADMIN"] = 1] = "SUPERADMIN";
      UserRoleType[UserRoleType["ADMIN"] = 2] = "ADMIN";
      UserRoleType[UserRoleType["MANAGER"] = 3] = "MANAGER";
      UserRoleType[UserRoleType["USER"] = 4] = "USER";
    })(UserRoleType || (UserRoleType = {}));

    var UserRoleTypeName;

    (function (UserRoleTypeName) {
      UserRoleTypeName["SUPERADMIN"] = "Super Admin";
      UserRoleTypeName["ADMIN"] = "Admin";
      UserRoleTypeName["MANAGER"] = "Manager";
      UserRoleTypeName["USER"] = "User";
    })(UserRoleTypeName || (UserRoleTypeName = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }

      window['ngRef'] = ref; // Otherwise, log the boot error
    })["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Z_Other\Z_PROJECT_SELF_353\RepoUI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map