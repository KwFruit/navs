var imgArr = [

  ".//img/8ecff4624effa5848210eb472a3d30c7.webp",
  
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
