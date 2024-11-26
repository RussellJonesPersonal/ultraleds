

const table = new Tabulator("#example-table", {
  minheight:"200px",
  maxHeight:"100%",
  layout:"fitColumns",
  data:tabledata,
  columns:[
      {title:"Name", field:"name", minWidth:250, sorter:"string",  dir:"asc"},
      {title:"SKU", field:"sku", width:200},
      {title: "Family", field:"family", width:100, headerSort:false, headerFilter:true, headerFilterPlaceholder:"Family", headerFilterParams:{values:{"":""}, clearable:true}},
      {title:"CCT", field:"cct", width:140, headerSort:false, headerFilter:true, headerFilterPlaceholder:"All", headerFilterParams:{values:{"":""}, clearable:true}},
      {title:"CRI", field:"cri", width:60},
      {title:"Cut points (mm)", field:"cutpoints", width:90},
      {title:"Efficiency (lm/W)", field:"efficiancy", width:85},
      {title:"Input voltage max (V)", field:"inputvoltagemax", width:100, headerSort:false, headerFilter:true, headerFilterPlaceholder:"All", headerFilterParams:{values:{"":""}, clearable:true}},
      {title:"Input voltage min (V)", field:"inputvoltagemin", width:100, headerSort:false, headerFilter:true, headerFilterPlaceholder:"All", headerFilterParams:{values:{"":""}, clearable:true}},
      {title:"IP Rating", field:"iprating", width:100, headerSort:false, headerFilter:true, headerFilterPlaceholder:"All", headerFilterParams:{values:{"":""}, clearable:true}},
      {title:"Leds/m", field:"ledsm", width:70},
      {title:"Length", field:"datalength", width:70},
      {title:"Lm/m", field:"lmm", width:70},
      {title:"W/m", field:"wm", width:70},
      {title:"Width", field:"datawidth", headerSort:false, width:70},
      {title:"Datasheets", field:"downloads", formatter:"html", headerSort:false, width:110}
  ],
});