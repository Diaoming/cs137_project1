function GenerateEmail()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var id = document.getElementById("id").value;
    var quantity = document.getElementById("quantity").value;
    var shipping = document.getElementById("shipping").value;
    var address = document.getElementById("address").value;

    var cardNo = document.getElementById("cardNo").value;
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var cardPin = document.getElementById("cardPin").value;
    
    //verification
    if(id<=0 || id>=11 || isNaN(id))
    {
        alert("Invalid product ID, must be a number and between 1-10.");
        return;
    }   
    if(quantity<=0 || quantity>=21 || isNaN(quantity))
    {
        alert("Invalid quantity, must be a number and between 1-20.");
        return;
    }
    var lastComma = address.lastIndexOf(',');
    console.log(lastComma);
    var zip = address.substring(lastComma+1,address.length).replace(/\s/g, '');
    console.log(zip);
    if(zip.length != 5 || isNaN(zip))
    {
        alert("Invalid Address, must have 5-digit ZIP code after the last comma.");
        return;
    }
    if(isNaN(cardNo) || cardNo.toString().length != 16 || cardNo.toString()[0] != 4)
    {
        alert("Invalid Card Number, must be a number and has 16 digits, starting with 4 (Visa Cards Only).");
        return;
    }
    if(isNaN(cardPin) || cardPin.toString().length != 3)
    {
        alert("Invalid Card PIN, must be a number and has 3 digits.");
        return;
    }

    var email_div = document.getElementById("email");
    if(email_div != null)
        email_div.remove();

    document.body.innerHTML += '<div class="main_p1" id="email">\
    <b>Generated Email</b><br>\
    <label for="recipient">Recipient:</label><br>\
    <textarea id="recipient" value="" cols="50" rows="1"></textarea><br>\
    <label for="content">Content:</label><br>\
    <textarea id="content" value="" cols="50" rows="10"></textarea><br>\
    <br></div>';

    var email_text = "Receiving Order from: " + fname + " " + lname +"\n" +
        "Item Id: " + id + "\n" + 
        "Quantity: " + quantity + "\n" +
        "Address: " + address + "\n" + 
        "Shipping: " + shipping + "\n" +
        "Card No: " + cardNo + "\n" +
        "Card Expiry Date: " + year + "/" + month + "\n" +
        "Card PIN: " + cardPin + "\n";


    document.getElementById("recipient").value = "demingz1@uci.edu";
    document.getElementById("content").value = email_text;
    console.log(fname);
}