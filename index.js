
function calculateBill(price, vat, tip) {

    const amount = price + vat + tip;
    var gbp = "£"
    const errorMessage = "error";

   

    if (isNaN(vat)) {
        return errorMessage;
    }  else if (price, vat, !tip){
        return errorMessage;
    }
    else {
        return gbp.concat(amount.toString());
    }

    
};

module.exports = calculateBill;