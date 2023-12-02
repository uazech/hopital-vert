import "chartjs-plugin-annotation";

export function getScoreGraphOptions(max, init ) {
    return {
        indexAxis: 'y',
        responsive: true,
        scales: {
            y: {
                display: true,
            },
            x: {
                max: max,
                min: 0,
                display: true,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 22,
                }
            },
            tooltip: {
                callbacks: {
                    footer: () => scoreEnvironnementalFooter(init),
                }
            }

        },

    };
}
const scoreEnvironnementalFooter = (init) => {
    return 'Valeur de départ : ' + init;
};

export function getScoreData(xAxis, yAxis, label, backgroundColor) {
    return {
        labels: xAxis,
        datasets: [
            {
                label: label,
                data: yAxis,
                backgroundColor: backgroundColor

            },
        ],
    };
}
