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
       d="M8.402 149.554H35.597V317.432H8.402z"
        onClick={handleObjectClick}
      />
      <path
        id="BASIC ED BLDG"
        className={`${className} object`}
         d="M69.966 19.326H127.54299999999999V124.71100000000001H69.966z"
        onClick={handleObjectClick}
      />
      <path
        id="GYMNASIUM"
        className={`${className} object`}
       d="M188.217 18.791H325.299V125.816H188.217z"
        onClick={handleObjectClick}
      />
      <path
        id="VEHICLE PARKING"
        className={`${className} object`}
        d="M68.053 142.307H153.667V219.84199999999998H68.053z"
        onClick={handleObjectClick}
      />
      <path
         id="PHINMA AVE"
        className={`${className} object`}
        d="M186.472 141.144H336.674V218.679H186.472z"
        onClick={handleObjectClick}
      />
      <path
        id="PHINMA FOREST"
        className={`${className} object`}
         d="M187.037 279.761H336.24V418.745H187.037z"
        onClick={handleObjectClick}
      />
      <path
        id="CHS BLDG"
        className={`${className} object`}
        d="M134.024 18.326H183.118V125.9H134.024z"
        onClick={handleObjectClick}
      />
      <path
        id="Riverside Bldg"
        className={`${className} object`}
        d="M393.399 12.274H480.998V102.465H393.399z"
        onClick={handleObjectClick}
      />
      <path
        id="STUDENT PLAZA"
        className={`${className} object`}
         d="M187.037 212.767H336.24V279.193H187.037z"
        onClick={handleObjectClick}
      />
      <path
        id="NORTH HALL"
        className={`${className} object`}
         d="M123.292 418.825H360.158V460.93399999999997H123.292z"
        onClick={handleObjectClick}
      />
      <path
        id="MBA Eng."
        className={`${className} object`}
         d="M329.149 11.556H391.236V72.625H329.149z"
        onClick={handleObjectClick}
      />
       <path
        id="MBA Eng."
        className={`${className} object`}
         d="M338.317 71.303H362.745V132.372H338.317z"
        onClick={handleObjectClick}
      />
      <path
        id="MBA Hall"
        className={`${className} object`}
       d="M338.223 133.774H362.651V194.84300000000002H338.223z"
        onClick={handleObjectClick}
      />
       <path
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
      />
      <path
        id="OP"
        className={`${className} object`}
        d="M74.59 242.987H91.273V262.45H74.59z"
        onClick={handleObjectClick}
      />
      <path
        id="FVR BLDG"
        className={`${className} object`}
         d="M74.894 216.648H152.05200000000002V242.367H74.894z"
        onClick={handleObjectClick}
      />
      <path
        id="CSDL/ITS BLDG"
        className={`${className} object`}
        d="M39.046 184.327H69.334V250.03199999999998H39.046z" 
        onClick={handleObjectClick}
      />
      <path
        id="CMA BLDG"
        className={`${className} object`}
         d="M72.661 287.848H149.26999999999998V412.552H72.661z"
        onClick={handleObjectClick}
      />
      <path
        id="Automative Bldg"
        className={`${className} object`}
         d="M71.073 418.219H116.627V461.638H71.073z"
        onClick={handleObjectClick}
      />
       <ellipse
      id="ATRIUM"
       cx={71.4} 
       cy={275.216} 
       rx={2.996} 
       ry={2.809} 
        className={`${className} object`}
        onClick={handleObjectClick}
      /> 
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
