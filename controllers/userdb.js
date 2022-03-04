let mongoose = require('mongoose');

// Connect to our model
let Userdb = require('../models/userdb');

exports.list = function(req, res, next) {
    Userdb.find( (err, userdbList) => {

        if(err){
            return console.error(err);
        }
        else{
            res.render('userdb/list',{title: 'List',
            UserdbList: userdbList
        
        });
        }

    })
}

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Userdb();

    res.render(
        'userdb/add_edit', 
        {
            title: 'Add a new Item',
            item: newItem
        }
    )          
}


module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Userdb({
        _id: req.body.id,
        uname: req.body.uname,
        unumber: req.body.unumber,
        uemail: req.body.uemail,
       
    }); 
    Userdb.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            console.log(item);
            res.redirect('/userdb/list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Userdb.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render(
                'userdb/add_edit', 
                {
                    title: 'Edit Item', 
                    item: itemToEdit
                }
            )
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = userdb({
        _id: req.body.id,
        uname: req.body.uname,
        unumber: req.body.unumber,
        uemail: req.body.uemail,
        
    });

    // console.log(updatedItem);

    Userdb.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/userdb/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Userdb.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/userdb/list');
        }
    });
}


