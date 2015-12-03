Meteor.publish('reviews', function (filter) {
  filter = filter || {};
  Object.assign(filter, {userId: this.userId});
  return Reviews.find(filter);
});

Meteor.publish('review', function (id) {
  return Reviews.findOne({_id: id});
});

Meteor.publish('user', function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
      {fields: {'profile.name': 1}});
  } else {
    this.ready();
  }
});
