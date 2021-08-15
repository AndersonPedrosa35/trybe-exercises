use("class");
db.movies.updateOne({
  title: "Batman"
}, {
    $set: { 
      "cast.0.actor": ["Christian Bale"],
      "cast.1.actor": ["Michael Caine"],
      "cast.2.actor": ["Heath Ledger"] 
    }
});
