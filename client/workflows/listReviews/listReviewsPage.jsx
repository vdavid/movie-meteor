ListReviewsPage = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      filters: {
        title: ''
      }
    };
  },

  getMeteorData() {
    let data = {};
    /* Load reviews from server asynchronously */
    let handle = Meteor.subscribe('reviews');
    if (handle.ready()) {
      let mongoFilters = {};
      if (this.state.filters.title) {
        mongoFilters.title = {$regex: '.*' + this.state.filters.title + '.*'}
      }

      if (!Reviews.find().count()) {
        Meteor.call('initializeDatabase');
      }
      data.reviews = Reviews.find(mongoFilters).fetch();
    }

    return data;
  },

  search(event){
    this.setState({filter: event.target.value})
  },

  viewReview(id) {
    FlowRouter.go("editReview", {id});
  },

  getReviewById(id) {
    return Reviews.findOne({_id: id}, {reactive: false});
  },

  refreshData() {

  },

  viewAboutPage() {
    FlowRouter.go("about");
  },

  signOut() {
    Meteor.logout();
  },

  closeApp() {
    navigator.app.exitApp();
  },

  render() {
    let appBarAttributes = {};
    if (Meteor.isCordova) {
      appBarAttributes.iconElementLeft =
        <mui.IconButton onClick={this.closeApp}>
          <mui.SvgIcons.NavigationClose />
        </mui.IconButton>;
    } else { // TODO: Remove icon
      appBarAttributes.iconElementLeft =
        <mui.IconButton onClick={this.closeApp}>
          <mui.SvgIcons.NavigationClose />
        </mui.IconButton>;
    }

    return (
      <section>
        <mui.AppBar
          title="Movie Meteor"
          {...appBarAttributes}
          iconElementRight={
            <mui.IconMenu iconButtonElement={
              <mui.IconButton><mui.SvgIcons.NavigationMoreVert /></mui.IconButton>
            }>
              <mui.Menus.MenuItem primaryText="Refresh" onClick={this.refreshData} onMenuIconButtonTouchTap={this.refreshData} />
              <mui.Menus.MenuDivider />
              <mui.Menus.MenuItem primaryText="About" onClick={this.viewAboutPage} onMenuIconButtonTouchTap={this.viewAboutPage} />
              <mui.Menus.MenuItem primaryText="Sign out" onClick={this.signOut} onMenuIconButtonTouchTap={this.signOut} />
            </mui.IconMenu>
        }/>
        <div>
          <input placeholder="Search by title" onChange={this.search}/>
        </div>
        <ReviewList reviews={this.data.reviews || []}/>
      </section>
    );
  }
});

