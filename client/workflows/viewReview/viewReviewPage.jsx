ViewReviewPage = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    reviewId: React.PropTypes.string
  },

  getInitialState() {
    return {};
  },

  getMeteorData() {
    return {
      review: Reviews.findOne({_id: this.props.reviewId})
    };
  },

  render() {
    if (this.data.review == undefined) {
      return (<div>No review with id="{ this.props.reviewId }"</div>)
    }

    let handleEditButtonClick = () => {
      FlowRouter.go("achievementEdit", {reviewId: this.props.reviewId})
    };

    return (
      <div>
        <img src="/assets/achievement.gif" className="achievement"/>
        <button onClick={ handleEditButtonClick }>Edit</button>
        <h2>{ this.data.review.title }</h2>
        { this.data.review.opinion }
      </div>

    );
  }
});

