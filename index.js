console.log('--------------------------------')
console.log('-')
console.log('-Start')
console.log('-')
console.log('--------------------------------')

var fs = require('fs')

const url = 'https://mobile.facebook.com/Leonidas01/photos/a.121169999326741/619435976166805'

var scraping = require("./controllers/scrapingController")

async function main() {
    scraping.getProfile('https://mobile.facebook.com/dreank.mm')
        .then((a) => {

            fs.writeFile('test.html', a, function (err) {
                if (err) throw err
                console.log('-test.html')
            })
            console.log(a)
        }).catch((err) => {
            console.log(err)
        })
}
main()
