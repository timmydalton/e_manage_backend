const connection = require('../connection')

exports.list = function () {
  return new Promise((resolve, reject) => {
  let sql = `SELECT *  FROM user`;
  let query = connection.query(sql, (err, result, field) => {
      if(err) return reject(err);
      resolve(Object.values(JSON.parse(JSON.stringify(result))));
    });
  });
}