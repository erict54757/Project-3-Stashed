module.exports = function(sequelize, DataTypes) {
    var Day = sequelize.define("Day", {
      Monday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
      Tuesday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
      Wednesday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
      Thursday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
      Friday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
      Friday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
      Saturday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
      Sunday: { 
        type:DataTypes.BOOLEAN, 
        defaultValue:false,
        allowNull: false 
      },
    
    });
    Day.associate = function(models) {
    
      Day.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'CASCADE',
        hooks: true
      });
    };
  
    return Day;
  };
  