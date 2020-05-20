// Intialize Page
(async function(){
    var data = await d3.json("./samples.json");
        console.log(data);
    populateDropdown(data.names);
    buildBarChart(data.samples[0]);
        console.log(data.samples[0]);
    buildBubbleChart(data.samples[0]);    
    buildDemoInfo(data.metadata[0]);
    buildGaugeChart(data.metadata[0]);
})();

function populateDropdown(name) {
    var dropDown = d3.select("#selDataset") 
    name.forEach(id => {
        dropDown.append("option").property("value", id).property("text", id)
    })
};

function buildBarChart(data) {  
    var trace1 = {
        x: data.sample_values.slice(0, 10).reverse(),
        y: data.otu_ids,
        text: data.otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
        marker: {color: "#663399"}
    };

    var layout = {
        title: {text:"Top 10 OTU", font: {size: 24}},
        yaxis: {type : 'category'},
        width: 500,
        height: 450,
        margin: {
            l: 100,
            r: 100,
            t: 45,
            b: 50
        },
        showlegend: false,        
    };
        
    var plotdata = [trace1];


    Plotly.newPlot("bar", plotdata, layout);
};

function buildBubbleChart(data) {
    var trace2 ={
        X: data.sample_values,
        y: data.otu_ids,
        mode: "markers",
        marker: {
            size: data.sample_values,
            color: data.otu_ids},
        text: data.otu_labels
    };

    var layout2 = {
        title: {text:"OTU ID", font: {size: 24}},
        height: 600,
        width: 1000
    };

    var bubbledata = [trace2];

    Plotly.newPlot("bubble", bubbledata, layout2);
};

function buildDemoInfo(id) {
    var demoInfo = d3.select("#sample-metadata");
    demoInfo.html("");
    Object.entries(id).forEach(([key, value]) => {
        demoInfo.append("h6").text(`${key}:${value}`);
    });
}



async function optionChanged() {
    var data = await d3.json("./samples.json");
        console.log(data);
    var idSelection = d3.select("#selDataset").node().value;
        console.log(idSelection)
    var idSamples = data.samples.filter(row => {
        return row.id === idSelection})[0]
    var idDemoInfo = data.metadata.filter(row => {
        return row.id === +idSelection})[0]
        console.log(idDemoInfo);
    console.log(idSamples);
    buildBarChart(idSamples);
    buildBubbleChart(idSamples);
    buildDemoInfo(idDemoInfo);
    buildGaugeChart(idDemoInfo);

}




