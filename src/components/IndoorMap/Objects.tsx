interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
        id="FrontEntrance"
        className={`${className} object`}
         d="M164 1013H493V2097H164z"
        onClick={handleObjectClick}
        />
       <path
          id="BASIC ED BLDG"
          className={`${className} object`}
           d="M950.5 617.5H1221.5V767.5H950.5z"
          onClick={handleObjectClick}
        /> 
      <path
        id="GYMNASIUM"
        className={`${className} object`}
       d="M1641.5 246.5H2540.5V758.5H1641.5z"
        onClick={handleObjectClick}
      />
      <path
        id="VEHICLE PARKING"
        className={`${className} object`}
        d="M857.5 1002.5H1570.5V1387.5H857.5z"
        onClick={handleObjectClick}
      />
      <path
         id="PHINMA AVE"
        className={`${className} object`}
        d="M1747.5 932.5H2682.5V1387.5H1747.5z"
        onClick={handleObjectClick}
      />
      <path
        id="PHINMA FOREST"
        className={`${className} object`}
          d="M1747.5 1870.5H2680.5V2814.5H1747.5z"
        onClick={handleObjectClick}
      />
      <path
        id="CELA DEP"
        className={`${className} object`}
         d="M1332.5 229.5H1574.5V762.5H1332.5z"
        onClick={handleObjectClick}
      />
      <path
        id="Riverside Bldg"
        className={`${className} object`}
        d="M3030.5 227.5H3755.5V965.5H3030.5z"
        onClick={handleObjectClick}
      />
      <path
        id="STUDENT PLAZA"
        className={`${className} object`}
         d="M1747.5 1444.5H2540.5V1865.5H1747.5z"
        onClick={handleObjectClick}
      />
      <path
        id="NORTH HALL"
        className={`${className} object`}
         d="M1430.5 2825.5H2680.5V3035.5H1430.5z"
        onClick={handleObjectClick}
      />
      <path
        id="MBA Eng."
        className={`${className} object`}
         d="M329.149 11.556H391.236V72.625H329.149z"
        onClick={handleObjectClick}
      />
       <path
        id="Engineering Bldg."
        className={`${className} object`}
         d="M2545.5 229.5H3027.5V525.5H2545.5z"
        onClick={handleObjectClick}
      />
      <path
        id="MBA Hall"
        className={`${className} object`}
       d="M2688.5 530.5H3027.5V3035.5H2688.5z"
        onClick={handleObjectClick}
      />
      
       {/* <path
        id="MBA Hall"
        className={`${className} object`}
       d="M337.911 196.016H362.339V220.611H337.911z"
        onClick={handleObjectClick}
      />
       <path
        id="MBA Hall"
        className={`${className} object`}
       d="M337.287 220.676H370.661V298.202H337.287z"
        onClick={handleObjectClick}
      />
       <path
        id="MBA Hall"
        className={`${className} object`}
       d="M337.911 299.021H362.339V382.57300000000004H337.911z"
        onClick={handleObjectClick}
      /> */}
      <path
        id="OP"
        className={`${className} object`}
        d="M859.5 1619.5H1157.5V1832.5H859.5z"
        onClick={handleObjectClick}
      />
      <path
        id="FVR BLDG"
        className={`${className} object`}
         d="M860.5 1396.5H1432.5V1614.5H860.5z"
        onClick={handleObjectClick}
      />
      <path
        id="CSDL/ITS BLDG"
        className={`${className} object`}
        d="M594.5 1161.5H796.5V1615.5H594.5z"
        onClick={handleObjectClick}
      />
      <path
        id="CMA BLDG"
        className={`${className} object`}
         d="M1144 2002H1740V2812H1144z"
        onClick={handleObjectClick}
      />
      <path
        id="Technical Vocational Bldg."
        className={`${className} object`}
         d="M1141.5 2825.5H1425.5V3035.5H1141.5z"
        onClick={handleObjectClick}
      />
      <path
        id="Finance Purchasing Dep/Teller"
        className={`${className} object`}
         d="M1437.5 1396.5H1583.5V1865.5H1437.5z"
        onClick={handleObjectClick}
      />
       <path
        id="Atrium"
        className={`${className} object`}
          d="M500.5 1870.5H1431.5V1988.5H500.5z"
        onClick={handleObjectClick}
      />
       <path
        id="Registrar Office"
        className={`${className} object`}
          d="M500.5 1870.5H1431.5V1988.5H500.5z"
        onClick={handleObjectClick}
      />
       <path
        id="CMA HALL"
        className={`${className} object`}
         d="M1591 1399H1740V1986H1591z"
        onClick={handleObjectClick}
      />
      
       {/* <ellipse
      id="ATRIUM"
       cx={71.4} 
       cy={275.216} 
       rx={2.996} 
       ry={2.809} 
        className={`${className} object`}
        onClick={handleObjectClick}
      />  */}

      {/* <path
        id="ATRIUM"
        className={`${className} object`}
        d="M6.911 125.966H341.295V143.519H6.911z"
        onClick={handleObjectClick}
      />
      <path
        id="7-Eleven"
        className={`${className} object`}
        d="M271.405 34.433l144.006-.114.19 146.272-144.281.014.085-146.172z"
        onClick={handleObjectClick}
      />
      <path
        id="Victoria's Secret"
        className={`${className} object`}
        d="M424.29 34.522l146.224-.113.063 146.316-146.362.01.075-146.213z"
        onClick={handleObjectClick}
      />
      <path
        id="Pandora"
        className={`${className} object`}
        d="M579.065 34.617l170.852-.098.088 146.316-171.013-.004.073-146.214z"
        onClick={handleObjectClick}
      />
      <path
        id="Foot Locker"
        className={`${className} object`}
        d="M758.677 34.72l155.194-.108.072 146.316-155.34.005.074-146.214z"
        onClick={handleObjectClick}
      />
      <path
        id="Pharmacy"
        className={`${className} object`}
        d="M922.523 34.818l174.226-.096.09 146.317-174.39-.006.074-146.215z"
        onClick={handleObjectClick}
      />
      <path
        id="GameStop"
        className={`${className} object`}
        d="M1105.14 34.92l155.263-.107.07 146.317-155.407.005.074-146.215z"
        onClick={handleObjectClick}
      />
      <path
        id="Claire's"
        className={`${className} object`}
        d="M1269.109 35.006l105.412-.136.02 146.317-105.51.034.078-146.215z"
        onClick={handleObjectClick}
      />
      <path
        id="Tobacco Shop"
        className={`${className} object`}
        d="M1244.815 412.508l179.773.266-.04 128.337-179.694-.064-.04-128.539z"
        onClick={handleObjectClick}
      />
      <path
        id="PetSmart"
        className={`${className} object`}
        d="M1244.728 549.605l98.037.282.177 183.25-98.255-4.044.041-179.488z"
        onClick={handleObjectClick}
      />
      <path
        id="Barbershop"
        className={`${className} object`}
        d="M1244.509 737.562l98.428 4.068-.193 189.675-98.283-.602.048-193.141z"
        onClick={handleObjectClick}
      />
      <path
        id="Mall Office"
        className={`${className} object`}
        d="M33.225 368.014l158.276-.11.083 265.887-158.45-.03.091-265.747z"
        onClick={handleObjectClick}
      />
      <path
        id="East Wing Toilet"
        className={`${className} object`}
        d="M1305.166 292.446l119.546.21-.043 111.717-119.492-.035-.011-111.892z"
        onClick={handleObjectClick}
      />
      <path
        id="North Wing Toilet"
        className={`${className} object`}
        d="M151.579 34.324l111.218-.134.127 146.349-111.43.033.085-146.248z"
        onClick={handleObjectClick}
      />
      <ellipse
      id="Entrance"
       cx={71.4} 
       cy={275.216} 
       rx={2.996} 
       ry={2.809} 
        className={`${className} object`}
        onClick={handleObjectClick}
      /> */}
    </g>
  );
}

export default Objects;
