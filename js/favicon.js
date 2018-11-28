$.noConflict();



    var selected = null;
    $.(".icon").click(function() {
        var tempSelected = null;
        if (selected != null) {
            tempSelected = selected;
        }
        selected = $.(this);
        $.(this).find(".background_circle").css({ display: "block", opacity: "1" });

        var color = $.(this).find(".background_circle").css("backgroundColor");
        console.log(color);
        var tl = new TimelineMax();
        tl
            .to($.(this).find(".background_circle"), 3, {
                scale: 100,
                transformOrigin: "50% 50%",
                ease: Linear.easeIn
            })
            .to(
                $.("body"),
                0,
                {
                    backgroundColor: color
                },
                "-=2"
            );

        if (
            tempSelected !== null &&
            $.(this).attr("class") !== tempSelected.attr("class")
        ) {
            TweenMax.to(
                tempSelected.find(".background_circle"),
                0,
                {
                    opacity: 0,
                    scale: 0,
                    transformOrigin: "50% 50%",
                    ease: Linear.easeIn
                },
                "-=3"
            );
        }
    });
});