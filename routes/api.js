const express = require("express");
const router = express.Router();
const format = /^\d+\.?(\d+)?\s?(km|kg|gal|l|lbs|mi)$/; // Regex to check the format

// Actual route for the conversion
router.get("/convert/input=:i", (req,res) => {
    // Checks to see if user input is in proper format
    if(format.test(req.params.i)){

        let unit = req.params.i.replace(/\d+\.?(\d+)?\s?/,""); // Actual user unit
        let result = (req.params.i.match(/\d+\.?(\d+)?/)); // Actual user amount

        // Switch statement to do proper conversion for the unit entered
        switch(unit){
            // Kilometers
            case 'km': 
            res.json({initNum: result[0].toString(), initUnit: unit, returnUnit: 'mi', string: req.params.i + ' converts to '+result[0] * 0.62137.toString()+' miles.'});
                break;
            // Kilograms
            case 'kg': 
            res.json({initNum: result[0].toString(), initUnit: unit, returnUnit: 'lbs', string: req.params.i + ' converts to '+result[0] * 2.2046.toString()+' lbs.'});
                break;
            // Liters
            case 'l': 
            res.json({initNum: result[0].toString(), initUnit: unit, returnUnit: 'gal', string: req.params.i + ' converts to '+result[0] * 0.26417.toString()+' gallons.'})
                break;
            // Gallons
            case 'gal': 
            res.json({initNum: result[0].toString(), initUnit: unit, returnUnit: 'l', string: req.params.i + ' converts to '+result[0] / 0.26417.toString()+' liters.'});
                break;
            // Pounds
            case 'lbs': 
            res.json({initNum: result[0].toString(), initUnit: unit, returnUnit: 'kg', string: req.params.i + ' converts to '+result[0] / 2.2046.toString()+' kilograms.'})
            // Miles
            case 'mi': 
            res.json({initNum: result[0].toString(), initUnit: unit, returnUnit: 'km', string: req.params.i + ' converts to '+result[0] / 0.62137.toString()+' kilometers.'})
            
        }
      // Anything else, Incorrect user input. Responed with error  
    }else{
        res.status(400).json({"Error": "Invalid Input"})
    }

    
})

module.exports = router;