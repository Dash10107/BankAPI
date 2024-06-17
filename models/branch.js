// models/branch.js
module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define('Branch', {
      ifsc: {
        type: DataTypes.STRING(11),
        primaryKey: true
      },
      bank_id: {
        type: DataTypes.BIGINT,
        references: {
          model: 'banks',
          key: 'id'
        }
      },
      branch: DataTypes.STRING(74),
      address: DataTypes.STRING(195),
      city: DataTypes.STRING(50),
      district: DataTypes.STRING(50),
      state: DataTypes.STRING(26)
    }, {
      tableName: 'branches',
      timestamps: false
    });
    Branch.associate = models => {
      Branch.belongsTo(models.Bank, { foreignKey: 'bank_id' });
    };
    return Branch;
  };
  