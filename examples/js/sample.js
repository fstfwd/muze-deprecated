(function () {
    let env = muze();
    const DataModel = muze.DataModel;
    const SpawnableSideEffect = muze.SideEffects.SpawnableSideEffect;

    d3.json('./data/cars.json', (data) => {
        let jsonData = data,
            schema = [{
                name: 'Name',
                type: 'dimension'
            },
            {
                name: 'Maker',
                type: 'dimension'
            },
            {
                name: 'Miles_per_Gallon',
                type: 'measure'
            },

            {
                name: 'Displacement',
                type: 'measure'
            },
            {
                name: 'Horsepower',
                type: 'measure',
                defAggFn: 'avg'
            },
            {
                name: 'Weight_in_lbs',
                type: 'measure'
            },
            {
                name: 'Acceleration',
                type: 'measure',
                defAggFn: 'sum'
            },
            {
                name: 'Origin',
                type: 'dimension'
            },
            {
                name: 'Cylinders',
                type: 'dimension'
            },
            {
                name: 'Year',
                type: 'dimension'
            // subtype: 'temporal',
            // format: '%Y-%m-%d'
            }

            ];
        const rootData = new DataModel(jsonData, schema);

    // rootData = rootData.groupBy(['Year'], {
    //     Horsepower: 'mean',
    //     Acceleration: 'mean'
    // });

        env = env.data(rootData).minUnitHeight(40).minUnitWidth(40);
        const mountPoint = document.getElementById('chart');
        let canvas = env.canvas();
        canvas = canvas
        .rows(['Acceleration'])
        .columns(['Year'])
        .data(rootData)
        .minUnitHeight(100)
        .minUnitWidth(100)
        .height(600)
        .width(800)
        .layers([{
            mark: 'bar'
        }])
        // .detail(['Name']) // Show all the data point
        .color('Origin') // Color the points using cylinders
        .title('SPLOM', { position: 'top', align: 'right' })
        .subtitle('Correlation matrix of all the measures', { position: 'top', align: 'right' })
        .mount(mountPoint);
    });
}());
