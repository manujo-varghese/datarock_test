// parameter accepts a string array containing sku code to be processed
// return total cost associated wit it
function performBilling(codesScanned)
    { 
        // for referrals only so that we keep track of order of items
        var itemsInOrder = ["Super ipad", "MacBook Pro", "Apple TV", "VGA Adapter"];
        var price = [549.99, 1399.99, 109.50, 30.0];
        var count = [0, 0, 0, 0];
        var totalItems = 0;
        var itemBought = []
        // total price
        var totalCost = 0;
        for (var i = 0; i < codesScanned.length; i++) {
            var itemInLower = codesScanned[i].toLowerCase();
            itemBought[totalItems] = itemInLower;
            totalItems++;
            if (itemInLower== "ipd")
            {
                count[0]++;
            }
            else if (itemInLower== "mbp")
            {
                count[1]++;
            }
            else if (itemInLower== "atv")
            {
                count[2]++;
            }
            else if (itemInLower== "vga")
            {
                count[3]++;
            }
            else{
                return false;
            }
        }
         // Calculate price based on given criteria
        // RULE 1: If you buy 3 or more apple tv you will pay the price of 2 for each bundle offer
        if (count[2] >= 3)
        {
            var toBePricedIndividually = count[2] % 3;
            var bundleOffers = Math.floor(count[2] / 3);
            totalCost = totalCost + (219 * bundleOffers) + (toBePricedIndividually * price[2]);
        }
        else 
        {
            totalCost = totalCost + (price[2] * count[2]);
        }
        // RULE 2: if ipad is more than 4, the cost will be 499.99, else normal rate
        if (count[0] > 4)
        {
            totalCost = totalCost + (count[0] * 499.99);
        }
        else 
        {
            totalCost = totalCost + (count[0] * price[0]);
        }
        if(count[1] > 0){
            totalCost = totalCost + (count[1] *price[1]);
        }
        // exception case when only vga is added and not mac book pro
        if(count[1] == 0 && count[3] > 0){
            totalCost = totalCost + (count[3] * price[3]);
        }
         console.log("\nSKUs scanned: ");
        for (var i=0; i < totalItems; i++)
        {
            // Rule 3 implementation, bundle a vga with mbp
            if (itemBought[i] === "mbp")
            {
               console.log(itemBought[i] + ", vga");
            }
            else 
            {
               console.log(itemBought[i]);
            }
            if (i != totalItems - 1)
            {
               console.log(", ");
            }
        }
        console.log();
        console.log("Total Expected: $" + totalCost);
        return totalCost;
    }


module.exports = performBilling;
