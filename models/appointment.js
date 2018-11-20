module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    date: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    time: {
      type: DataTypes.STRING, 
      allowNull: false 
    }
  });
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
    Appointment.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE',
      hooks: true
    });
  };

  return Appointment;
};
