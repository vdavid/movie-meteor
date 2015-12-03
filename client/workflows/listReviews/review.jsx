Review = React.createClass({
  render() {
    let review = this.props.review;
    let avatar = (review.imdbData && review.imdbData.posterUrl)
      || <mui.Avatar>{review.title.substr(0, 1).toLocaleUpperCase()}</mui.Avatar>;
    return (
      <mui.Card key={this.props.key}>
        <mui.CardHeader
          title={review.title}
          subtitle={review.rating + " / 10"}
          avatar={avatar} />
        <mui.CardText>{review.opinion}</mui.CardText>
      </mui.Card>
    );
  }
});