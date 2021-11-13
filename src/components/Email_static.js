import React from 'react'

const Email_static = () => {
    var dataPreferences = {
        series: [
            [25, 30, 20, 25]
        ]
    };

    var optionsPreferences = {
        donut: true,
        donutWidth: 40,
        startAngle: 0,
        total: 100,
        showLabel: false,
        axisX: {
            showGrid: false
        }
    };

    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    Chartist.Pie('#chartPreferences', {
        labels: ['53%', '36%', '11%'],
        series: [53, 36, 11]
    });
    return (
        <div>
            
        </div>
    )
}

export default Email_static
