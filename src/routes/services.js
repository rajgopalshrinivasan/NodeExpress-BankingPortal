const express = require('express')
const router = express.Router()
const {accounts,writeJSON } = require('../data.js')

router.get('/transfer',(req, res) => {
    res.render("transfer")
})

router.post('/transfer',(req, res) => {
    accounts[req.body.from].balance = accounts[req.body.from].balance  - req.body.amount;
    accounts[req.body.to].balance = accounts[req.body.to].balance  + parseInt(req.body.amount, 10);
    //const accountsJSON  = JSON.stringify(accounts)
    //writeJSON('json/accounts.json',accountsJSON)
    writeJSON()

    res.render("transfer", {message: "Transfer Completed"})
})

router.get('/payment',(req, res) => {
    res.render("payment",{account: accounts.credit})
})

router.post('/payment',(req, res) => {
    accounts.credit.balance = accounts.credit.balance - req.body.amount;
    accounts.credit.available = accounts.credit.available + parseInt(req.body.amount, 10);
    //const accountsJSON  = JSON.stringify(accounts)
    //writeJSON('json/accounts.json',accountsJSON)
    writeJSON()
    res.render("payment", {account: accounts.credit, message: "Payment Successful"})
})

module.exports = router