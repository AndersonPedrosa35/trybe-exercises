use("erp");
db.clientes.aggregate([
  { $project: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            1000 * 60 * 60 * 24 * 365
          ]
        }
      }
  } },
  { $match: {
      idade: {
        $gte: 18,
        $lte: 25
      }
  } },
  { $count: "clientes" }
])