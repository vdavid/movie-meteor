FlowRouter.route('/', {
  name: 'listReview',
  action() {
    ReactLayout.render(App, {content: <ListReviewsPage />});
  }
});

FlowRouter.route('/review/view/:reviewId', {
  name: 'viewReview',
  action() {
    ReactLayout.render(App, {content: <ViewReviewPage {...params} />});
  }
});

FlowRouter.route('/review/edit/:reviewId', {
  name: 'editReview',
  action(params) {
    ReactLayout.render(App, {content: <EditReviewPage {...params} />});
  }
});
