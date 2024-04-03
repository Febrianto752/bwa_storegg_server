const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "nama game harus diisi"] },
      category: { type: String, require: [true, "kategori harus diisi"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "nama koin harus diisi"] },
      coinQuantity: {
        type: String,
        require: [true, "jumlah koin harus diisi"],
      },
      price: { type: Number },
    },

    historyPayment: {
      name: { type: String, require: [true, "nama player harus diisi"] },
      type: { type: String, require: [true, "tipe pembayaran harus diisi"] },
      bankName: { type: String, require: [true, "nama bank harus diisi"] },
      noRekening: {
        type: String,
        require: [true, "nomor rekening harus diisi"],
      },
    },

    name: {
      type: String,
      require: [true, "nama player harus diisi"],
      maxLength: [225, "panjang nama harus diantara 3 sampai 255 karaketer"],
      minLength: [3, "panjang nama harus diantara 3 sampai 255 karaketer"],
    },

    accountUser: {
      type: String,
      require: [true, "nama akun harus diisi"],
      maxLength: [255, "pan"],
      maxLength: [
        225,
        "panjang nama akun harus diantara 3 sampai 255 karaketer",
      ],
      minLength: [3, "panjang nama akun harus diantara 3 sampai 255 karaketer"],
    },
    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },

    historyUser: {
      name: { type: String, require: [true, "nama player harus diisi"] },
      phoneNumber: {
        type: Number,
        require: [true, "nomor telepon harus diisi"],
        maxLength: [13, "panjang nomor telepone antara 9 sampai 13 digit"],
        minLength: [9, "panjang nomor telepone antara 9 sampai 13 digit"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
