var tools = require("./toolsController")
var scraping = require("./scrapingController")
var database = require("./databaseController")



const searchProfiles = (cant, profile = 0) => {
    return new Promise(async (resolve, reject) => {
        (async function () {
            for (let i = 0; i < cant; i++) {
                try {
                    let res = await scraping.checkProfile('https://mobile.facebook.com/' + profile)
                    console.log("---------------------")
                    console.log(res)
                    console.log("---------------------")
                    if (res === 200) {
                        let check = await database.query(`SELECT * FROM perfiles WHERE perfil_code="${profile}"`)
                        if (!check.length) {
                            console.log('Profile si exist - ' + profile)
                            await database.query(`INSERT INTO perfiles (perfil_code) VALUES ('${profile}')`)
                        } else {
                            console.log('Profile ya guardado - ' + profile)
                        }
                    } else if (res === 404) {
                        console.log('Profile no exist - ' + profile)
                    } else {
                        console.error(res);
                    }

                    profile++
                } catch (error) {
                    console.error(error);
                }
            }
        })()
    })
}



module.exports = {
    searchProfiles
}

//https://mobile.facebook.com/photo.php?fbid=124994453259874&id=101094135649906
//https://mobile.facebook.com/photo.php?fbid=10216825109380256&id=1839332216
