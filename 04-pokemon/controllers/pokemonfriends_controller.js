const PokemonFriends = require('../models/PokemonFriends');
const log = require('debug')('pokemon:controller:pokemon_friends');

// Create one card in database 
const create = async(req, res) => {
    try {
        
        let friend = await new PokemonFriends(req.body).save();
        console.log(card);

        // HTTP response status code, 201 = CREATED
        return res.status(201).send({
            success: true,
            data: {
                friend
            }
        });

    } catch (err) {
        log('Create failed: %s', err.message);

        return res.status(500).send({   // server error response
            success: false,
            data: err.message
        });
    }
}

// Read one or several cards from database
const read = async(req, res) => {
    //  Catch all error with try / catch
    try {
        // throw "Something went wrong.."
        let friend;

        if (req.params.id) {
            friend = await PokemonFriends.where({
                "id" : req.params.id
            }).fetch({
                require: false,
                withRelated: ['cards']
            });
        } else {
            friend = await PokemonFriends.fetchAll({
                withRelated: ['cards']
            });
        }

        if (!friend) {
            return res.status(400).send({
                success: false,
                data: "Not found"
            });
        }

        // HTTP response status code, 200 = OK
        return res.status(200).send({
            success: true,
            data: {
                friend
            }
        });

    } catch (err) {
        log('Read failed: %s', err.message);

        // HTTP response status code, 500 = server error response
        // .send to send out message to the user
        return res.status(500).send({
            success: false,
            data: err.message
        });
    }
};

// Update one card in database
const update = async(req, res) => {
    try {
        let friend = await PokemonFriends.where( { "id" : req.params.id } ).fetch( { require : true } );
        friend = await card.set(req.body).save();

        // HTTP response status code, 201 = CREATED
        return res.status(201).send({
            success: true,
            data: {
                friend
            }
        });

    } catch (err) {
        log('Update failed: %s', err.message);

        return res.status(500).send({   // server error response
            success: false,
            data: err.message
        });
    }
}

// Delete on card in database
const destroy = async(req, res) => {
    try {
        let friend = await PokemonFriends.where( { "id" : req.paramas.id } ).fetch( { require : true } );
        friend = await card.destroy();

        // HTTP response status code, 200 = OK
        return res.send(200).send({
            success: true,
            data: {
                friend
            }
        });

    } catch (err) {
        log('Delete failed: %s', err.message);

        return res.status(500).send({   // server error response
            success: false,
            data: err.message
        });
    }
}

const addCard = async(req, res) => {
    try {
        let friend = await PokemonFriends.where( { "id" : req.params.id } ).fetch( { require : true } );
        friend = await friend.cards().attach(req.body);

        // HTTP response status code, 200 = OK
        return res.status(200).send({
            success: true,
            data: {
                friend
            }
        });

    } catch(err) {
        log('Add failed: %s', err.message);
        
        return res.status(500).send({   // server error response
            success: false,
            data: err.message
        });
    }
}

// object to export more than 1 thing
module.exports = {
    create,
    read,
    update,
    destroy,
    addCard
}