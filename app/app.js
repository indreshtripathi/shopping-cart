steal(
    'can',
    './app.stache!',
    './app.less',
    './components/items/items.js',
    function(can, appTemplate){
        // data is now an instantiated can.Map object
        var data = new can.Map({
            
        });

        var compiledTemplate = appTemplate(data); 
        $('#app').append(compiledTemplate);
    }
);
