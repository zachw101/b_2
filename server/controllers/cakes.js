const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Rating = mongoose.model('Rating');

module.exports = {

    index(req, res) {
        console.log('in index');

        Cake.find()
            .then((allCakes, allRatings) => {
                console.log(allCakes);
                console.log(allRatings);
                res.json({
                    cakes: allCakes,
                    ratings: allRatings,
                    msg: "in index"
                })
            })
            .catch(err => {
                res.json({ error: err });
            });



        // shorthand: return an obj with a key called error
        // the val of the key will be the val of the param
        // this shorthand works because param and key same name
        // .catch(error => res.json({ error }));
    },


    getById(req, res) {
        Cake.findById(req.params.cakeId)
            .then(cake => {
                res.json({ cake: cake });
            })
            .catch(err => {
                res.json({ error: err });
            });
    },


    create(req, res) {
        Cake.create(req.body)
            .then(newCake => {
                res.json({ newCake: newCake });
            })
            .catch(err => {
                res.json({ error: err });
            });
    },

    // update(req, res) {
    //     Cake.findByIdAndUpdate(
    //         { _id: req.params.cakeId },
    //         { ratings: { rating: req.body.rating, comment: req.body.comment } },
    //         {
    //             runValidators: true,
    //             // will return the new updated obj rather than
    //             // the object before the update
    //             new: true
    //         }
    //     )
    //         .then(newCake => {
    //             res.json({ newCake: newCake });
    //         })
    //         .catch(err => {
    //             res.json({ error: err });
    //         });
    // },

    update: function (req, res) {
        console.log(req.body)
        Rating.create({ rating: req.body.rating, comment: req.body.comment }, function (err, newRating) {
            console.log(req.body)
            if (err) {
                res.json({ message: "Error!", error: err });
            }
            else {
                Cake.findOneAndUpdate({ _id: req.params.cakeId }, { $push: { ratings: newRating } }, function (err, data) {
                    if (err) {
                        res.json({ message: "Error!", error: err });
                    }
                    else {
                        res.json({ message: "Success!", added: true });
                    }
                })
            }
        })
    },




    delete(req, res) {
        Cake.findByIdAndDelete(req.params.id)
            .then(deletedCake => {
                res.json({ deleted: deletedCake });
            })
            .catch(err => {
                res.json({ error: err });
            });
    },

}