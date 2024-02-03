import express from "express";
import countryModel from "../models/country";

const router = express.Router();

// create country
router.post("/create", (req, res) => {
  const country = countryModel(req.body);
  country
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all countries
router.get("/countries", (req, res) => {
  countryModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a country
router.get("/countries/:id", (req, res) => {
  const { id } = req.params;
  countryModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a country
router.delete("/countries/:id", (req, res) => {
  const { id } = req.params;
  countryModel
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a country
router.put("/countries/:id", (req, res) => {
  const { id } = req.params;
  const { code, name, capital, continent, currency, languages } = req.body;
  countryModel
    .updateOne(
      { _id: id },
      { $set: { code, name, capital, continent, currency, languages } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

export default router;
