module.exports = function(sequelize, DataTypes) {
    var Monday = sequelize.define("Monday", {
      Monday: {
        type:DataTypes.STRING,
        allowNull:false
      }, 
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
    Monday.associate = function(models) {
    
      Monday.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'CASCADE',
        hooks: true
      });
    };
  
    return Monday;
  };
  