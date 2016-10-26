steal(
    'can',
    '../../models/cart',
    './items.stache!',
    './items.less!',
    './food_item/food_item.js',
    './cart_item/cart_item.js',
    function(can, Cart, InitView){
        return can.Component.extend({
            tag: "sc-items",
            template: InitView,
            viewModel: can.Map.extend({
                define: {
                    items: {
                        value: [
                            {
                                "id": 1,
                                "itemName": "Apple Fiji",
                                "description": "An apple a day keeps the doctor away",
                                "image": "resources/images/items/apple.jpg",
                                "price": 10
                            },
                            {
                                "id": 2,
                                "itemName": "Orange",
                                "description": "An apple a day keeps the doctor away",
                                "image": "resources/images/items/apple.jpg",
                                "price": 15
                            },
                            {
                                "id": 3,
                                "itemName": "Mango",
                                "description": "An apple a day keeps the doctor away",
                                "image": "resources/images/items/apple.jpg",
                                "price": 5
                            },
                            {
                                "id": 4,
                                "itemName": "Banana",
                                "description": "An apple a day keeps the doctor away",
                                "image": "resources/images/items/apple.jpg",
                                "price": 8
                            },
                            {
                                "id": 5,
                                "itemName": "Jackfruit",
                                "description": "An apple a day keeps the doctor away",
                                "image": "resources/images/items/apple.jpg",
                                "price": 9
                            }
                    ]},
                    searchText: {
                        value: ""
                    },
                    cartFlag : {
                        value : false
                    },
                    searchItems: {
                        get: function(){
                            var text = this.attr('searchText').trim().toLowerCase();
                            if(text){
                                return this.attr('items').filter(function(element){
                                    return element.attr('itemName').toLowerCase().indexOf(text) !== -1;
                                });
                            }else {
                                return this.attr('items');
                            }                            
                        }
                    },
                    cart: {
                        get:function(){
                            return {
                                "items": Cart.attr('items'),
                                "nItems": Cart.attr('totalItems'),
                                "totalPrice": Cart.attr('totalPrice')
                            };
                        }
                    }
                },
                toggleCart: function(){
                    this.attr('cartFlag', !this.attr('cartFlag'));
                }
            }),
            events: {
                
            }
        });
    }
);
