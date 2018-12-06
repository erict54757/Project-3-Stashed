module.exports = function(sequelize, DataTypes) {
    var Tuesday = sequelize.define("Tuesday", {
      Tuesday: {
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
    Tuesday.associate = function(models) {
    
      Tuesday.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'CASCADE',
        hooks: true
      });
    };
  
    return Tuesday;
  };
  