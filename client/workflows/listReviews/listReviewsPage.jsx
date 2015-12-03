const { AppBar, IconButton, IconMenu, LeftNav, RaisedButton } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

ListReviewsPage = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      filter: {
        title: ''
      }
    };
  },

  getMeteorData() {
    let filter = {};

    if (this.state.filter.title) {
      filter.title = {$regex: '.*' + this.state.filter.title + '.*'}
    }

    return {
      reviews: Reviews.find(filter).fetch()
    };
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
        <RaisedButton label="Default" />
        <div>
          <input placeholder="Search by title" onChange={this.search}/>
        </div>
        <ReviewList reviews={this.data.reviews}/>
      </section>
    );
  }
});

