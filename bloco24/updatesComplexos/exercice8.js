use("class");
db.movies.updateOne({
  title: "Home Alone"
}, {
  $push: {
    cast: [
      {
        "actor": "Macaulay Culkin",
        "character": "Kevin"
      },
      {
        "actor": "Joe Pesci",
        "character": "Harry"
      },
      {
        "actor": "Daniel Stern"
      }
    ],
  }
});
