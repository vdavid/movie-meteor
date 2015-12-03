ReviewList = React.createClass({
  render() {
    if (this.props.reviews.count) {
      return (
        <div>
          <ul>
            { this.props.reviews.map((review) => {
              return (
              <li key={review._id}>
                <div>{review.title}</div>
              </li>)})
              }
          </ul>
        </div>
      );
    } else {
      return (
        <div className="empty">No reviews.</div>
      );
    }
  }
});