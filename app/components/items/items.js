steal(
    'can',
    './items.stache!',
    './items.less!',
    './food_item/food_item.js',
    function(can, InitView){
        return can.Component.extend({
            tag: "sc-items",
            template: InitView,
            viewModel: {
                visible: false,
                message: "Hello There!",
                items: [
                    {
                        "itemName": "Apple Fiji",
                        "description": "An apple a day keeps the doctor away",
                        "image": "resources/images/fruits_banner.jpg",
                        "price": "Rs 100/kg"
                    }
                ]
            }
        });
    }
);
