steal(
    'can',
    './food_item.stache!',
    './food_item.less!',
    function(can, InitView){
        return can.Component.extend({
            tag: "sc-food-item",
            template: InitView,
            viewModel: {
                
            }
        });
    }
);
