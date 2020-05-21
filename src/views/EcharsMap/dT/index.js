import * as d3 from 'd3';

import * as topojson from 'topojson-client';

import sjon from './省.json';
//D:\dome\vue\git\vue-\src\views\EcharsMap\dT\省.json
function setdtmap({
  id,
  width = 1000,
  height = 600,
  sjsons = sjon,
  csstit
}) {
  // console.log("************------")
  // console.log(sjsons)
  let ssbx = d3.select(id)
  // ssbx.attr("position", 'relative')
  // .attr("marginBottom", '2em')
  let ssvgdom = ssbx.append("svg")
    .attr("width", width)
    .attr("height", height)

  //提示框
  let tooltip = ssbx.append("div")
    // .attr("opacity",0)
    .attr("class", csstit)
  // position: absolute;
  //   width: 120px;
  //   height: auto;
  // .style("position","absolute")
  // .style("width","120px")
  // .style("height","auto")



  //定义投影，好多专业术语，地图投影的类型
  let project = d3.geoMercator()
    .center([100, 40]).scale(800)
    .translate([width / 2, height / 2])
  //路径生成器
  let pathh = d3.geoPath().projection(project)

  //两个颜色生成器，一个的话有的两个相邻省的颜色会相同。弄两个好像会区分开。
  let collor1 = d3.schemePaired
  let collor2 = d3.schemeSet3

  // let color = d3.interpolateInferno;
  // console.log(typeof sjsons)
  // let rooy = JSON.parse( sjsons)  ;
  let rooy = sjsons;
  // d3.json(sjsons).then(function (rooy) {
  // console.log(rooy)
  let oonj = {}; //这个对象是将TopoJSON 转化为GEOJSON 需要的。
  let arcarr = [];
  let cooiind = {}; //这个对象主要是判断属于同一个地区。key是下级地区的名称，value是上级的id，他这数据我只会这么用。
  oonj.type = "GeometryCollection";
  // oonj.geometries = []
  let objdd = rooy.objects

  // console.log(typeof rooy)
  // console.log("objdd")
  // console.log(objdd)
  for (let i in objdd) {
    objdd[i].geometries.forEach((a, b) => {
      // console.log(a)
      // console.log(i)

      cooiind[a.properties.name] = i
      arcarr.push(a)
    });
    // console.log(objdd[i].geometries)
    // arcarr.push()
  }
  // console.log(cooiind)
  oonj.geometries = arcarr;
  // console.log(oonj)
  //上面的数据处理打印下应该就能看明白。
  //将TopoJSON 转化为GEOJSON。topojson.feature(拓扑, 对象)，对象就是上面处理的。TopoJSON其实就是拓扑数据。
  let geopee = topojson.feature(rooy, oonj)
  // console.log(geopee)
  //下面就是绘制地图了
  let gg = ssvgdom.append("g")
  let ppath = gg.selectAll("path").data(geopee.features)
    .enter().append("path");

  // console.log(ppath)
  ppath.attr("class", "province")
    .style("fill", (d, i) => {
      // console.log(colorind[d.properties.name])   
      //cooiind[a.name]
      // let iing = colorind[d.properties.name]
      //填充颜色，看下是否为同一上级。刚刚想到了另一种绘制方法。不用处理这个数据。rooy.objects是数组，数组中的每个值都分一个组(我那颜色处理对象也是根据这处理的)。这样转化为GEOJSON的时候那个对象就不用处理，颜色也不用了。路径渲染的时候可以写个函数（甚至数据转化都可以写里面）。
      let iing = cooiind[d.properties.name]
      if (iing == undefined) {
        console.log(d.properties)
      }
      let innd = parseInt(iing)
      if (innd % 2) {
        return collor1[innd % 12]
      } else {
        return collor2[innd % 12]
      }
      // console.log(iing)
      // return color[parseInt(iing)% 12]
      // return color((parseInt(iing)-11)/ 90)
    }).attr("d", pathh)
    .on("mousemove", function (d, i) {
      let domm = d3.select(this);
      // console.log(domm)
      domm.attr("opacity", 1)
        .transition().duration(200)
        .attr("opacity", .2)
      // .style("cursor" ,"pointer")
      // console.log(d)
      //cursor: pointer;
      // console.log(d3.mouse(this))
      // console.log(d3.event)
      //提示框内容，位置

      // .attr("opacity", 1)
      if (tooltip.style("display") !== "block") {
        tooltip
          .style("left", (d3.event.offsetX - 20) + "px")
          .style("top", (d3.event.offsetY + 10) + "px")
          .html(`${d.properties.name}`)
          .style('display', 'block')
      }

      // .style('z-index',"3")
      // color(i) 为被选择图形的颜色
      // tooltip.style("box-shadow", "10px 0px 0px " + color(i));
      console.log(tooltip.style("display"))

    })
    .on("mouseover", function (d, i) {
      if (tooltip.style("display") !== "block") {
        tooltip
          .style("left", (d3.event.offsetX - 20) + "px")
          .style("top", (d3.event.offsetY + 10) + "px")
          .html(`${d.properties.name}`)
          .style('display', 'block')
      }
    })
    .on("mouseout", function (d, i) {
      let domm = d3.select(this);
      domm.attr("opacity", .2)
        .transition().duration(200)
        .attr("opacity", 1)

      // .style("cursor" ,"auto")
      tooltip
        // .style("opacity", 0)
        .style("display", 'none')
      // .style('z-index',0)
    })
  // })
}

export {
  setdtmap,
}