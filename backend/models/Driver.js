const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    driverId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    status: {
      type: String,
      enum: ["On Duty", "Off Duty", "On Trip", "On Leave"],
      default: "Off Duty",
    },

    rating: {
      type: Number,
      default: 0,
    },

    trips: {
      type: Number,
      default: 0,
    },

    safety: {
      type: Number,
      default: 0,
    },

    timeliness: {
      type: Number,
      default: 0,
    },

    feedback: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
