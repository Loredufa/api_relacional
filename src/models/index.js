const {Sequelize} = require('sequelize')
const {dbUser, dbName, dbPassword, dbHost} = require('../utils/config')
const Travels = require('./Travel')
const Landings = require('./Landing')
const Contracts = require('./Contract')
const Passengers = require('./Passenger')
const Logins = require('./Login')
const Walls = require('./Wall')
const Fees = require('./Fee')
const Schedules = require('./Schedule')
const Hotels = require('./Hotel')
const Forms = require('./Form')
const Landing_texts = require('./Landing_text')
const Emojis = require('./Emoji')
const Versions = require('./Version')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);

const Travel = Travels(sequelize)
const Landing = Landings(sequelize)
const Contract = Contracts(sequelize)
const Passenger = Passengers(sequelize)
const Login = Logins(sequelize)
const Wall = Walls(sequelize)
const Fee = Fees(sequelize)
const Schedule = Schedules(sequelize)
const Hotel = Hotels(sequelize)
const Form = Forms(sequelize)
const Landing_text = Landing_texts(sequelize)
const Emoji = Emojis(sequelize)
const Version = Versions(sequelize)


//Relaciones
Travel.hasMany(Contract)
Contract.belongsTo(Travel, { foreignKey: 'travelId' }); // coloca travelId en contract

// Contract.hasMany(Passenger)
// Passenger.belongsTo (Contract) // coloca Contract_id en Passenger

Travel.hasMany(Wall)
Wall.belongsTo (Travel, { foreignKey: 'travelId' }) // coloca TravelId en Wall

Passenger.hasMany(Fee) 
Fee.belongsTo (Passenger, { foreignKey: 'passengerId' }) // colocaPassengerId en Fee

Hotel.hasMany(Travel)
Travel.belongsTo (Hotel, { foreignKey: 'hotelId' }) // coloca hotelId en travel

Schedule.hasMany(Travel) 
Travel.belongsTo (Schedule, { foreignKey: 'scheduleId' }) //  coloca scheduleId en travel


module.exports = {
    conn: sequelize,
    Travel,
    Landing,
    Contract,
    Passenger,
    Login,
    Wall,
    Fee,
    Schedule,
    Hotel,
    Landing_text,
    Form,
    Emoji,
    Version,
    sequelize
}