const MySqli = require('mysqli');

let conn = new MySqli({
   host: 'localhost',
   post: 3306,
   user: 'muema',
    passwd: 'Nokia5.1+',
    db: 'mega_shop'
});

let db = conn.emit(false,'');

module.exports = {
  database: db
};
