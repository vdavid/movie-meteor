Reviews = new Ground.Collection('reviews');

//noinspection JSUnusedGlobalSymbols
Reviews.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    autoValue: Meteor.userId
  },
  watchDate: { // Date (no time) when watched (not necessarily when recorded)
    type: Date
  },
  creationDateTime: { // Filled up automatically
    type: Date,
    autoValue: function () {
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
    autoValue: function () {
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
    decimal: true,
    min: 0,
    max: 10,
    optional: true
  },
  'imdbData.posterUrl': {
    type: String,
    optional: true
  }
}));

Meteor.methods({
  initializeDatabase() {
    //noinspection SpellCheckingInspection
    Reviews.insert({
      _id: 'dummy-review-1',
      watchDate: Date.parse('2014-06-02'),
      title: 'Hot Fuzz',
      rating: 2,
      opinion: 'Fos :)',
      spoiler: 'Egy szuperrendőrt (aki amúgy annyira nem is szuper) áthelyeznek Londonból valami vidéki kisvárosba, ahol elvileg nem töténik semmi, valójában viszont sorban halnak meg az emberek "balesetben", amiről aztán kiderül, hogy egy összeesküvés a falu vezetői részéről. De aztán a rendőr fog egy csomó puskát és megsebesít mindenkit (nem hal meg senki ám!) aztán mindenkit becsuk és boldogan élnek amíg meg nem.',
      imdbData: {
        id: 'tt0425112',
        originalTitle: 'Hot Fuzz',
        hungarianTitle: 'Vaskabátok',
        year: 2007,
        directorNames: ['Edgar Wright'],
        countryNames: ['UK', 'France', 'USA'],
        languageNames: ['English'],
        runtimeInMinutes: 121,
        rating: 7.9
      }
    });
    //noinspection SpellCheckingInspection
    Reviews.insert({
      _id: 'dummy-review-2',
      watchDate: Date.parse('2014-05-19'),
      title: 'The Shape of Things',
      rating: 7,
      opinion: 'Régen láttam először, és tökre megmaradt, szóval nekem maradandó élmény. Most így újranézve azért már kicsit gagyi.',
      spoiler: 'Művészcsaj felszed egy befordult, kicsit béna srácot, felpumpálja az egóját, felöltözteti, aztán a végén egy olyan ember lesz belőle, aki sokkal jobban megfelel a társadalmi elvárásoknak. Végül bemutatja egy színpadon, mint az élő "szobrát", amin nyilván mindenki kiakad.',
      imdbData: {
        id: 'tt0308878',
        originalTitle: 'The Shape of Things',
        englishTitle: 'The Shape of Things',
        hungarianTitle: 'Faragjunk férfit!',
        year: 2003,
        directorNames: ['Neil LaBute'],
        countryNames: ['USA', 'France', 'UK'],
        languageNames: ['English'],
        runtimeInMinutes: 96,
        rating: 6.8
      }
    });
  },
  /**
   * TODO: Finish this
   * @param {Object} review
   */
  insertReview(review)
  {
    Reviews.insert(review);
  }
});
