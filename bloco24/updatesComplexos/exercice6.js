use("class");
db.movies.updateOne({
  title: "Batman"
}, {
  $push: {
    category: {
      $each: [
        "action"
      ],
    }
  }
});
