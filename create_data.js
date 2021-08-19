const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

// const apple = new Fruit({
//     name: "Apple",
//     rating: 8,
//     review: "Rasanya manis"
// });

// apple.save(function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("berhasil simpan buah appel kedalam databases")
//     }
// })

const kurma = new Fruit({
    name: "Kurma",
    rating: 10,
    review: "Buah yang terbaik"
});

const jeruk = new Fruit({
    name: "Jeruk",
    rating: 6,
    review: "Asem rasanya"
});

const pisang = new Fruit({
    name: "Pisang",
    rating: 7,
    review: "Manis menyegarkan"
});

Fruit.insertMany([kurma, jeruk, pisang], function(error){
    if(error){
        console.log(error)
    }else{
        mongoose.connection.close();

        console.log("berhasil simpan tambahan buah kedalam databases")

    }
})