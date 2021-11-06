var scraping = require("./controllers/scrapingController")
var tools = require("./controllers/toolsController")
var database = require("./controllers/databaseController")
var automate = require("./controllers/automateController")

console.log('--------------------------------')
console.log('-')
console.log('-Start')

database.db_connect()
    .then(async () => {
        console.log('-db_connect')
        ///automate.searchProfiles(3)
        console.log(await scraping.getPhoto('https://mobile.facebook.com/photo.php?fbid=10216825109380256'))
    })