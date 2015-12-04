App.info({
  id: 'com.veszelovszki.movie-meteor',
  name: 'Movie Meteor',
  description: 'Movie review storage application.',
  version: "0.2",
  author: 'David Veszelovszki',
  email: 'veszelovszki@gmail.com',
  website: 'http://movie-meteor.meteor.com'
});


// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');

App.icons({
  // iOS
  'iphone': 'private/mobile/icons/movie-meteor-logo-60x60.png',
  'iphone_2x': 'private/mobile/icons/movie-meteor-logo-60x60@2x.png',
  'ipad': 'private/mobile/icons/movie-meteor-logo-72x72.png',
  'ipad_2x': 'private/mobile/icons/movie-meteor-logo-72x72@2x.png',

  // Android
  'android_ldpi': 'private/mobile/icons/movie-meteor-logo-36x36.png',
  'android_mdpi': 'private/mobile/icons/movie-meteor-logo-48x48.png',
  'android_hdpi': 'private/mobile/icons/movie-meteor-logo-72x72.png',
  'android_xhdpi': 'private/mobile/icons/movie-meteor-logo-96x96.png'
});

App.launchScreens({
  //// iOS
  //'iphone': 'resources/splash/splash-320x480.png',
  //'iphone_2x': 'resources/splash/splash-320x480@2x.png',
  //'iphone5': 'resources/splash/splash-320x568@2x.png',
  //'ipad_portrait': 'resources/splash/splash-768x1024.png',
  //'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  //'ipad_landscape': 'resources/splash/splash-1024x768.png',
  //'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  //'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  //'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
  //'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  //'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  //'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  //'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'private/mobile/splash-screen/splash-screen-720x1280.png',
  'android_xhdpi_landscape': 'private/mobile/splash-screen/splash-screen-1280x720.png'
});
