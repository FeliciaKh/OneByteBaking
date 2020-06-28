'use strict'

const db = require('../server/db')
const {Recipe} = require('../server/db/models')

const descriptionText = 'Click on the card to read more about this recipe!'

async function seed() {
    await db.sync({force: true})
    console.log('db synced!')
    await Promise.all(
        Recipe.create({
            name: 'Brownie', 
            imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2016/08/Brownies_0.jpg', 
            description: descriptionText
        }), 
        Recipe.create({
            name: 'Chocolate Chip Cookies', 
            imgUrl: 'https://www.chelseasmessyapron.com/wp-content/uploads/2019/02/Bakery-Style-Chocolate-Chip-Cookies-1.jpg', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Tiramisu', 
            imgUrl: 'https://themodernproper.sfo2.cdn.digitaloceanspaces.com/posts/2018/_recipeSquare/easy-tiramisu-11.jpg?mtime=20181021075447&focal=none&tmtime=20200211015326', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Caramel Banana Pudding', 
            imgUrl: 'https://www.bigbearswife.com/wp-content/uploads/2017/01/Caramel-Banana-Pudding-Parfaits-7.jpg', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Churros', 
            imgUrl: 'https://www.biggerbolderbaking.com/wp-content/uploads/2015/04/BBB69-Churros-Chocolate-Thumbnail-v.1.jpg', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Deep Fried Oreos', 
            imgUrl: 'https://www.restlesschipotle.com/wp-content/uploads/2015/06/deep-fried-oreos-feat.jpg', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Snickerdoodle Cookies', 
            imgUrl: 'https://cookiesandcups.com/wp-content/uploads/2017/10/bestsnickerdoodles-266x266.jpg', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Unicorn Cake', 
            imgUrl: 'https://cdn.shopify.com/s/files/1/0163/5948/9636/articles/unicorn-cake-nerdy-nummeis_1024x1024.jpg?v=1547142809', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Chocolate Mirror Glaze Cake', 
            imgUrl: 'https://www.homecookingadventure.com/images/recipes/Chocolate_Mirror_Cake_main.jpg', 
            description: descriptionText
        }),
        Recipe.create({
            name: 'Dutch Apple Pie', 
            imgUrl: 'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg', 
            description: descriptionText
        })
    )
}

async function runSeed() {
  console.log('seeding...')
    try {
      await seed()
    } catch (err) {
      console.error(err)
      process.exitCode = 1
    } finally {
      console.log('closing db connection')
      await db.close()
      console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
    runSeed()
  }
  
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
  