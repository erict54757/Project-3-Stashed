module.exports = function(sequelize, DataTypes) {
    var Saturday = sequelize.define("Saturday", {
      shiftStartTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      },
      shiftEndTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      },
      lunchStartTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      },
      lunchEndTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      }
    });
    Saturday.associate = function(models) {
    
      Saturday.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'CASCADE',
        hooks: true
      });
    };
  
    return Saturday;
  };
  