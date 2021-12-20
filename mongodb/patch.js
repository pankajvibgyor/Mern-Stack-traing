
const express=require('express')
const router =express.Router()
const dataSchema=require('./data')

  router.patch('/patch/:id', (req, res) => {
    dataSchema.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((data) => {
        if (!data) {
            return res.status(404).send();
        }
        res.send(data);
    }).catch((error) => {
        res.status(500).send(error);
    })
})
  
  module.exports=router