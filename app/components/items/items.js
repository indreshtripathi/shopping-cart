steal(
    'can',
    './items.stache!',
    './items.less!',
    './food_item/food_item.js',
    function(can, InitView){
        return can.Component.extend({
            tag: "sc-items",
            template: InitView,
            viewModel: can.Map.extend({
                define: {
                    visible: {value: false},
                    message: {value: "Hello There!"},
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
                    }
                }
                
               
            }),
            events: {

            }
        });
    }
);
