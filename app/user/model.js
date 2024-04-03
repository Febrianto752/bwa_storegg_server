const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "email harus diisi"],
    },
    name: {
      type: String,
      require: [true, "nama harus diisi"],
      maxLength: [225, "panjang nama harus diantara 3 sampai 255 karaketer"],
      minLength: [3, "panjang nama harus diantara 3 sampai 255 karaketer"],
    },
    password: {
      type: String,
      require: [true, "kata sandi harus diisi"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    phoneNumber: {
      type: String,
      require: [true, "nomor telepon harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
