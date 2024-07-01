$(document).ready(function () {
    
     var stTime = 0
        var endTime = 0
        var timerStart
        //var min
        var sec
        var milisec
        var startBtn = document.getElementById('testStartBtn')
        var stopBtn = document.getElementById('testStopBtn')

        //Start 버튼 클릭
        startBtn.addEventListener('click', function() {
            if (!stTime) {
                stTime = Date.now() // 최초 START
            }
            timerStart = setInterval(function() {
                var nowTime = new Date(Date.now() - stTime)

                //min = addZero(nowTime.getMinutes())
                sec = addZero(nowTime.getSeconds())
                milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10))

                //document.getElementById('w_min').innerText = min
                document.getElementById('w_sec').innerText = sec
                document.getElementById('w_msec').innerText = milisec


            }, 1)
        })

        // stop 버튼 클릭
        stopBtn.addEventListener('click', function() {
            if (timerStart) {
                clearInterval(timerStart) // STOP

                if (this.innerText == 'Stop') {
                    endTime = Date.now()
                    this.innerText = 'Reset'

                } else { // RESET
                    stTime = 0
                    //min = 0
                    sec = 0
                    milisec = 0
                    //document.getElementById('w_min').innerText = '00'
                    document.getElementById('w_sec').innerText = '00'
                    document.getElementById('w_msec').innerText = '00'
                    this.innerText = 'Stop'
                    timerStart = null
                }
            }
        })

        function addZero(num) {
            return (num < 10 ? '0' + num : '' + num)
        }
    
    
    /* 인지 테스트 -  양육자 질문 선택 부분 */
    $(".cont_checkbox>span").on("click", function () {
        $(this).find('input[type="checkbox"]').prop("checked", true); // 체크 활성화
        $(this).siblings('span').find('input[type="checkbox"]').prop("checked", false); // 선택 외 체크 비활성화
    });

    /* 인지 테스트 - 점수 선택 부분 */
    $(".chk_score>p").on("click", function () {
        $(this).addClass('on');
        $(this).find('input[type="radio"]').prop("checked", true); // 라디오 버튼 체크
        
        // 선택 외의 라디오 해제
        $(this).siblings('p').removeClass('on');
        $(this).siblings('p').find('input[type="radio"]').prop("checked", false); // 라디오 체크 해제
    });
    
    /* 인지 테스트 - 아동행동 선택 부분 */
    $(".chk_behavior>li").on("click", function () {
        $(this).addClass('on');
        $(this).find('input[type="radio"]').prop("checked", true); // 라디오 버튼 체크
        
        // 해제
        $(this).siblings('li').removeClass('on');
        $(this).siblings('li').find('input[type="radio"]').prop("checked", false); // 라디오 체크 해제
    });

    /* 인지 테스트 - 검사 진행 성공 실패 결과 선택 부분*/

    // 실패 선택시
    $("p.a_fail").on("click", function () {
        //console.log("실패를 클릭 했습니다.")
        $(this).addClass("on"); // on 클래스 추가

        $(this).find('input[type="radio"]').prop("checked", true); // 실패 라디오 버튼 체크
        $(this).find('img').attr("src", "images/fail_on.png"); // 실패 이미지 활성화

        // 성공 비활성화 하기
        if ($(this).hasClass("on") === true) {
            $(this).siblings('p').find('input[type="radio"]').prop("checked", false); // 성공 라디오 버튼 비활성
            $(this).siblings('p').find('img').attr("src", "images/success.png"); // 성공 이미지 비활성화
        }

    });
    // 성공 선택시
    $("p.a_success").on("click", function () {
        //console.log("성공 클릭 했습니다.")
        $(this).addClass("on"); // on 클래스 추가

        $(this).find('input[type="radio"]').prop("checked", true); // 성공 라디어 버튼 체크
        $(this).find('img').attr("src", "images/success_on.png"); // 성공 이미지 활성화

        // 실패 비활성화 하기
        if ($(this).hasClass("on") === true) {
            $(this).siblings('p').find('input[type="radio"]').prop("checked", false); // 실패 라디오 버튼 비활성화
            $(this).siblings('p').find('img').attr("src", "images/fail.png"); // 실패 이미지 비활성화
        }

    });


});
