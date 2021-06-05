const mongoose = require('mongoose');

const stranka_model = {
    _id: mongoose.Schema.ObjectId,
    ime: String,
    priimek: String,
    tel_st: String,
    naslov: String
};
const Stranka = mongoose.model("Stranka", stranka_model, "stranke")

const rezervacija_model = {
    _id: mongoose.Schema.ObjectId,
    id_storitev: String,
    id_podjetje: String,
    datum: Date,
    trajanje: Number,
    delo: String,

    ime_stranke: String,
    priimek_stranke: String,
    tel_st: String,
    stranka: stranka_model,
}
const Rezervacija = mongoose.model("Rezervacija", rezervacija_model, "rezervacije")

const user_model = {
    _id: mongoose.Schema.ObjectId,
    uporabnisko_ime: String,
    geslo: String,
    id_podjetje: String
}
const User = mongoose.model("User", user_model, "uporabniki")

const storitev_model = {
    _id: mongoose.Schema.ObjectId,
    ime: String,
    naslov: String,
    tip: String,
    lokacija: {
        x: Number,
        y: Number
    },
    opis: String,
    ponudba: [{
        cena: String,
        ime: String,
        opis: String
    }],
    zaposleni: [{
        naziv: String,
        telefon: String
    }],
    delovniCas: {
        pon:{
            zacetek: String,
            konec: String
        },
        tor:{
            zacetek: String,
            konec: String
        },
        sre:{
            zacetek: String,
            konec: String
        },
        cet:{
            zacetek: String,
            konec: String
        },
        pet:{
            zacetek: String,
            konec: String
        },
        sob:{
            zacetek: String,
            konec: String
        },
        ned:{
            zacetek: String,
            konec: String
        }
    }
};
const Storitev = mongoose.model("Storitev", storitev_model, "storitve")

module.exports.Storitev = Storitev;
module.exports.User = User;
module.exports.Rezervacija = Rezervacija;
module.exports.Stranka = Stranka;