console.log('pina');
if (typeof Meteor.user() !== 'undefined') {
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
  }, {
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
}