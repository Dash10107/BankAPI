module.exports = (sequelize, DataTypes) => {
    const Bank = sequelize.define('Bank', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(49)
      }
    }, {
      tableName: 'banks',
      timestamps: false
    });
    Bank.associate = models => {
      Bank.hasMany(models.Branch, { foreignKey: 'bank_id' });
    };
    return Bank;
  };
  