ReviewList = React.createClass({
  render() {
    if (this.props.reviews.length) {
      return (
        <div style={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}>
          { this.props.reviews.map((review) => {
            return <Review key={review._id} review={review}/>;
            })}
        </div>
      );
    } else {
      return (
        <div className="empty">No reviews.</div>
      );
    }
  }
});