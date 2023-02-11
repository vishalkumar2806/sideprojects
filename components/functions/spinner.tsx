import React from 'react'
import $ from "jquery"
const Spinner = () => {
  $( () => { 
    const slides = $(".start-gift-card");
    let sCur = 1;
    const sLen = slides.length;
    $("#switch").click(function () {
        sCur += 1;
        if (sCur >= sLen) sCur = 0;
        var next = sCur + 1;
        if (next >= sLen) next = 0;
        var prev = sCur - 1;
        if (prev < 0) prev = sLen - 1;
        slides.each(function (i) {
        if (i == sCur)
            $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-0");
        if (i == next)
            $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-2");
        if (i == prev)
            $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-1");
        if (i != sCur && i != next && i != prev)
            $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-3");
        });
    });
  })
  
}

export default Spinner