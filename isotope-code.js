"use strict";

//this comment is just to check it goes automatically to the Netlify site

// var css = document.createElement("style");
// css.type = "text/css";
// css.innerHTML =
//     ".rendertile-image {\n  -webkit-animation-name: rendertile-image;\n  animation-name: rendertile-image;\n  -webkit-animation-duration: 1.1s;\n  animation-duration: 1.1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-delay: 1.3s;\n  animation-delay: 1.3s;\n -webkit-animation-iteration-count: 1; \n animation-iteration-count: 1 }\n  @-webkit-keyframes rendertile-image {\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n  }\n  @keyframes rendertile-image {\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n  }\n  .grid {\n  -webkit-animation-name: grid;\n  animation-name: grid;\n  -webkit-animation-duration: .5s;\n  animation-duration: .5s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-delay: 1.3s;\n  animation-delay: 1.3s;\n -webkit-animation-iteration-count: 1; \n animation-iteration-count: 1 }\n  @-webkit-keyframes grid {\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n  }\n  @keyframes grid {\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n  }\n  ";
// document.body.appendChild(css);

function checkJqueryIsotope() {
    if (window.jQuery) {
        
        setTimeout(function () {
            $(".grid").animate(
                {
                    opacity: "1"
                },
                {
                    duration: 300,
                    queue: false
                }
            );

            $(".rendertile-image").animate(
                {
                    opacity: "1"
                },
                {
                    duration: 400,
                    queue: false
                }
            );


        }, 900);
        

        // flatten object by concatenating values
        var concatValues = function concatValues(obj) {
            var value = "";

            for (var prop in obj) {
                value += obj[prop];
            }

            return value;
        };
        /* show div with "No items found" */

        /* if not empty, fill array w/ visible elems */

        var fillArray = function fillArray() {
            arrayOfVisibleInGridNow.length = 0;
            setTimeout(function () {
                swapPlaceholder();
            }, 500);
            $(".rendertile-image:visible").each(function () {
                arrayOfVisibleInGridNow.push("#".concat($(this).attr("data-name")));
            });
        };


        var strReverse = function strReverse(string) {
            return string
                .split("")
                .reverse()
                .join("");
        };

        //actions for close, next & prev btn
        var closePanel = function closePanel() {
            $(".panel:visible")
                .hide("slide", {
                    direction: "down"
                })
                .fadeOut();
        };

        var onlyHidePanel = function onlyHidePanel() {
            $(".panel:visible")
                .hide("fast")
                .fadeOut("fast");
        }; 

        var randomNextPanel = function randomNextPanel() {
            fillArray();

            if (arrayOfShownPanels.length <= 1) {
                $(".prevarrow").hide();
            }

            var currentPanelBeingShown = $(".panel:visible")
                .attr("id")
                .toString();
            arrayOfShownPanels.push("#".concat(currentPanelBeingShown));
            console.warn(
                "Array size is (array of shown panels): ".concat(
                    arrayOfShownPanels.length
                )
            );
            onlyHidePanel();
            var randomPick = Math.floor(Math.random() * arrayOfVisibleInGridNow.length); //ensure it doesnt close w/o showing next panel

            if (
                arrayOfShownPanels[arrayOfShownPanels.length - 1] ===
                arrayOfVisibleInGridNow[randomPick]
            ) {
                console.warn("Closing, the same as before...");
                $(arrayOfVisibleInGridNow[0]).show();
            } else if (
                arrayOfShownPanels[arrayOfShownPanels.length - 1] !==
                arrayOfVisibleInGridNow[randomPick]
            ) {
                $(arrayOfVisibleInGridNow[randomPick]).show();
                $(".prevarrow").show();
            } else {
                $(arrayOfVisibleInGridNow[0]).show();
            }
        };

        //arrow and <- key
        var showPrev = function showPrev() {
            if (arrayOfShownPanels.length >= 1) {
                var showThisPrev = arrayOfShownPanels.pop();
                onlyHidePanel();
                setTimeout(function () { $(showThisPrev).show(); }, 100);
            }
        };

        //change placeholder sporadically
        var random_item = function random_item(items) {
            arrayOfPlanNames.length = 0;
            $(".rendertile-image:visible").each(function () {
                var str = $(this)
                    .attr("data-name")
                    .toString()
                    .replace("-", " ");
                str = str.slice(0, -2);
                str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                arrayOfPlanNames.push(str);
            });
            return items[Math.floor(Math.random() * items.length)];
        };


        var swapPlaceholder = function swapPlaceholder() {
            var swappingPlanName = random_item(arrayOfPlanNames);

            if (random_item(arrayOfPlanNames)) {
                $("#quicksearch").attr("placeholder", "e.g. ".concat(swappingPlanName));
                $(".empty-results").animate({
                    opacity: "0"
                }, "slow");
            } else {
                $("#quicksearch").attr("placeholder", " â€” ");
                $(".empty-results").animate({
                    opacity: "1"
                }, "fast");
            }
        };


        //load 500px
        $(".rendertile-image").each(function () {
            $(this).attr(
                "data-src",
                $(this)
                    .attr("data-src")
                    .replace(".jpg", "-p-500.jpeg")
            );
        });

        //hide panels so they don't pop up all at once
        $(".panel").hide();
        $(".panel").css("opacity", 1);

        // go over all collection item category label elems
        $(".mydata").each(function (index, element) {
            var _this = $(element);

            _this.parent().addClass(
                _this
                    .text()
                    .replace(/ /g, "")
                    .toLowerCase()
            );
        });

        // store filter for each group
        var buttonFilters = {};
        var buttonFilter;
        var qsRegex; //init iso

        var arrayOfVisibleInGridNow = [];
        var $grid = $(".grid").isotope({
            itemSelector: ".tile",
            layoutMode: "fitRows",
            sortBy: "random",
            filter: function filter() {
                var $this = $(this);
                var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
                var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
                return searchResult && buttonResult;
            }
        });

        //filter w/ click
        $(".filters").on("click", ".button", function () {
            closePanel();
            var $this = $(this); // get group key

            var $buttonGroup = $this.parents(".button-group");
            var filterGroup = $buttonGroup.attr("data-filter-group"); // set filter for group

            buttonFilters[filterGroup] = $this.attr("data-filter"); // combine filters

            buttonFilter = concatValues(buttonFilters); // Iso arrange

            $grid.isotope();
            fillArray();
            arrayOfShownPanels.length = 0;
        });

        //search based on typed value in search bar
        var $quicksearch = $(".quicksearch").on("keyup", function () {
            qsRegex = new RegExp($quicksearch.val(), "gi");
            $grid.isotope();
            fillArray();
            arrayOfShownPanels.length = 0;
        });

        //get focus on search field and dropdown
        $quicksearch.on("focus", function () {
            closePanel();
        });
        $(".hometypedropdown").on("click", function () {
            closePanel();
        });

        // change is-checked class on buttons
        $(".button-group").each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", ".button", function () {
                $buttonGroup.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");
            });
        });

        //rename each panel div, based on h1, and adding its current id to the end
        //was h1, trying .h1
        $(".panel").each(function () {
            var panelFpName = $(this)
                .find(".h1")
                .text()
                .toLowerCase()
                .replace(" ", "-");
            var gableA = $(this).hasClass("gable");
            var hipB = $(this).hasClass("hip");
            var monoC = $(this).hasClass("mono");
            gableA
                ? panelFpName += "-a"
                : hipB
                    ? panelFpName += "-b"
                    : monoC
                        ? panelFpName += "-c"
                        : console.log("");
            $(this).attr("id", "".concat(panelFpName));
        });

        //unwrap for direct manipulation
        $(".panel").each(function () {
            $(this).unwrap();
        });

        // click on images shows corresponding panel
        $(".rendertile-image").on("click", function (e) {
            closePanel();

            //gets the current rendertile name
            //and opens the panel, which has that name as its id
            var floorPlanName = $(this)
                .attr("data-name")
                .toString();

            setTimeout(function () {

                $("#".concat(floorPlanName)).show("slide", {
                    direction: "down"
                });
                arrayOfShownPanels.length <= 1
                    ? $(".prevarrow").hide()
                    : $(".prevarrow").show();
            }, 100);


            showFavBack();
        });

        // the code below decides redirecting
        $(".button-primary").on("mouseover", function () {
            var currName = $(this)
                .parent()
                .parent()
                .attr("id")
                .toString();
            currName = currName.toLowerCase().replace(" ", "-");
            var redirectAbc = strReverse(currName).charAt(0);
            var newName = currName.slice(0, currName.length - 2);
            $(this).attr(
                "href",
                "/plans/".concat(newName, "?id=").concat(redirectAbc)
            );
        });

        // send fav cart back to right margin
        var showFavBack = function showFavBack() {
            $(".favouritescart-wrapper").animate({
                width: "30px"
            });
        };

        $(".closebutton").on("click", function () {
            closePanel();
        });
        //close on Esc key (esc -> "27")
        $(document).on("keyup", function (e) {
            if (e.keyCode === 27) {
                closePanel();
            }
        }); 

        var arrayOfShownPanels = [];
        setInterval(function () {
            if (arrayOfShownPanels.length < 1) {
                $(".prevarrow").hide();
            }
        }, 300);
        $(".prevarrow").on("click", function () {
            showPrev();
        });
        $(document).on("keyup", function (e) {
            if (e.keyCode === 37 && arrayOfShownPanels.length >= 1) {
                showPrev();
            }
        });
        // ** Next arrow and right arrow key ** //
        $(".nextarrow").on("click", function () {
            randomNextPanel();
        });
        $(document).on("keyup", function (e) {
            if (e.keyCode === 39) {
                randomNextPanel();
            }
        });
        
        // change text for list, according to selected items
        $(".housetype").on("click", function () {
            if (
                $(this).html() ===
                'Home &amp;&nbsp;Income<br><span class="text-span-6">(two homes in one)</span>'
            ) {
                $("#hometypelabel").html("Home & Income");
            } else {
                $("#hometypelabel").html($(this).html());
            }
        }); //close on blur

        $(".burgerwrap").on("click", function () {
            closePanel();
        });
        $(".allsections").on("click", function () {
            closePanel();
            showFavBack();
        });

        var arrayOfPlanNames = [];
        //IIFE to detect scrolling. If scrolled, close the panel
        (function closeOnScroll() {
            var previous = window.scrollY;
            window.addEventListener("scroll", function () {
                if (window.scrollY > previous) {
                    closePanel();
                }

                previous = window.scrollY;
            });
        })();

        //Depends on https://cdnjs.cloudflare.com/ajax/libs/Tocca.js/2.0.4/Tocca.min.js
        //swipe right == go back (like pictures)

        $(".panel").on("swiperight", function (e) {
            showPrev();
        }); //swipe left == go forward/random next (like pictures)

        $(".panel").on("swipeleft", function (e) {
            randomNextPanel();
        }); //swipes to close

        $(".panel").on("swipeup", function (e) {
            onlyHidePanel();
        });
        $(".panel").on("swipedown", function (e) {
            onlyHidePanel();
        });
        setTimeout(function () {
            swapPlaceholder();
        }, 5000);
    } else {
        window.setTimeout(function () {
            checkJqueryIsotope();
        }, 100);
    }
}

checkJqueryIsotope();
