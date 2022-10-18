var SpotifyWebApi = require('spotify-web-api-node');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(require('./key/admin.json')),
});

const db = getFirestore();

songs = ['3vooOYHU0Fi3ViCG7Ozh0Y',
'11bD1JtSjlIgKgZG2134DZ',
'1pXrR5Y9OgcIV2JEAl2lCB',
'6naxalmIoLFWR0siv8dnQQ',
'1QV6tiMFM6fSOKOGLMHYYg',
'3SPDQfj2UfWq6A2NllZnzn',
'5Ohxk2dO5COHF1krpoPigN',
'1JRK7srBWUtAW7dPabKBwJ',
'5rLi8B8qgk6qThwRnKHW2P',
'0rKtyWc8bvkriBthvHKY8d',
'23OXdR7YuUBVWh5hSnYJau',
'2mdEsXPu8ZmkHRRtAdC09e',
'5KRRcT67VNIZUygEbMoIC1',
'3SVAN3BRByDmHOhKyIDxfC',
'5AiNZnMDCWwujIENPj9PV9',
'7ATfTQCF4OGSY91yKk42km',
'3SktMqZmo3M9zbB7oKMIF7',
'1yjY7rpaAQvKwpdUliHx0d',
'4V7NFI2JLLJcZnGgJpIYXQ',
'1MPEPvmX18S9MK4RlMKIst',
'4cJOLN346rtOty3UPACsao',
'2iUxWUv5TovjBmayOcWohB',
'3Am0IbOxmvlSXro7N5iSfZ',
'346BZBkoXM8aPm8eKTIgYc',
'5EUCP8FTOGYUBqaYaYVpmm',
'2TfSHkHiFO4gRztVIkggkE',
'1jbgtsFa7MxJEph4Mp0JlZ',
'0hgsUnkawqDllP4OF4g9MN',
'3jzE5hUccAYfTxDWiZs1Ik',
'1yCJHs8UFfmqMujayg9i5y',
'01TyFEZu6mHbffsVfxgrFn',
'5d5vbFsYB7EebhVgafqvKS',
'4pbEwQiDjPln3oYlijXuOE',
'6SfoMpSYV3S2Fl5VLKLjjL',
'32GKpDMBMNQI3FdXlFFsMD',
'1qKS1OUI19ak7yGHSaK3pG',
'0oxYB9GoOIDrdzniNdKC44',
'6g0o3FK5GqsjPV488bBtDj',
'3F274sv7NCtXfu88YEEhXd',
'00Mb3DuaIH1kjrwOku9CGU',
'6J7cSyvSCnPwv3vqHchEfL',
'3HfEgAaf0koxBpBB8NvGda',
'53eyBafNDHnU2mxfqBfzmI',
'6numDs6jtM3BAVO2NRrwXC',
'5v4OkFH0TJ6W1hCFxyn0px',
'0kwbhAzmXoEfv1XAccsLGh',
'0BxE4FqsDD1Ot4YuBXwAPp',
'6xZ4Q2k2ompmDppyeESIY8',
'2takcwOaAZWiXQijPHIx7B',
'4VqPOruhp5EdPBeR92t6lQ',
'1EryAkZ0VHstC6haIxVBiE',
'5ncofiedz9Ej6YkvvXMKVn',
'5ruzrDWcT0vuJIOMW7gMnW',
'7s6bsvLGVFQ25JPgDjT0v7',
'4Nwrh5BlZ8I31znYQULS7G',
'5QLhl7uDuDypn7kN34RFPj',
'3DW6GVr7RVyfvo4NBRvZIZ',
'1X8kzZi7FiMU2HWL2L5wa8',
'1158ckiB5S4cpsdYHDB9IF',
'0qK6oUx3O0f1eTwj7hSWQm',
'0O26gtfjuscAOnQobjNPPL',
'1Nn84zLNLSNBpk6aXszU4G',
'2iQPembmg5KvkqXU0sd6xo',
'3ZuGGlqb2LqQSS6o1D36Ts',
'261Lv0RWWtC20IoyaIWWqI',
'3k2kIiJqUiIP49iUcOLpWT',
'08wnOyN1wyMaNrup3m353f',
'0aVM2DspPoHNTDBm7ehySx',
'3yiXy2ydZP9ZpsYxvUI6sO',
'5BN59BDczcpxstFKILIH0q',
'57Xjny5yNzAcsxnusKmAfA',
'7xcUWyLh6fIMsYjoVI7NnZ',
'2UKARCqDrhkYDoVR4FN5Wi',
'6EQFbIYzjgFKN929ZUWeIy',
'0D4QaxkvTRTXsKOafoHBgn',
'5sGU6CsPHoY0xngEjsBPkQ',
'5eQRClmVfIG8NaacxV8v7C',
'0vFOzaXqZHahrZp6enQwQb',
'7Jh1bpe76CNTCgdgAdBw4Z',
'72Z17vmmeQKAg8bptWvpVG']

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '15f1245eb5f74798ad1a694b07d1d7fe',
  clientSecret: '0c9d6fa1e41449e2b1274b486a70ce72',
});

spotifyApi.setAccessToken('BQAHSzIsUoMhOQntvMHjey_ZNDIblO4jkPP6PV7txiqpRdjtu7E7H-9HcaAYHeX5iQ251Ks-63l_EyjgTsNzlPI8mwXY3IIPCt0-9W0rjqCqZzoH6iVyea4a6FQVdvObY8f3Tv2duSZsMHUxMuHBvBdHa3DOeoWkWY1lU74fyc9c_faRvNcTmiREBjyJkmYOs0M');


console.log(songs.length)

for (let i = 0; i < songs.length; i++) {
  spotifyApi.getTrack(songs[i]).then(
      async function(data) {
  
        const dataT = {
          Nome: data.body.name,
          Id: data.body.uri,
          Img: data.body.album.images[0].url,
          Artista: data.body.artists[0].name,
          Qtd: 0
        };


        const res = await db.collection('musicas').doc(i.toString()).set(dataT);
        console.log(data.body.name)
        
      },
      function(err) {
        console.error(err);
      }
    );
}