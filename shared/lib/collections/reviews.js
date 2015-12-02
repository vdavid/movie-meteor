Reviews = new Mongo.Collection('reviews');

//noinspection JSUnusedGlobalSymbols
Reviews.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    autoValue: () => (typeof(this.userId) !== 'undefined') ? this.userId : this.userId // TODO: Try to give it as a literal once this already works
  },
  watchDate: { // Date (no time) when watched (not necessarily when recorded)
    type: Date
  },
  creationDateTime: { // Filled up automatically
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  lastModificationDateTime: { // Updated automatically
    type: Date,
    autoValue: function() {
      return new Date();
    }
  },
  title: { // Movie title (free text)
    type: String
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  opinion: {
    type: String
  },
  spoiler: {
    type: String
  },
  imdbData: { // Any IMDb data on the movie
    type: Object,
    optional: true
  },
  'imdbData.id': {
    type: String
  },
  'imdbData.originalTitle': {
    type: String
  },
  'imdbData.englishTitle': {
    type: String,
    optional: true
  },
  'imdbData.hungarianTitle': {
    type: String,
    optional: true
  },
  'imdbData.year': {
    type: Number,
    min: 1800,
    max: 2200,
    optional: true
  },
  'imdbData.directorNames': {
    type: [String],
    optional: true
  },
  'imdbData.mainActorNames': {
    type: [String],
    optional: true
  },
  'imdbData.countryNames': {
    type: [String],
    optional: true
  },
  'imdbData.languageNames': {
    type: [String],
    optional: true
  },
  'imdbData.runtimeInMinutes': {
    type: Number,
    min: 0,
    optional: true
  },
  'imdbData.rating': {
    type: Number,
    decimal:true,
    min: 0,
    max: 10,
    optional: true
  }
}));