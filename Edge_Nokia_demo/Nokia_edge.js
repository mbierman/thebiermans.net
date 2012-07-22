/**
 * Adobe Helium: symbol definitions
 */
window.symbols = {
"stage": {
   version: "0.1",
   baseState: "Base State",
   initialState: "Base State",
   parameters: {

   },
   content: {
      dom: [
        {
            id:'Fish',
            type:'image',
            rect:[0,0,500,378],
            fill:['rgba(0,0,0,0)','images/Nokia%20Fish.png'],
            transform:[[-15.78907,-24.06251],,,[0.7,0.7]],
        },
        {
            id:'background',
            type:'rect',
            rect:[3,2,476.24709892273,314.75864855647],
            borderRadius:[30,30,30,30],
            fill:['rgba(192,192,192,1)'],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[-2.0119,0.11302]],
        },
        {
            id:'NPNG',
            type:'image',
            rect:[0,0,188,135],
            fill:['rgba(0,0,0,0)','images/N.png'],
            transform:[,,,[0.5,0.5]],
        },
        {
            id:'OPNG',
            type:'image',
            rect:[0,0,179,138],
            fill:['rgba(0,0,0,0)','images/O.png'],
            transform:[[97.78736,202.04896],,,[0.5,0.5]],
        },
        {
            id:'KPNG',
            type:'image',
            rect:[0,0,179,138],
            fill:['rgba(0,0,0,0)','images/K.png'],
            transform:[[187.49546,204.25526],,,[0.5,0.5]],
        },
        {
            id:'IPNG',
            type:'image',
            rect:[0,0,49,135],
            fill:['rgba(0,0,0,0)','images/I.png'],
            transform:[[309.5748],,,[0.5,0.5]],
        },
        {
            id:'APNG',
            type:'image',
            rect:[0,0,199,142],
            fill:['rgba(0,0,0,0)','images/A.png'],
            transform:[[293.17669],,,[0.5,0.5]],
        },
        {
            id:'End',
            type:'rect',
            rect:[77.166518211365,52.621340751648,476.76137447358,320.52044105529],
            fill:['rgba(241,241,241,1.00)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[-77.54629,-53.24074]],
        },
        {
            id:'HTML5',
            type:'image',
            rect:[0,0,560,484],
            fill:['rgba(0,0,0,0)','images/html5%2Dlogo.png'],
            transform:[[-42.38553,-78.36914],,,[0.65,0.65]],
        },
        {
            id:'Connecting',
            type:'image',
            rect:[0,0,800,119],
            fill:['rgba(0,0,0,0)','images/Connecting%20People1.png'],
            transform:[[251.33371,135.68341],,,[0.4,0.4]],
        },
        {
            id:'Browser',
            type:'image',
            rect:[0,0,188,187],
            fill:['rgba(0,0,0,0)','images/nokia%20browser1.png'],
            transform:[[268.60303,-186.51729]],
        },
        {
            id:'NokiaBrowser',
            type:'text',
            rect:[75.231474876404,243.05552577972,332.18946838379,45.957214355469],
            text:"Nokia Browser",
            align:"center",
            font:["Lucida Sans Unicode, Lucida Grande, sans-serif",16,"rgba(0,0,0,1)","normal","none","normal"],
            transform:[[-39.03539,-42.48953]],
        },
        {
            id:'Billion',
            type:'text',
            rect:[121.52777004242,358.79624843597,425.87617492676,40.911651611328],
            text:"Internet for the next Billion.",
            align:"center",
            font:["Arial, Helvetica, sans-serif",24,"rgba(0,6,2,1.00)","normal","none","normal"],
            transform:[[-89.21533,-137.34719]],
        },
        {
            id:'Edge',
            type:'image',
            rect:[0,0,300,169],
            fill:['rgba(0,0,0,0)','images/edge_logo%2D4e36b7f%2Dlisting%2Dthumb%2D300x169%2D24185%2Df.jpg'],
            transform:[[95.87944,69.87394]],
        },
        {
            id:'Madewith',
            type:'text',
            rect:[64.814810752869,21.990738868713,409.43733596802,60.528783798218],
            text:"Made with Adobe Edge… ",
            align:"center",
            font:["Arial, Helvetica, sans-serif",24,"rgba(0,6,2,1)","normal","none","normal"],
        },
        {
            id:'Copy',
            type:'text',
            rect:[46.296290397644,280.09257411957,89.084201812744,16.610626220704],
            text:"© 2011 Nokia",
            align:"-webkit-auto",
            font:["Arial, Helvetica, sans-serif",12,"rgba(0,0,0,1)","normal","none","normal"],
            transform:[[45.2519,13.70805]],
        },
        {
            id:'BL',
            type:'rect',
            rect:[15.046294212341,2.3148145675659,10,320],
            fill:['rgba(197,235,124,1.00)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[16,-10]],
        },
        {
            id:'BR',
            type:'rect',
            rect:[428.24070644379,5.787036895752,9.9419555664062,320],
            fill:['rgba(197,235,124,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[-10]],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#stage": [
            ["style", "height", '320px'],
            ["style", "width", '480px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden']
         ],
         "#APNG": [
            ["transform", "translateX", '293.17669px'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-408.3599px'],
            ["transform", "scaleY", '0.5']
         ],
         "#KPNG": [
            ["transform", "translateX", '187.49546px'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-213.16459px'],
            ["transform", "scaleY", '0.5']
         ],
         "#NPNG": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '0.5'],
            ["transform", "translateY", '-213.16459px']
         ],
         "#End": [
            ["color", "background-color", 'rgba(241,241,241,1.00)'],
            ["transform", "translateX", '-77.54629px'],
            ["style", "height", '320.52044105529px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-53.24074px'],
            ["style", "width", '479.44692134858px']
         ],
         "#IPNG": [
            ["transform", "translateX", '309.5748px'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-213.16459px'],
            ["transform", "scaleY", '0.5']
         ],
         "#background": [
            ["color", "background-color", 'rgba(80,182,44,1.00)'],
            ["style", "border-top-left-radius", [30,30],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-2.0119px'],
            ["transform", "rotateZ", '0'],
            ["style", "opacity", '0.0028492647058823'],
            ["style", "border-top-right-radius", [30,30],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "width", '476.24709892273px'],
            ["style", "border-bottom-left-radius", [30,30],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "originX", '50%'],
            ["style", "height", '314.75864855647px'],
            ["transform", "originY", '50%'],
            ["transform", "translateY", '0.11302px'],
            ["style", "border-bottom-right-radius", [30,30],{valueTemplate:'@@0@@px @@1@@px'}]
         ],
         "#OPNG": [
            ["transform", "translateX", '97.78736px'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-213.16459px'],
            ["transform", "scaleY", '0.5']
         ],
         "#Billion": [
            ["color", "color", 'rgba(0,6,2,1.00)'],
            ["transform", "translateX", '-89.21533px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '40.911651611328px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-137.34719px'],
            ["style", "font-size", '24px']
         ],
         "#Browser": [
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-195.00473px'],
            ["transform", "translateX", '290.93838px']
         ],
         "#Fish": [
            ["transform", "translateX", '-15.78907px'],
            ["style", "height", '378px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.7'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-24.06251px'],
            ["style", "width", '500px']
         ],
         "#BR": [
            ["style", "height", '0px'],
            ["transform", "translateX", '10.66336px'],
            ["transform", "translateY", '-10px'],
            ["style", "width", '10px']
         ],
         "#Connecting": [
            ["transform", "translateX", '251.33371px'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '135.75122px'],
            ["transform", "scaleY", '0.4']
         ],
         "#BL": [
            ["color", "background-color", 'rgba(197,235,124,1.00)'],
            ["transform", "translateX", '13.66336px'],
            ["style", "height", '0px'],
            ["transform", "translateY", '-10px'],
            ["style", "width", '10px']
         ],
         "#Madewith": [
            ["style", "opacity", '1'],
            ["transform", "skewY", '0'],
            ["transform", "translateX", '422.42735px'],
            ["transform", "skewX", '30deg'],
            ["style", "height", '32.190393447876px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '7.22926px'],
            ["style", "width", '409.43733596802px']
         ],
         "#Copy": [
            ["style", "font-size", '12px'],
            ["transform", "translateX", '45.2519px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '16.610626220704px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '13.70805px'],
            ["style", "width", '187.21063613892px']
         ],
         "#HTML5": [
            ["transform", "translateX", '640.52995px'],
            ["transform", "skewX", '30deg'],
            ["transform", "scaleX", '0.65'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-87.62841px'],
            ["transform", "scaleY", '0.65']
         ],
         "#NokiaBrowser": [
            ["transform", "translateX", '-50px'],
            ["color", "color", 'rgba(37,162,82,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '60px'],
            ["style", "width", '423.37599182129px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '5'],
            ["style", "height", '81.443511962891px'],
            ["style", "font-family", 'Lucida Sans Unicode, Lucida Grande, sans-serif'],
            ["transform", "translateY", '-44.78048px'],
            ["transform", "scaleY", '5']
         ],
         "#Edge": [
            ["transform", "scaleY", '0.00068'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '69.87394px'],
            ["transform", "translateX", '88.11019px']
         ]
      }
   },
   actions: {

   },
   bindings: [

   ],
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18862.508076241,
         timeline: [
            { id: "eid722", tween: [ "transform", "#Madewith", "skewX", '0deg', { valueTemplate: undefined, fromValue: '30deg'}], position: 16397, duration: 110, easing: "linear" },
            { id: "eid744", tween: [ "transform", "#BL", "translateY", '-10px', { valueTemplate: undefined, fromValue: '-10px'}], position: 18286, duration: 0, easing: "linear" },
            { id: "eid567", tween: [ "style", "#APNG", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 8069, duration: 50, easing: "linear" },
            { id: "eid710", tween: [ "transform", "#Madewith", "translateX", '-3.33663px', { valueTemplate: undefined, fromValue: '422.42735px'}], position: 16243, duration: 154, easing: "linear" },
            { id: "eid713", tween: [ "transform", "#Madewith", "translateX", '-29.73548px', { valueTemplate: undefined, fromValue: '-3.33663px'}], position: 16397, duration: 110, easing: "linear" },
            { id: "eid755", tween: [ "transform", "#Madewith", "translateX", '-550px', { valueTemplate: undefined, fromValue: '-29.73548px'}], position: 17613, duration: 611, easing: "linear" },
            { id: "eid775", tween: [ "transform", "#Edge", "translateX", '-475.16547px', { valueTemplate: undefined, fromValue: '88.11019px'}], position: 17613, duration: 775, easing: "linear" },
            { id: "eid274", tween: [ "style", "#Fish", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 2348, duration: 185, easing: "linear" },
            { id: "eid353", tween: [ "style", "#End", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 8392, duration: 569, easing: "linear" },
            { id: "eid782", tween: [ "style", "#End", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 9480, duration: 62, easing: "linear" },
            { id: "eid569", tween: [ "style", "#KPNG", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 8214, duration: 50, easing: "linear" },
            { id: "eid383", tween: [ "transform", "#KPNG", "translateY", '202px', { valueTemplate: undefined, fromValue: '-213.16459px'}], position: 3723, duration: 600, easing: "easeOutBounce" },
            { id: "eid402", tween: [ "transform", "#KPNG", "translateY", '55.48547px', { valueTemplate: undefined, fromValue: '202px'}], position: 6144, duration: 488, easing: "linear" },
            { id: "eid382", tween: [ "transform", "#OPNG", "translateY", '202px', { valueTemplate: undefined, fromValue: '-213.16459px'}], position: 3188, duration: 600, easing: "easeOutBounce" },
            { id: "eid403", tween: [ "transform", "#OPNG", "translateY", '54.98816px', { valueTemplate: undefined, fromValue: '202px'}], position: 6144, duration: 488, easing: "linear" },
            { id: "eid768", tween: [ "transform", "#BL", "translateX", '-475.16547px', { valueTemplate: undefined, fromValue: '13.66336px'}], position: 17613, duration: 775, easing: "linear" },
            { id: "eid739", tween: [ "transform", "#NokiaBrowser", "translateX", '417.43522px', { valueTemplate: undefined, fromValue: '-50px'}], position: 14679, duration: 0, easing: "linear" },
            { id: "eid757", tween: [ "transform", "#NokiaBrowser", "translateX", '-54.39361px', { valueTemplate: undefined, fromValue: '417.43522px'}], position: 17825, duration: 736, easing: "linear" },
            { id: "eid575", tween: [ "style", "#IPNG", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 8146, duration: 50, easing: "linear" },
            { id: "eid414", tween: [ "transform", "#Connecting", "scaleX", '1.4', { valueTemplate: undefined, fromValue: '0.4'}], position: 7133, duration: 693, easing: "linear" },
            { id: "eid734", tween: [ "style", "#BR", "height", '330px', { valueTemplate: undefined, fromValue: '0px'}], position: 16750, duration: 337, easing: "linear" },
            { id: "eid573", tween: [ "style", "#OPNG", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 8278, duration: 50, easing: "linear" },
            { id: "eid767", tween: [ "transform", "#BR", "translateX", '-475.16547px', { valueTemplate: undefined, fromValue: '10.66336px'}], position: 17613, duration: 775, easing: "linear" },
            { id: "eid280", tween: [ "style", "#background", "opacity", '1', { valueTemplate: undefined, fromValue: '0.0028492647058823'}], position: 2500, duration: 318, easing: "easeOutBounce" },
            { id: "eid545", tween: [ "style", "#background", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 6946, duration: 576, easing: "linear" },
            { id: "eid410", tween: [ "transform", "#Connecting", "translateX", '-158.74112px', { valueTemplate: undefined, fromValue: '251.33371px'}], position: 6633, duration: 208, easing: "linear" },
            { id: "eid413", tween: [ "transform", "#Connecting", "translateX", '-158.74113px', { valueTemplate: undefined, fromValue: '-158.74112px'}], position: 6841, duration: 984, easing: "linear" },
            { id: "eid497", tween: [ "transform", "#Connecting", "translateX", '44.02667px', { valueTemplate: undefined, fromValue: '-158.74113px'}], position: 9785, duration: 0, easing: "linear" },
            { id: "eid392", tween: [ "transform", "#APNG", "translateY", '200px', { valueTemplate: undefined, fromValue: '-408.3599px'}], position: 4633, duration: 600, easing: "easeOutBounce" },
            { id: "eid507", tween: [ "transform", "#APNG", "translateY", '54px', { valueTemplate: undefined, fromValue: '200px'}], position: 6144, duration: 488, easing: "linear" },
            { id: "eid746", tween: [ "transform", "#Madewith", "translateY", '7.22926px', { valueTemplate: undefined, fromValue: '7.22926px'}], position: 18225, duration: 0, easing: "linear" },
            { id: "eid704", tween: [ "style", "#Copy", "opacity", '0', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid712", tween: [ "style", "#Copy", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 17193, duration: 300, easing: "linear" },
            { id: "eid771", tween: [ "style", "#Copy", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 17574, duration: 39, easing: "linear" },
            { id: "eid773", tween: [ "style", "#Copy", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 18562, duration: 300, easing: "linear" },
            { id: "eid364", tween: [ "transform", "#HTML5", "translateX", '-33.94674px', { valueTemplate: undefined, fromValue: '640.52995px'}], position: 7826, duration: 638, easing: "linear" },
            { id: "eid776", tween: [ "transform", "#HTML5", "translateX", '-37.6502px', { valueTemplate: undefined, fromValue: '-33.94674px'}], position: 8464, duration: 51, easing: "linear" },
            { id: "eid777", tween: [ "transform", "#HTML5", "translateX", '-40.31039px', { valueTemplate: undefined, fromValue: '-37.6502px'}], position: 8516, duration: 38, easing: "linear" },
            { id: "eid510", tween: [ "transform", "#Fish", "rotateZ", '1440deg', { valueTemplate: undefined, fromValue: '0deg'}], position: 945, duration: 1501, easing: "linear" },
            { id: "eid498", tween: [ "transform", "#Connecting", "translateY", '135.75121px', { valueTemplate: undefined, fromValue: '135.75122px'}], position: 9785, duration: 0, easing: "linear" },
            { id: "eid571", tween: [ "style", "#NPNG", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 8342, duration: 50, easing: "linear" },
            { id: "eid505", tween: [ "transform", "#NokiaBrowser", "scaleX", '1', { valueTemplate: undefined, fromValue: '5'}], position: 10993, duration: 74, easing: "linear" },
            { id: "eid655", tween: [ "style", "#Browser", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 13569, duration: 1110, easing: "linear" },
            { id: "eid764", tween: [ "style", "#Browser", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 18062, duration: 273, easing: "linear" },
            { id: "eid380", tween: [ "transform", "#NPNG", "translateY", '201.76188px', { valueTemplate: undefined, fromValue: '-213.16459px'}], position: 2633, duration: 600, easing: "easeOutBounce" },
            { id: "eid399", tween: [ "transform", "#NPNG", "translateY", '54.18792px', { valueTemplate: undefined, fromValue: '201.76188px'}], position: 6144, duration: 488, easing: "linear" },
            { id: "eid423", tween: [ "style", "#HTML5", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 9480, duration: 84, easing: "linear" },
            { id: "eid506", tween: [ "transform", "#NokiaBrowser", "scaleY", '1', { valueTemplate: undefined, fromValue: '5'}], position: 10993, duration: 74, easing: "linear" },
            { id: "eid384", tween: [ "transform", "#IPNG", "translateY", '202px', { valueTemplate: undefined, fromValue: '-213.16459px'}], position: 4323, duration: 600, easing: "easeOutBounce" },
            { id: "eid400", tween: [ "transform", "#IPNG", "translateY", '57px', { valueTemplate: undefined, fromValue: '202px'}], position: 6144, duration: 488, easing: "linear" },
            { id: "eid356", tween: [ "transform", "#HTML5", "skewX", '29.78097deg', { valueTemplate: undefined, fromValue: '30deg'}], position: 7826, duration: 566, easing: "linear" },
            { id: "eid357", tween: [ "transform", "#HTML5", "skewX", '0deg', { valueTemplate: undefined, fromValue: '29.78097deg'}], position: 8392, duration: 72, easing: "linear" },
            { id: "eid366", tween: [ "transform", "#HTML5", "skewX", '-10deg', { valueTemplate: undefined, fromValue: '0deg'}], position: 8516, duration: 164, easing: "linear" },
            { id: "eid374", tween: [ "transform", "#HTML5", "skewX", '0deg', { valueTemplate: undefined, fromValue: '-10deg'}], position: 8680, duration: 64, easing: "linear" },
            { id: "eid685", tween: [ "transform", "#Edge", "scaleY", '1', { valueTemplate: undefined, fromValue: '0.00068'}], position: 14728, duration: 1260, easing: "easeInOutBounce" },
            { id: "eid472", tween: [ "transform", "#Browser", "translateY", '157.72714px', { valueTemplate: undefined, fromValue: '-195.00473px'}], position: 9542, duration: 289, easing: "linear" },
            { id: "eid580", tween: [ "transform", "#Browser", "translateY", '159px', { valueTemplate: undefined, fromValue: '157.72714px'}], position: 9832, duration: 43, easing: "linear" },
            { id: "eid481", tween: [ "transform", "#Browser", "translateY", '105.15184px', { valueTemplate: undefined, fromValue: '159px'}], position: 9876, duration: 145, easing: "linear" },
            { id: "eid585", tween: [ "transform", "#Browser", "translateY", '83.99369px', { valueTemplate: undefined, fromValue: '105.15184px'}], position: 10021, duration: 58, easing: "linear" },
            { id: "eid483", tween: [ "transform", "#Browser", "translateY", '22.18783px', { valueTemplate: undefined, fromValue: '83.99369px'}], position: 10080, duration: 97, easing: "linear" },
            { id: "eid538", tween: [ "transform", "#Browser", "translateY", '-23.24975px', { valueTemplate: undefined, fromValue: '22.18783px'}], position: 10177, duration: 75, easing: "linear" },
            { id: "eid519", tween: [ "transform", "#Browser", "translateY", '23.97157px', { valueTemplate: undefined, fromValue: '-23.24975px'}], position: 10332, duration: 89, easing: "linear" },
            { id: "eid524", tween: [ "transform", "#Browser", "translateY", '159.97346px', { valueTemplate: undefined, fromValue: '23.97157px'}], position: 10421, duration: 180, easing: "linear" },
            { id: "eid530", tween: [ "transform", "#Browser", "translateY", '128.5164px', { valueTemplate: undefined, fromValue: '159.97346px'}], position: 10657, duration: 47, easing: "linear" },
            { id: "eid531", tween: [ "transform", "#Browser", "translateY", '5.16876px', { valueTemplate: undefined, fromValue: '128.5164px'}], position: 10705, duration: 316, easing: "easeInOutBounce" },
            { id: "eid750", tween: [ "transform", "#Browser", "translateY", '5.16877px', { valueTemplate: undefined, fromValue: '5.16876px'}], position: 18562, duration: 0, easing: "linear" },
            { id: "eid415", tween: [ "transform", "#Connecting", "scaleY", '1.4', { valueTemplate: undefined, fromValue: '0.4'}], position: 7133, duration: 693, easing: "linear" },
            { id: "eid479", tween: [ "transform", "#Browser", "scaleY", '0.72868', { valueTemplate: undefined, fromValue: '1'}], position: 9832, duration: 72, easing: "swing" },
            { id: "eid480", tween: [ "transform", "#Browser", "scaleY", '1', { valueTemplate: undefined, fromValue: '0.7'}], position: 9905, duration: 111, easing: "linear" },
            { id: "eid600", tween: [ "transform", "#Browser", "scaleY", '0.70004', { valueTemplate: undefined, fromValue: '1'}], position: 10209, duration: 94, easing: "swing" },
            { id: "eid599", tween: [ "transform", "#Browser", "scaleY", '0.98269', { valueTemplate: undefined, fromValue: '0.70004'}], position: 10303, duration: 118, easing: "linear" },
            { id: "eid603", tween: [ "transform", "#Browser", "scaleY", '0.70004', { valueTemplate: undefined, fromValue: '1'}], position: 10573, duration: 94, easing: "swing" },
            { id: "eid602", tween: [ "transform", "#Browser", "scaleY", '0.98269', { valueTemplate: undefined, fromValue: '0.70004'}], position: 10668, duration: 118, easing: "linear" },
            { id: "eid736", tween: [ "style", "#BL", "height", '330px', { valueTemplate: undefined, fromValue: '0px'}], position: 16750, duration: 337, easing: "linear" },
            { id: "eid683", tween: [ "style", "#Edge", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 14679, duration: 48, easing: "linear" },
            { id: "eid416", tween: [ "style", "#Connecting", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 7383, duration: 443, easing: "linear" },
            { id: "eid502", tween: [ "style", "#NokiaBrowser", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 10920, duration: 186, easing: "linear" },
            { id: "eid606", tween: [ "style", "#NokiaBrowser", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 11269, duration: 429, easing: "linear" },
            { id: "eid763", tween: [ "style", "#NokiaBrowser", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 18062, duration: 273, easing: "linear" },
            { id: "eid485", tween: [ "transform", "#Browser", "translateX", '231.4216px', { valueTemplate: undefined, fromValue: '290.93838px'}], position: 9542, duration: 289, easing: "linear" },
            { id: "eid579", tween: [ "transform", "#Browser", "translateX", '192.90208px', { valueTemplate: undefined, fromValue: '231.4216px'}], position: 9832, duration: 189, easing: "linear" },
            { id: "eid584", tween: [ "transform", "#Browser", "translateX", '180.94453px', { valueTemplate: undefined, fromValue: '192.90208px'}], position: 10021, duration: 58, easing: "linear" },
            { id: "eid520", tween: [ "transform", "#Browser", "translateX", '172.14755px', { valueTemplate: undefined, fromValue: '180.94453px'}], position: 10080, duration: 97, easing: "linear" },
            { id: "eid518", tween: [ "transform", "#Browser", "translateX", '149.43981px', { valueTemplate: undefined, fromValue: '172.14755px'}], position: 10303, duration: 118, easing: "linear" },
            { id: "eid601", tween: [ "transform", "#Browser", "translateX", '149.54379px', { valueTemplate: undefined, fromValue: '149.43981px'}], position: 10512, duration: 89, easing: "linear" },
            { id: "eid740", tween: [ "transform", "#Browser", "translateX", '606.0144px', { valueTemplate: undefined, fromValue: '149.54379px'}], position: 14679, duration: 0, easing: "linear" },
            { id: "eid758", tween: [ "transform", "#Browser", "translateX", '134.18557px', { valueTemplate: undefined, fromValue: '606.0144px'}], position: 17825, duration: 736, easing: "linear" },
            { id: "eid610", tween: [ "style", "#Billion", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 11803, duration: 263, easing: "linear" },
            { id: "eid657", tween: [ "style", "#Billion", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 13569, duration: 1110, easing: "linear" }]
      }
   },
}};

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     $.Edge.initialize(symbols);
});
/**
 * Adobe Edge Timeline Launch
 */
$(window).load(function() {
    $.Edge.play();
});
