import { getAllMovies, getMovieById, getMoviesByTitle, getMoviesPage, getSortedMovies } from '../services/services';

test('get all movies', () => {
  const data = {
    vote_count:395,
    id:445651,
    video:false,
    vote_average:6.8,
    title:'The Darkest Minds',
    popularity:75.509,
    poster_path:'/94RaS52zmsqaiAe1TG20pdbJCZr.jpg',
    original_language:'en',
    original_title:'The Darkest Minds',
    genre_ids:[878,53],
    backdrop_path:'/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg',
    adult:false,
    overview:'After a disease kills 98% of America\'s children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.',release_date:'2018-08-02'
  };

  expect(getAllMovies()[0]).toEqual(data);
});

test('get movies by title', () => {
  const data = {
    vote_count:395,
    id:445651,
    video:false,
    vote_average:6.8,
    title:'The Darkest Minds',
    popularity:75.509,
    poster_path:'/94RaS52zmsqaiAe1TG20pdbJCZr.jpg',
    original_language:'en',
    original_title:'The Darkest Minds',
    genre_ids:[878,53],
    backdrop_path:'/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg',
    adult:false,
    overview:'After a disease kills 98% of America\'s children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.',release_date:'2018-08-02'
  };

  expect(getMoviesByTitle('darkest')[0]).toEqual(data);
});

test('get movies page', () => {
  const data = [
    {
      adult: false,
      backdrop_path: '/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg',
      genre_ids: [
        28,
        12,
        16,
        10751
      ],
      id: 260513,
      original_language: 'en',
      original_title: 'Incredibles 2',
      overview: 'Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.',
      popularity: 63.152,
      poster_path: '/x1txcDXkcM65gl7w20PwYSxAYah.jpg',
      release_date: '2018-06-14',
      title: 'Incredibles 2',
      video: false,
      vote_average: 7.6,
      vote_count: 2768
    }
  ];

  expect(getMoviesPage(3, 1)).toEqual(data);
})

test('get movie by id', () => {
  const data = {
    vote_count:395,
    id:445651,
    video:false,
    vote_average:6.8,
    title:'The Darkest Minds',
    popularity:75.509,
    poster_path:'/94RaS52zmsqaiAe1TG20pdbJCZr.jpg',
    original_language:'en',
    original_title:'The Darkest Minds',
    genre_ids:[878,53],
    backdrop_path:'/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg',
    adult:false,
    overview:'After a disease kills 98% of America\'s children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.',release_date:'2018-08-02'
  };

  expect(getMovieById(445651)).toEqual(data);
});

test('get movies sorted by asc', () => {
  const data = {
    adult: false,
    backdrop_path: "/kzeR7BA0htJ7BeI6QEUX3PVp39s.jpg",
    genre_ids: [35, 80],
    id: 100,
    original_language: "en",
    original_title: "Lock, Stock and Two Smoking Barrels",
    overview: "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
    popularity: 5.718,
    poster_path: "/qV7QaSf7f7yC2lc985zfyOJIAIN.jpg",
    release_date: "1998-03-05",
    title: "Lock, Stock and Two Smoking Barrels",
    video: false,
    vote_average: 7.8,
    vote_count: 2407
  };

  expect(getSortedMovies('id', 'u')[0]).toEqual(data);
});

test('get movies sorted by desc', () => {
  const data = {
    adult: false,
    backdrop_path: "/mDo7UEAR9iDvQOkv3Xv4PHX534M.jpg",
    genre_ids: [14, 27, 28, 878],
    id: 9997,
    original_language: "en",
    original_title: "Gabriel",
    overview: "Gabriel tells the story of an archangel who fights to bring light back to purgatory - a place where darkness rules - and save the souls of the city's inhabitants.",
    popularity: 5.875,
    poster_path: "/zlKl3Zm1BjEqMRchLbWrsK3aI7K.jpg",
    release_date: "2007-11-15",
    title: "Gabriel",
    video: false,
    vote_average: 5.1,
    vote_count: 110
  };

  expect(getSortedMovies('id', 'd')[0]).toEqual(data);
});

test('get sorted movies that are equal', () => {
  const data = {
    adult: false,
    backdrop_path: "/vSDl3hqsxxNaj0tE5ZLsTQeL0dS.jpg",
    genre_ids: [18, 10752],
    id: 975,
    original_language: "en",
    original_title: "Paths of Glory",
    overview: "During World War I, commanding officer General Broulard orders his subordinate, General Mireau, to attack a German trench position, offering a promotion as an incentive. Though the mission is foolhardy to the point of suicide, Mireau commands his own subordinate, Colonel Dax, to plan the attack. When it ends in disaster, General Mireau demands the court-martial of three random soldiers in order to save face.",
    popularity: 5.381,
    poster_path: "/f3DEXseCs3WBtvCv9pVPCtoluuG.jpg",
    release_date: "1957-09-18",
    title: "Paths of Glory",
    video: false,
    vote_average: 8.3,
    vote_count: 927
  };

  expect(getSortedMovies('adult', 'd')[0]).toEqual(data);
});
