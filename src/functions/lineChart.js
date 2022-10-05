import * as d3 from 'd3';

function lineChart(data) {
    d3.select('.analytics__content svg').remove();

    // set the dimensions and margins of the graph
    var margin = { top: 25, right: 25, bottom: 25, left: 50 },
        rwdSvgWidth = parseInt(d3.select('.analytics__content').style('width')),
        rwdSvgHeight = parseInt(d3.select('.analytics__content').style('height')),
        width = rwdSvgWidth - margin.left - margin.right,
        height = rwdSvgHeight - margin.top - margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse('%Y/%m/%d');
    var formatTime = d3.timeFormat('%m/%d');

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line
    var valueline = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.close); });

    var div = d3.select('.analytics__content').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select('.analytics__content').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform',
            `translate(${margin.left},${margin.bottom})`);

    data.forEach(function (d) {
        d.date = parseTime(d.date);
        d.close = +d.close;
    });

    // scale the range of the data
    x.domain(d3.extent(data, function (d) { return d.date; }));
    y.domain(d3.extent(data, function (d) { return d.close; }));


    // add the valueline path.
    svg.append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', valueline);


    // add the dots with tooltips
    svg.selectAll('dot')
        .data(data)
        .enter().append('circle')
        .attr('class', 'circle')
        .attr('r', 5)
        .attr('cx', function (d) { return x(d.date); })
        .attr('cy', function (d) { return y(d.close); })
        .on('mouseover', function (event, d) {
            div.transition()
                .duration(200)
                .style('opacity', .9);
            div.html(formatTime(d.date) + '<br/>' + '收盤: ' + d.close)
                .attr('class', 'tooltip')
                .style('left', (event.pageX - 72) + 'px')
                .style('top', (event.pageY - 72) + 'px');
        })
        .on('mouseout', function (d) {
            div.transition()
                .duration(500)
                .style('opacity', 0);
        });

    let ticksCount;
    if (window.outerWidth <= 768) {
        ticksCount = 5;
    } else { ticksCount = 10; }

    // add the X Axis
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x).ticks(ticksCount));

    // add the Y Axis
    svg.append('g')
        .call(d3.axisLeft(y));
}

export default lineChart;