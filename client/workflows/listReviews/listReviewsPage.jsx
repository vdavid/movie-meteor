const { AppBar, IconButton, IconMenu, LeftNav, RaisedButton } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

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
        <RaisedButton label="Default"/>
        <div>
          <input placeholder="Search by title" onChange={this.search}/>
        </div>
        <ReviewList reviews={this.data.reviews || []}/>
      </section>
    );
  }
});

