var totalPage = 100;

var paging1 = function(currPage) {
  if(currPage <= 0) {
    currPage = 0;
    jump(currPage);
  } else if(currPage >= totalPage) {
    currPage = totalPage;
    jump(currPage);
  } else {
    jump(currPage);
  }
}

var paging2 = function(currPage) {
  if(currPage <= 0) {
    currPage = 0;
  } else if(currPage >= totalPage) {
    currPage = totalPage;
  }
  jump(currPage);
}