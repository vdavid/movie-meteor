App = React.createClass({
  mixins: [ReactMeteorData],

  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    let colors = mui.Styles.Colors;
    let colorManipulator = mui.Utils.ColorManipulator;
    let spacing = mui.Styles.Spacing;

    let movieMeteorTheme = {
      spacing: spacing,
      fontFamily: 'Roboto, sans-serif',
      palette: {
        primary1Color: colors.red500,
        primary2Color: colors.green500,
        primary3Color: colors.blue500,
        accent1Color: colors.red900,
        accent2Color: colors.green900,
        accent3Color: colors.blue900,
        textColor: colors.darkBlack,
        alternateTextColor: colors.white,
        canvasColor: colors.white,
        borderColor: colors.grey300,
        disabledColor: colorManipulator.fade(colors.darkBlack, 0.3),
      },
    };
    let themeManager = mui.Styles.ThemeManager;
    return {
      muiTheme: themeManager.getMuiTheme(movieMeteorTheme),
    };
  },

  getMeteorData() {
    return (Meteor.user() !== undefined) ? {
      userId: Meteor.userId()
    } : {};
  },

  render() {
    return this.data.userId !== null ? this.props.content : <LoginPage />;
  }
});