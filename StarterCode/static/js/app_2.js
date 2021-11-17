d3.json("./samples.json").then(function(data) {
	console.log(data);
        Sample_values_top_10 = data.samples.sample_values[0].slice(0, 10);
        Otu_labels_top_10 = data.samples.otu_labels[0].slice(0, 10);
        Otu_ids_top_10 = data.samples.otu_ids[0].slice(0, 10);

        let trace1 = {
            x: Sample_values.reverse(),
            y: "OTU ${Otu_ids.reverse()}",
            text: Otu_labels,
            type: "bar",
            name: "OTUs",
            orientation: "h"
            };

        let traceData = [trace1];
        let Layout = {
    	// need to name a variable that shows the selected patient ID
            title: "top 10 OTUs found in Individual ID 941",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
                }
        };

        Plotly.newPlot("bar", traceData, Layout);

        // d3.selectAll("#selDataset").on("change", getData);

        // function getData() {
        //     var dropdownMenu = d3.select("#selDataset");
        //     // Assign the value of the dropdown menu option to a variable
        //     var dataset = dropdownMenu.property("value");
        //     // Initialize an empty array for the patient id's data
        //     var patient_ids = [];
          
        //     if (dataset == 'us') {
        //         data = us;
        //     // Call function to update the chart
        //     updatePlotly(patient_id);
        //   }
          
        //   // Update the restyled plot's values
        //   function updatePlotly(newdata) {
        //     Plotly.restyle("pie", "values", [newdata]);
        //   }
          

        // Plotting Bubbles
    otu_ids = data.samples.otu_ids
    otu_labels = data.samples.otu_labels
    sample_values = data.samples.sample_values

    var trace2 = {
    	x: otu_ids,
    	y: sample_values,
    	text: otu_labels,
    	mode: 'markers',
    	marker: {
    		color: otu_ids,
    		opacity: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
    		size: sample_values
    	}
    };

    var data_bubbles = [trace2];
// title axis
    var Layout_bubbles = {
    	title: "",
    	showlegend: false,
    	height: 500,
    	width: 900
    };
    Plotly.newPlot("bubble", data_bubbles, Layout_bubbles);

    // Sample's metadata
    metadata = data.metadata[0]
    console.log(metadata)
});

