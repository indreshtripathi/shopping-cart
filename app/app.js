steal(
    'can',
    './app.stache!',
    './app.less',
    './components/items/items.js',
    function(can, appTemplate){
        // data is now an instantiated can.Map object
        var data = new can.Map({
            name: 'Alex',  
            description: 'very cool',
            altDescription: 'quite excellent',
            swap: function() {
                var tmp = this.attr('description'); 
                this.attr('description', this.attr('altDescription'));
                this.attr('altDescription', tmp);
            }

        });

        var compiledTemplate = appTemplate(data); 
        $('#app').append(compiledTemplate);
    }
);
