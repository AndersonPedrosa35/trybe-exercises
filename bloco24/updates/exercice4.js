use("class");
db.movies.updateOne({
  title: "Batman"
}, {
  $set: { imdbRating: 2 }
});
