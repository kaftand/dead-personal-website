
d3.selectAll("p").each(function(d, i) {
  d3.select(this).style("color", "blue")
  console.log(this)
})
console.log(d3.selectAll("p"))
console.log(d3.select("p").style('color','green'))
