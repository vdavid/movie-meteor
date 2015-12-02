Meteor.publish('reviews', ((filter)=> {
  Object.assign(filter, {userId: this.userId});
  return Reviews.find(filter);
}));

Meteor.publish('review', ((id)=> {
  return Reviews.find({_id: id});
}));
