EditReviewPage = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    reviewId: React.PropTypes.string
  },


  getInitialState() {
    let document = Reviews.findOne({_id: this.props.reviewId});
    if (document == undefined) return {};
    console.log("getInitialState ");

    return {
      achievementName: document.name,
      achievementDescription: document.description
    };
  },

  getMeteorData() {
    return {
      review: Reviews.findOne({_id: this.props.reviewId}) || {}
    };
  },

  titleChange(event) {
    this.setState({
      title: event.target.value
    });
  },

  opinionChange(event) {
    this.setState({
      opinion: event.target.value
    });
  },

  confirmChange() {
    Meteor.call("updateReview", this.props.reviewId, this.state.title, this.state.opinion);
    FlowRouter.go("viewReview", {reviewId: this.props.reviewId});
  },

  render() {
    if (this.data.review == undefined) {
      return (
        <div>Review with id="{ this.props.reviewId }" does not exist</div>)
    }

    return (
      <div>
        <div>
          <label>Name<input
          type="text"
          placeholder="Movie title"
          onChange={this.titleChange}
          value={this.state.title}/></label>
        </div>
        <div>
          <label>Description<input
          type="text"
          onChange={this.opinionChange}
          placeholder="Opinion"
          value={this.state.opinion}/></label>
        </div>
      </div>
    );
  }
});