FlowRouter.route('/', {
  name: 'listReview',
  subscriptions: function () {
    this.register('reviews', Meteor.subscribe('reviews', {}));
  },
  action() {
    ReactLayout.render(App, {content: <ListReviewsPage />});
  }
});

FlowRouter.route('/review/view/:reviewId', {
  name: 'viewReview',
  subscriptions: function (params) {
    this.register('review', Meteor.subscribe('review', params.reviewId));
  },
  action() {
    ReactLayout.render(App, {content: <ViewReviewPage {...params} />});
  }
});

FlowRouter.route('/review/edit/:reviewId', {
  name: 'editReview',
  subscriptions: function (params) {
    this.register('review', Meteor.subscribe('review', params.reviewId));
  },
  action(params) {
    ReactLayout.render(App, {content: <EditReviewPage {...params} />});
  }
});
