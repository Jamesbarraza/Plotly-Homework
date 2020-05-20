// Bonus Gauge Chart

function buildGaugeChart(row) {
    
    var trace3 = {
        type: "indicator",
        mode: "gauge+number+delta",
        value: row.wfreq,        
        delta: {reference: 2.5},
        title:  {text: "Number of Scrubbings Per Week", font: {size: 20}},
        gauge: {            
            axis: {range: [null, 9], tickwidth: 2, tickcolor: "black"},
            bar: {color: "#FAFAD2"},
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "black",
            steps: [
                {range: [0, 1], color: "red"},
                {range: [1, 2.5], color: "pink"},
                {range: [2.5, 4.5], color: "lightgreen"},
                {range: [4.5, 6.75], color: "forestgreen"},
                {range: [6.75, 9], color: "darkgreen"}
            ],
            threshold: {
                line: {color: "black", width: 4},
                thickness: 1,
                value: 2.5
            }
        }

    };
    console.log(row.wfreq)
    var layout3 = {
        title: {text: "Belly Button Washing Frequency", font: {size: 24}},
        width: 500,
        height: 450,
        margin: {t: 45, r: 25, l: 25, b: 10},
        //paper_bgcolor: "lavender",
        font: {color: "black", family: "Arial"}
    };

    data3 = [trace3];

    Plotly.newPlot("gauge", data3, layout3);

};