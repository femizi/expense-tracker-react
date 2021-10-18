const Transaction = require('../models/Transaction')
// desc Get all transactions
// @route Get /api/v1/transactions
// @ascess Public
exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            success:  true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            error: 'Server Error'
        })
        
    }
}
// desc ADD transactions
// @route post /api/v1/transactions
// @ascess Public
exports.addTransactions = async (req,res,next) => {
try {
    const{text , amount} = req.body;

    const transaction = await Transaction.create(req.body)

    return res.status(201).json({
        success:true,
        data: transaction
    })
    
} catch (err) {
    if(err.name ==='ValidationError'){
        const messages = Object.values(err.errors).map(val =>val.message)

        return res.status(400).json({
            sucess:false,
            error:messages
        })
    }else{
        return res.status(500).json({
            sucess: false,
            error: 'Server error'
        })
    }
    
}

   
}
// desc delete all transactions
// @route post /api/v1/transactions/:id
// @ascess Public
exports.deleteTransactions = async (req,res,next) => {
  try {
      const transaction = await Transaction.findById(req.params.id)
      if (!transaction) {
          return res.status(404).json({
              success: false,
              error: 'No transaction found'
          })
        
      } else {
        await transaction.remove()

        return res.status(200).json({
            sucess: true,
            data:{}
        })
      }
  } catch (err) {
    return res.status(500).json({
        sucess: false,
        error: 'Server error'
    })
      
  }
}