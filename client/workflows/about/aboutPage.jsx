AboutPage = React.createClass({
  goBack() {
    history.go(-1);
  },
  render() {
    return (
      <section>
        <mui.AppBar
          title="Movie Meteor"
          iconElementLeft={<mui.IconButton onClick={this.goBack}><mui.SvgIcons.NavigationArrowBack /></mui.IconButton>}
        />
        <p>
          This is the Movie Meteor app.
        </p>
        <p>Created by Dávid Veszelovszki<br />
          veszelovszki@gmail.com<br />
          2015
        </p>
      </section>
    );
  }
});
