$(function() {
  /*script 영역 ajax사용 예*/
  $.ajax({
    url: 'data.xml',
    dataType: 'xml',
    success: function(data) {
      // 실행문
      //특정데이터를 가져오는 방법 1번
      // console.log($(data).find("item"));
      //특정데이터를 가져오는 방법 2번
      // console.log($("item",data));
      $("item", data).each(function() {
        // console.log($(this).find("link").text())
        // console.log($("link",this).text())

        // link text 가져오기
        let linkText = $("link", this).text();

        //description text 가져오기
        let desText = $("description", this).text();

        $("dl").append("<dt><a href='" + linkText + "'>" + linkText + "</a></dt><dd>" + desText + "</dd>")
      })
    }
  });

  // button on class 추가하여 dl의 노출을 토글형태로 만들기

  $("button").click(function() {

    //1. toggleClass() 사용
    // $(this).toggleClass("on");

    //2. attr() 사용
    // on을 remove하면 class=""상태 이기때문에 ""도 체크해줌

    // let thisClass = $(this).attr("class");
    // if(thisClass == "" || thisClass == undefined){
    //   $(this).addClass("on");
    // }else{
    //   $(this).removeClass("on");
    // }
    // console.log(thisClass)

    //3. hasClass() 사용  class="on"을 넣었을때
    console.log($(this).hasClass("on"))
    if($(this).hasClass("on")){
      $(this).removeClass("on");
    }else{
      $(this).addClass("on");
    }
  })

}); //document ready
