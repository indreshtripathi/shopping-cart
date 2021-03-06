steal(
    'can',
    '../../../models/cart',
    './food_item.stache!',
    './food_item.less!',
    function(can, Cart, InitView){
        return can.Component.extend({
            tag: "sc-food-item",
            template: InitView,
            viewModel: {
            },
            events: {
                '.add-to-cart click': function(el, ev){
                    var item = new can.Map({
                        "id": this.viewModel.attr('item.id'),
                        "itemName": this.viewModel.attr('item.itemName'),
                        "price": this.viewModel.attr('item.price'),
                        "quantity": 1,
                        "image": this.viewModel.attr('item.image'),
                        "total": this.viewModel.attr('item.price')
                    });

                    var cartItems = Cart.attr('items');
                    var found = false;

                    cartItems.each(function(element){
                        if(element.id === item.attr('id')){
                            element.attr('quantity', element.attr('quantity') + 1);
                            element.attr('total', element.attr('quantity') * element.attr('price'));
                            found = true;
                            return false;
                        }
                    });

                    if(!found){
                        Cart.attr('items').push(item);
                    }
                }
            }
        });
    }
);
