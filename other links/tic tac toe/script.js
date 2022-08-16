(function () {
    "use strict";

    let count = 0;
    // function start

    let box = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
    box[0] = document.getElementById("bt1");
    box[1] = document.getElementById("bt2");
    box[2] = document.getElementById("bt3");
    box[3] = document.getElementById("bt4");
    box[4] = document.getElementById("bt5");
    box[5] = document.getElementById("bt6");
    box[6] = document.getElementById("bt7");
    box[7] = document.getElementById("bt8");
    box[8] = document.getElementById("bt9");

    let disp_x = document.getElementById("disp_x");
    let disp_o = document.getElementById("disp_o");
    let x_won = document.getElementById("x_won");
    let o_won = document.getElementById("o_won");
    let tie = document.getElementById("tie");

    function show(event, pre_event) {
        if (count < 8) {
            event.style.display = "block";
            pre_event.style.display = "none";
        } else {
            tie.style.display = "block";
            pre_event.style.display = "none";
        }
    }

    function click(event) {
        if (count % 2 === 0) {
            event.value = "X";
            show(disp_o, disp_x);
        } else {
            event.value = "O";
            show(disp_x, disp_o);
        }
        count++;
    }

    function val(event) {
        event.addEventListener("click", function () {
            event.disabled = true;
        });
    }

    for (let i of box) {
        val(i);
    }

    function freeze() {
        for (let f = 0; f < 9; f++) {
            box[f].disabled = true;
        }
    }

    box[0].addEventListener("click", function (event) {
        click(box[0]);

        if (
            (box[0].value === box[1].value && box[1].value === box[2].value) ||
            (box[0].value === box[3].value && box[3].value === box[6].value) ||
            (box[0].value === box[4].value && box[4].value === box[8].value)
        ) {
            won(box[0].value);
        }
    });
    box[1].addEventListener("click", function (event) {
        click(box[1]);

        if (
            (box[0].value === box[1].value && box[1].value === box[2].value) ||
            (box[1].value === box[4].value && box[4].value === box[7].value)
        ) {
            won(box[1].value);
        }
    });
    box[2].addEventListener("click", function (event) {
        click(box[2]);

        if (
            (box[0].value === box[1].value && box[1].value === box[2].value) ||
            (box[2].value === box[4].value && box[4].value === box[6].value) ||
            (box[2].value === box[5].value && box[5].value === box[8].value)
        ) {
            won(box[2].value);
        }
    });
    box[3].addEventListener("click", function (event) {
        click(box[3]);

        if (
            (box[3].value === box[4].value && box[4].value === box[5].value) ||
            (box[0].value === box[3].value && box[3].value === box[6].value)
        ) {
            won(box[3].value);
        }
    });
    box[4].addEventListener("click", function (event) {
        click(box[4]);

        if (
            (box[1].value === box[4].value && box[4].value === box[7].value) ||
            (box[3].value === box[4].value && box[4].value === box[5].value) ||
            (box[0].value === box[4].value && box[4].value === box[8].value) ||
            (box[2].value === box[4].value && box[4].value === box[6].value)
        ) {
            won(box[4].value);
        }
    });
    box[5].addEventListener("click", function (event) {
        click(box[5]);

        if (
            (box[2].value === box[5].value && box[5].value === box[8].value) ||
            (box[3].value === box[4].value && box[4].value === box[5].value)
        ) {
            won(box[5].value);
        }
    });
    box[6].addEventListener("click", function (event) {
        click(box[6]);

        if (
            (box[2].value === box[4].value && box[4].value === box[6].value) ||
            (box[0].value === box[3].value && box[3].value === box[6].value) ||
            (box[6].value === box[7].value && box[7].value === box[8].value)
        ) {
            won(box[6].value);
        }
    });
    box[7].addEventListener("click", function (event) {
        click(box[7]);

        if (
            (box[6].value === box[7].value && box[7].value === box[8].value) ||
            (box[1].value === box[4].value && box[4].value === box[7].value)
        ) {
            won(box[7].value);
        }
    });
    box[8].addEventListener("click", function (event) {
        click(box[8]);

        if (
            (box[2].value === box[5].value && box[5].value === box[8].value) ||
            (box[6].value === box[7].value && box[7].value === box[8].value) ||
            (box[0].value === box[4].value && box[4].value === box[8].value)
        ) {
            won(box[8].value);
        }
    });

    function won(e) {
        if (e === "X") {
            disp_o.style.display = "none";
            disp_x.style.display = "none";
            x_won.style.display = "block";
            tie.style.display = "none";
        } else {
            disp_o.style.display = "none";
            disp_x.style.display = "none";
            o_won.style.display = "block";
            tie.style.display = "none";
        }

        freeze();
    }

    const re_set = document.getElementById("reset");

    re_set.addEventListener("click", function () {
        count = 0;

        for (let f = 0; f < 9; f++) {
            box[f].value = " ";
            box[f].disabled = false;
        }

        tie.style.display = " none ";
        disp_o.style.display = "none";
        x_won.style.display = " none ";
        o_won.style.display = " none ";
        disp_x.style.display = "block";
    });
})();
