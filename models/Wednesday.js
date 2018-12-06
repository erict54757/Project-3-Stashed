module.exports = function(sequelize, DataTypes) {
    var Wednesday = sequelize.define("Wednesday", {
      
      Wednesday: {
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
    Wednesday.associate = function(models) {
    
      Wednesday.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'CASCADE',
        hooks: true
      });
    };
  
    return Wednesday;
  };
  