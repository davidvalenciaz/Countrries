import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    languages: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const countryModel = mongoose.model("Country", userSchema);

export default countryModel;
