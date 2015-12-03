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

  render() {
    return (
      <section className="reviewList page">
        <mui.AppBar
          title="Movie Meteor"
          iconElementLeft={<mui.IconButton><mui.SvgIcons.NavigationClose /></mui.IconButton>}
          iconElementRight={
    <mui.IconMenu iconButtonElement={
      <mui.IconButton><mui.SvgIcons.NavigationMoreVert /></mui.IconButton>
    }>
      <mui.Menus.MenuItem primaryText="Refresh" />
      <mui.Menus.MenuItem primaryText="Help" />
      <mui.Menus.MenuItem primaryText="Sign out" />
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

