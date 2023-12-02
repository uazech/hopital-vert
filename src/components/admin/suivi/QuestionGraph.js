import {questions} from "../../../questions";

export function getYAxis(responses, xAxis) {
    const yAxis = []
    const data = {}
    questions.forEach((_, index) => data[index + 1] = 0)
    responses.forEach((playerResponse) => {
        const keys = Object.keys(playerResponse['responses']);
        keys.forEach(key => data[key] += 1)
    })
    xAxis.forEach((xAxisValue, index) => {
        yAxis.push(data[index + 1])
    })
    return yAxis;
}

export function getOptions(yAxis, callback) {
    return {
        responsive:true,
        onClick: function(evt, element) {
            if(element.length > 0) {
                callback(element[0].index)
            }
        },
        scales: {
            y:
                {
                    min: 0,
                    max: Math.max(...yAxis),
                    stepSize: 5,
                    ticks: {
                        min: 0,
                        max: Math.max(...yAxis),
                        stepSize: 10
                    }
                }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                display: true,
                color: 'black',
                font: {
                    weight: 'bold',
                    size: 22,
                }
            }
        },
    };
}

export function getData(xAxis, yAxis) {
    return {
        labels: xAxis,
        datasets: [

            {
                label: 'Nombre de répondants',
                data: yAxis,
                backgroundColor: '#2196f3'
            },
        ],
    };
}