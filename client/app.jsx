App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return (Meteor.user() !== undefined) ? {
      userId: Meteor.userId()
    } : {};
  },

  render() {
    return this.data.userId !== null ? this.props.content : <LoginPage />;
  }
});