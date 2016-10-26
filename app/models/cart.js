steal(
    'can', 
    function (can) {
    
    var Cart = can.Map.extend({}, {
        define: {
            items: {
                value: []
            }
        }        
    });
    var cart = new Cart();
    return cart;
});