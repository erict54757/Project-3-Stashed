module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
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
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 2
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: 5
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      validate: {
        isEmail: true,
        len: [1, 100]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    // password
    account_key: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        len: [8]
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    0800: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    0830: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    0900: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    0930: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1000: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1030: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1100: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1130: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1200: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1230: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1300: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1330: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1400: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1430: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1500: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1530: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1600: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1630: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1700: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1730: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1800: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1830: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    1900: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  Employee.associate = function(models) {
    Employee.hasMany(models.Appointment, {});
  };

  Employee.associate = function(models) {
    Employee.hasMany(models.Day, {});
  };
  Employee.associate = function(models) {
    Employee.hasMany(models.Sunday, {});
  };

  Employee.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking if password is valid
  Employee.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.account_key);
  };
  return Employee;
};
