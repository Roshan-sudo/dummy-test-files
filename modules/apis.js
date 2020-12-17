module.exports = (app)=>{
    const cors = require('cors');

    app.use(cors());
    // Mongoose Models
    const SyllabQBank = require('./mongooseModels').SyllabQBank

    // To fetch all playlists
    app.get(process.env.API_ROUTE, (req, res)=>{
        SyllabQBank.find({type : req.params.type, brSem : req.params.brSem}, '-_id -__v', (err, data)=>{
            if(!err) res.send(data)
            else res.send(err)
        });
    });
}