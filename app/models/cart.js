steal(
    'can', 
    function (can) {
    
    var Cart = can.Map.extend({}, {
        define: {
            items: {
                value: []
            },
            totalItems: {
                get: function(){
                    var total = 0;
                    this.attr('items').forEach(function(item){
                        total += item.attr('quantity');
                    })
                    return total;
                }
            },
            totalPrice : {
                get: function(){
                    var total = 0;
                    this.attr('items').forEach(function(item){
                        total += (item.attr('quantity') * item.attr('price'));
                    })
                    return total;
                }
            }
        }        
    });
    var cart = new Cart();
    return cart;
});