const SaveTimer = require("../models/SaveTimer");

exports.getTImerUser = async (req, res) => {
  try {
    const id_customer = req.id_customer;

    // Pastikan ID pengguna ada
    if (!id_customer) {
      return res.status(401).json({
        status: "failed",
        message: "User ID not found in the token",
      });
    }

    // Mencari alamat berdasarkan ID pengguna
    const userTimer = await SaveTimer.findAll({
      where: { id_customer },
    });

    res.json({
      status: "ok",
      data: userTimer,
    });
  } catch (error) {
    console.error(error, "<< Error getting timer by user");
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

exports.saveTimerData = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const id_customer = req.id_customer;

    if (!id_customer) {
      return res.status(401).json({
        status: "failed",
        message: "User ID not found in the token",
      });
    }
    details = {
      id_customer,
      startTime,
      endTime,
    };

    // Simpan startTime ke dalam database
    const createSaveTimer = await SaveTimer.create(details);

    res.status(201).json({
      status: "ok",
      data: createSaveTimer,
    });
  } catch (error) {
    console.error("Error saving timer data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
