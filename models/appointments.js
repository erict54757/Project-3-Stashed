module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    dates: { type: DataTypes.DATE, allowNull: false },

    emp_id: {
      type: DataTypes.INTEGER
    }
  });
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Appointment;
};
