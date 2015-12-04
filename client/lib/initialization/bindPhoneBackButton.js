if (Meteor.isCordova) {
  Meteor.startup(function () {
    document.addEventListener("backbutton", function () {
      if (document.location.pathname === "/") {
        navigator.app.exitApp();
      } else {
        history.go(-1);
      }
    });
    window.onpopstate = function () {
      if (history.state && history.state.initial === true) {
        navigator.app.exitApp();

        //or to suspend meteor add cordova:org.android.tools.suspend@0.1.2
        //window.plugins.Suspend.suspendApp();
      }
    };
  });
}