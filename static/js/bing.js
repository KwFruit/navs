var imgArr = [

  ".//img/3851dbde92da4f6e96fc3a515cc86084.png",

  ".//img/47482bcb3a294e868546d6c73f1e7ca8.jpg",
  ".//img/773c1a77ca9d410e97271c141a3e97ec.png",
  ".//img/0ebe2197970149d898188a2927427634.jpg",
  ".//img/672f973cecf341eba21b874362384bc6.jpg",


  ".//img/50bb6cb5cef84475bd912705b3d5da55.jpg",
  ".//img/80967a7d0bf045419bc1daab415e5f56.png",
  ".//img/cbfd196339a147169fcc278493c8cbec.png",

  ".//img/b6237e7c882711ebb6edd017c2d2eca2.png",
  ".//img/da69ff6a880611ebb6edd017c2d2eca2.jpg",
  ".//img/88349c16a43e4548970a874d05d3bda0.jpg",
  
];
bgImg = imgArr[Math.floor(Math.random() * imgArr.length)];
$(".img-bg").css("background-image", "url(" + bgImg + ")");
console.log("第二")

var theme = {
  ajaxurl: "",
  addico: "/static/index/picture/add.png",
  order: "asc",
  formpostion: "top",
  defaultclass: "io-grey-mode",
  isCustomize: "1",
  icourl: "",
  icopng: ".png",
  urlformat: "1",
  customizemax: "10",
  newWindow: "0",
  lazyload: "1",
  minNav: "1",
  loading: "1",
  hotWords: "baidu",
  classColumns: " col-sm-6 col-md-4 col-xl-5a col-xxl-6a ",
  apikey: "",
};
var localize = {
  liked: "",
  like: "",
  networkerror: "",
  selectCategory: "",
  addSuccess: "",
  timeout: "",
  lightMode: "",
  nightMode: "",
  editBtn: "",
  okBtn: "",
  urlExist: "",
  cancelBtn: "",
  successAlert: "",
  infoAlert: "",
  warningAlert: "",
  errorAlert: "",
  extractionCode: "",
};
