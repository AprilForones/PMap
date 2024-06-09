export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
export const graphData: GraphData = {
  vertices: [
    { id: "v1", objectName: "null", cx:6.763, cy: 135.533 },
    { id: "v2", objectName: "null", cx: 52.187, cy: 135.779 },
    { id: "v3", objectName: "null", cx: 95.015, cy: 136.347 },
    { id: "v4", objectName: "BASIC ED BLDG", cx: 95.644, cy: 124.586  },
    { id: "v5", objectName: "null", cx: 156.995, cy: 136.039 },
    { id: "v6", objectName: "CHS BLDG", cx: 157.334, cy: 124.586 },
    { id: "v7", objectName: "null", cx: 174.804, cy: 136.039 },
    { id: "v8", objectName: "null", cx: 214.699, cy: 137.001 },
    { id: "v9", objectName: "null", cx: 256.882, cy: 136.674 },
    { id: "v10", objectName: "GYMNASIUM", cx: 257.166, cy: 125.249 },
    { id: "v11", objectName: "null", cx: 255.454, cy: 167.795 },
    { id: "v12", objectName: "null", cx: 330.483, cy: 135.113 },
    { id: "v13", objectName: "MBA Eng.", cx: 333.122, cy: 77.722 },
    { id: "v14", objectName: "MBA Hall", cx: 332.129, cy: 171.627 },
    { id: "v15", objectName: "PHINMA AVE", cx: 218.2, cy: 168.937 },
    { id: "v16", objectName:"STUDENT PLAZA", cx: 255.308, cy: 211.145  },
    { id: "v17", objectName: "null", cx: 334.122, cy: 215.467 },
    { id: "v18", objectName: "STUDENT PLAZA", cx: 333.155, cy: 241.957 },
    { id: "v19", objectName: "STUDENT PLAZA", cx: 244.441, cy: 271.309 },
    { id: "v20", objectName: "null", cx: 331.182, cy: 275.834 },
    { id: "v21", objectName: "null", cx: 244.341, cy: 274.966 },
    { id: "v22", objectName: "null", cx: 167.112, cy: 276.092 },
    { id: "v23", objectName: "null", cx: 167.238, cy: 253.454 },
    { id: "v24", objectName: "STUDENT PLAZA", cx: 185.046, cy: 241.957 },
    { id: "v25", objectName: "null", cx: 167.508, cy: 211.122 },
    { id: "v26", objectName: "null", cx: 168.926, cy: 168.161 },
    { id: "v27", objectName: "VEHICLE PARKING", cx: 95.046, cy: 160.23 },
    { id: "v28", objectName: "null", cx: 95.062, cy: 197.535 },
    { id: "v29", objectName: "null", cx: 74.494, cy: 198.616 },
    { id: "v30", objectName: "null", cx: 74.313, cy: 211.453 },
    { id: "v31", objectName: "FVR BLDG", cx: 94.772, cy: 213.13 },
    { id: "v32", objectName: "null", cx: 71.014, cy: 242.889 },
    { id: "v33", objectName: "Atrium", cx: 71.4, cy: 274.101 },
    { id: "v34", objectName: "CSDL/ITS BLDG", cx: 54.172, cy: 242.766 },
    { id: "v35", objectName: "null", cx: 53.985, cy: 274.958 },
    { id: "v36", objectName: "null", cx: 41.026, cy: 274.816 },
    { id: "v37", objectName: "FrontEntrance", cx: 38.818, cy: 223.85 },
    { id: "v38", objectName: "null", cx: 41.037, cy: 177.881 },
    { id: "v39", objectName: "null", cx: 53.037, cy: 161.881 },
    { id: "v40", objectName: "null", cx: 107.995, cy: 274.693 },
    { id: "v41", objectName: "FVR BLDG", cx: 108.849, cy: 244.554 },
    { id: "v42", objectName: "CMA BLDG", cx: 107.351, cy: 286.752 },
    { id: "v43", objectName: "null", cx: 167.305, cy: 327.561 },
    { id: "v44", objectName: "PHINMA FOREST", cx: 185.03, cy: 327.474 },
    { id: "v45", objectName: "PHINMA FOREST", cx: 244.634, cy: 279.901 },
    { id: "v46", objectName: "null", cx: 166.973, cy: 348.215 },
    { id: "v47", objectName: "CMA BLDG", cx: 153.039, cy: 348.317 },
    { id: "v48", objectName: "null", cx: 166.238, cy: 395.406 },
    { id: "v49", objectName: "NORTH HALL", cx: 166.527, cy: 414.72 },
    { id: "v50", objectName: "NORTH HALL", cx: 243.896, cy: 414.937 },
    { id: "v51", objectName: "null", cx: 107.995, cy: 274.693 },
    { id: "v52", objectName: "Automative Bldg", cx: 96.111, cy: 415.994 },
    { id: "v53", objectName: "MBA Hall.", cx: 335.484, cy: 310.99 },
    { id: "v54", objectName: "null", cx: 424.217, cy: 170.217 },
    { id: "v55", objectName: "Riverside Bldg", cx: 424.217, cy: 144.522 },
    { id: "v56", objectName: "null", cx: 482.043, cy: 169.175 },

    { id: "v57", objectName: null, cx: 38.818, cy: 223.85 },//Front entrance
    { id: "v58", objectName: null, cx: 95.644, cy: 124.586  },//BASIC ED BLDG
    { id: "v59", objectName: null, cx: 157.334, cy: 124.586 },//CHS
    { id: "v60", objectName: null, cx: 257.166, cy: 125.249 },//Gym
    { id: "v61", objectName: null, cx: 333.122, cy: 77.722 },//"MBA Eng."
    { id: "v62", objectName: null, cx: 332.129, cy: 171.627 },//"MBA Hall"
    { id: "v63", objectName: null, cx: 218.2, cy: 168.937 },//"PHINMA AVE"
    { id: "v64", objectName: null, cx: 255.308, cy: 211.145  },//"STUDENT PLAZA"
    { id: "v65", objectName: null, cx: 333.155, cy: 241.957 },//STUDENT PLAZA
    { id: "v66", objectName: null, cx: 244.441, cy: 271.309 },//STUDENT PLAZA
    { id: "v67", objectName: null, cx: 185.046, cy: 241.957 },//Student plaza
    { id: "v68", objectName: null, cx: 95.046, cy: 160.23 },//"VEHICLE PARKING"
    { id: "v69", objectName: null, cx: 94.772, cy: 213.13 },//"FVR BLDG"
    { id: "v70", objectName: null, cx: 71.4, cy: 274.101 },//Atrium
    { id: "v71", objectName: null, cx: 54.172, cy: 242.766 },//CSDL
    { id: "v72", objectName: null, cx: 108.849, cy: 244.554 },//FVR
    { id: "v73", objectName: null, cx: 107.351, cy: 286.752 },//CMA
    { id: "v74", objectName: null, cx: 185.03, cy: 327.474 },//"PHINMA FOREST"
    { id: "v75", objectName: null, cx: 244.634, cy: 279.901 },//"PHINMA FOREST"
    { id: "v76", objectName: null, cx: 153.039, cy: 348.317 },//CMA
    { id: "v77", objectName: null, cx: 166.527, cy: 414.72 },//NH
    { id: "v78", objectName: null, cx: 243.896, cy: 414.937 },//NH
    { id: "v79", objectName: null, cx: 96.111, cy: 415.994 },//autoBldg
    { id: "v80", objectName: null, cx: 335.484, cy: 310.99 },//MBA hall
    { id: "v81", objectName: null, cx: 424.217, cy: 144.522 },//Riverside
    { id: "v82", objectName: null, cx:6.763, cy: 135.533 },//vehicle entrance/exit
    { id: "v83", objectName: null, cx: 482.043, cy: 169.175 },//Pedistrian
  ],

  edges: [
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v82_to_v2", from: "v82", to: "v2" },
    { id: "v2_to_v1", from: "v2", to: "v1" },
   // { id: "v2_to_v82", from: "v2", to: "v82" },
    { id: "v2_to_v3", from: "v2", to: "v3" },
    { id: "v3_to_v2", from: "v3", to: "v2" },
    { id: "v3_to_v4", from: "v3", to: "v4" },
    { id: "v4_to_v3", from: "v4", to: "v3" },
    { id: "v58_to_v3", from: "v58", to: "v3" },
    //{ id: "v3_to_v58", from: "v3", to: "v58" },
    { id: "v3_to_v5", from: "v3", to: "v5" },
    { id: "v5_to_v3", from: "v5", to: "v3" },
    { id: "v5_to_v6", from: "v5", to: "v6" },
    { id: "v6_to_v5", from: "v6", to: "v5" },
    { id: "v59_to_v5", from: "v59", to: "v5" },
    //{ id: "v5_to_v59", from: "v5", to: "v59" },
    { id: "v5_to_v7", from: "v5", to: "v7" },
    { id: "v7_to_v5", from: "v7", to: "v5" },
    { id: "v5_to_v9", from: "v5", to: "v9" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v8_to_v7", from: "v8", to: "v7" },
    { id: "v9_to_v10", from: "v9", to: "v10" },
    //{ id: "v10_to_v9", from: "v10", to: "v9" },
    //{ id: "v9_to_v60", from: "v9", to: "v60" },
    { id: "v61_to_v12", from: "v61", to: "v12" },
    { id: "v9_to_v11", from: "v9", to: "v11" },
    { id: "v9_to_v12", from: "v9", to: "v12" },
    { id: "v11_to_v9", from: "v11", to: "v9" },
    { id: "v11_to_v15", from: "v11", to: "v15" },
    //{ id: "v15_to_v11", from: "v15", to: "v11" },
    { id: "v63_to_v11", from: "v63", to: "v11" },
    { id: "v64_to_v11", from: "v64", to: "v11" },
    { id: "v11_to_v16", from: "v11", to: "v16" },
    //{ id: "v16_to_v11", from: "v11", to: "v31" },
    { id: "v11_to_v14", from: "v11", to: "v14" },
    //{ id: "v14_to_v11", from: "v14", to: "v11" },
    { id: "v62_to_v11", from: "v62", to: "v11" },
    { id: "v12_to_v13", from: "v12", to: "v13" },
    //{ id: "v61_to_v12", from: "v61", to: "v12" },
    { id: "v12_to_v14", from: "v12", to: "v14" },
    { id: "v62_to_v12", from: "v62", to: "v12" },
    { id: "v63_to_v17", from: "v63", to: "v17" },
    { id: "v17_to_v63", from: "v7", to: "v8" },
    { id: "v14_to_v17", from: "v14", to: "v17" },
    //{ id: "v17_to_v14", from: "v17", to: "v14" },
    { id: "v17_to_v18", from: "v17", to: "v18" },
    { id: "v64_to_v17", from: "v64", to: "v17" },
    { id: "v17_to_v64", from: "v17", to: "v64" },
    { id: "v65_to_v17", from: "v65", to: "v17" },
    { id: "v17_to_v65", from: "v17", to: "v65" },
    { id: "v18_to_v20", from: "v18", to: "v20" },
    { id: "v20_to_v18", from: "v20", to: "v18" },
    //{ id: "v64_to_v20", from: "v64", to: "v20" },
    { id: "v19_to_v21", from: "v19", to: "v20" },
    { id: "v20_to_v21", from: "v20", to: "v21" },
    { id: "v66_to_v21", from: "v66", to: "v21" },
    { id: "v22_to_v21", from: "v22", to: "v21" },
    { id: "v21_to_v22", from: "v21", to: "v22" },
    { id: "v23_to_v22", from: "v23", to: "v22" },
    { id: "v22_to_v23", from: "v22", to: "v23" },
    { id: "v23_to_v25", from: "v23", to: "v25" },
    { id: "v25_to_v23", from: "v25", to: "v23" },
    { id: "v23_to_v24", from: "v23", to: "v24" },
    { id: "v24_to_v23", from: "v24", to: "v23" },
   // { id: "v25_to_v23", from: "v25", to: "v23" },
    { id: "v67_to_v23", from: "v67", to: "v23" },
    { id: "v25_to_v26", from: "v25", to: "v26" },
    { id: "v26_to_v25", from: "v26", to: "v25" },
    { id: "v26_to_v7", from: "v26", to: "v7" },
    { id: "v7_to_v26", from: "v7", to: "v26" },
    { id: "v3_to_v27", from: "v3", to: "v27" },
    { id: "v68_to_v3", from: "v68", to: "v3" },
    { id: "v27_to_v28", from: "v27", to: "v28" },
    { id: "v68_to_v28", from: "v68", to: "v28" },
    { id: "v28_to_v29", from: "v28", to: "v29" },
    { id: "v29_to_v30", from: "v29", to: "v30" },
    { id: "v30_to_v29", from: "v29", to: "v30" },
    { id: "v30_to_v31", from: "v30", to: "v31" },
    { id: "v69_to_v30", from: "v69", to: "v30" },
    { id: "v30_to_v32", from: "v30", to: "v32" },
    { id: "v32_to_v30", from: "v32", to: "v30" },
    { id: "v32_to_v34", from: "v32", to: "v34" },
    { id: "v34_to_v32", from: "v34", to: "v32" },
    { id: "v71_to_v32", from: "v71", to: "v32" },
    //{ id: "v23_to_v24", from: "v24", to: "v24" },
    { id: "v71_to_v35", from: "v71", to: "v35" },
    { id: "v35_to_v36", from: "v35", to: "v36" },
    { id: "v36_to_v35", from: "v36", to: "v35" },
    { id: "v37_to_v36", from: "v37", to: "v36" },
    { id: "v36_to_v37", from: "v36", to: "v37" },
    { id: "v57_to_v36", from: "v57", to: "v36" },
    { id: "v57_to_v38", from: "v57", to: "v38" },
    { id: "v37_to_v38", from: "v37", to: "v38" },
    { id: "v38_to_v37", from: "v38", to: "v37" },
    { id: "v38_to_v39", from: "v38", to: "v39" },
    { id: "v39_to_v38", from: "v39", to: "v38" },
    { id: "v32_to_33", from: "v32", to: "v33" },
    { id: "v32_to_v70", from: "v32", to: "v70" },
    { id: "v35_to_v33", from: "v35", to: "v33" },
    { id: "v70_to_v35", from: "v70", to: "v35" },
    { id: "v70_to_v40", from: "v70", to: "v40" },
    { id: "v33_to_v40", from: "v33", to: "v40" },
    { id: "v40_to_v33", from: "v40", to: "v33" },
    { id: "v40_to_v41", from: "v40", to: "v41" },
    { id: "v40_to_v42", from: "v40", to: "v42" },
    { id: "v72_to_v40", from: "v72", to: "v40" },
    { id: "v73_to_v40", from: "v73", to: "v40" },
    { id: "v40_to_v22", from: "v40", to: "v22" },
    { id: "v22_to_v40", from: "v22", to: "v40" },
    { id: "v22_to_v43", from: "v22", to: "v43" },
    { id: "v43_to_v22", from: "v43", to: "v22" },
    { id: "v43_to_v44", from: "v43", to: "v44" },
    { id: "v74_to_v43", from: "v74", to: "v43" },
    //{ id: "v23_to_v24", from: "v24", to: "v24" },
    { id: "v21_to_v45", from: "v21", to: "v45" },
    { id: "v45_to_v21", from: "v45", to: "v21" },
    { id: "v75_to_v21", from: "v75", to: "v21" },
    { id: "v20_to_v53", from: "v20", to: "v53" },
    { id: "v80_to_v20", from: "v80", to: "v20" },
    { id: "v78_to_v21", from: "v78", to: "v21" },
    { id: "v50_to_v45", from: "v50", to: "v45" },
    { id: "v45_to_v50", from: "v45", to: "v50" },
    { id: "v43_to_v46", from: "v43", to: "v46" },
    { id: "v46_to_v43", from: "v46", to: "v43" },
    { id: "v47_to_v46", from: "v47", to: "v46" },
    { id: "v46_to_v47", from: "v46", to: "v47" },
    { id: "v76_to_v47", from: "v76", to: "v47" },
    { id: "v46_to_v48", from: "v46", to: "v48" },
    { id: "v48_to_v46", from: "v48", to: "v46" }, 
    { id: "v48_to_v49", from: "v48", to: "v49" },
    { id: "v49_to_v48", from: "v49", to: "v48" },
    { id: "v77_to_v48", from: "v77", to: "v48" },
    //{ id: "v49_to_v51", from: "v49", to: "v51" },
    { id: "v49_to_v52", from: "v49", to: "v52" },
    { id: "v51_to_v52", from: "v51", to: "v52" },
    { id: "v52_to_v51", from: "v52", to: "v51" },
    { id: "v79_to_v49", from: "v79", to: "v49" },
    { id: "v14_to_v54", from: "v14", to: "v54" },
    { id: "v54_to_v14", from: "v54", to: "v14" },
    { id: "v54_to_v55", from: "v54", to: "v55" },
    { id: "v81_to_v54", from: "v81", to: "v54" },
    { id: "v83_to_v54", from: "v83", to: "v54" },
    { id: "v54_to_v56", from: "v54", to: "v56" },
    { id: "v56_to_v54", from: "v56", to: "v54" },

  ],
};
