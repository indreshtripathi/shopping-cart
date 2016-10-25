steal(
    'can',
    './items.stache!',
    function(can, InitView){
        return can.Component.extend({
            tag: "sc-items",
            template: InitView,
            viewModel: {
                visible: false,
                message: "Hello There!"
            }
        });
    }
);
