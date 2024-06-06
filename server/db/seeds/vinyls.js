/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('vinyls').del()
  await knex('vinyls').insert([
    {
      id: 1, artist: "Janelle Monáe", title: "Age of Pleasure",
      image: "https://spindizzyrecords.com/cdn/shop/files/Janelle_Monae_-_The_Age_Of_Pleasure_-_Indie_Exclusive_2048x2048.jpg?v=1684167053",
    },
    {
      id: 2, artist: "Dire Straits", title: "Making Movies",
      image: "https://i.discogs.com/jXw4bIzZhYPtG9XLegleRSz4FZ6N7n2topLLt4TZhAk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MjQx/NS0xMTcxMTM4MzEx/LmpwZWc.jpeg",
    },
    {
      id: 3, artist: "Reneé Rapp", title: "Snow Angel",
      image: "https://prodimage.images-bn.com/pimages/0602455877659_p0_v1_s1200x630.jpg",
    },
  ])
}
