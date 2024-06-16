const db = require('../models');
const Bank = db.Bank;
const Branch = db.Branch;

exports.getBankList = async (req, res) => {
  try {
    const banks = await Bank.findAll();
    res.json(banks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBranchDetails = async (req, res) => {
  const { ifsc } = req.params;
  try {
    const branch = await Branch.findOne({
      where: { ifsc },
      include: [{ model: Bank, attributes: ['name'] }]
    });
    if (branch) {
      res.json(branch);
    } else {
      res.status(404).json({ error: 'Branch not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getBranchesByBankName = async (req, res) => {
    const { bankName } = req.params;
    try {
      const bank = await Bank.findOne({ where: { name: bankName } });
      if (!bank) {
        return res.status(404).json({ error: 'Bank not found' });
      }
      const branches = await Branch.findAll({ where: { bank_id: bank.id } });
      res.json(branches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  exports.getBranchesByCity = async (req, res) => {
    const { cityName } = req.params;
    try {
      const branches = await Branch.findAll({ where: { city: cityName } });
      res.json(branches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  