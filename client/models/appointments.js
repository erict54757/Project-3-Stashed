


module.exports = function(sequelize, DataTypes) {
    var Appointments = sequelize.define("Appointment", {

     
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
        dates:{ DataTypes: Date,
        allowNull: false,
        },

        emp_id:{
            DataTypes:INTEGER
        }



    });
    Appointments.associate = function(models){
        Appointments.belongsTo(models.Account, {
            foreignKey: "emp_id"
        });
    }
 

    return Appointments;
}