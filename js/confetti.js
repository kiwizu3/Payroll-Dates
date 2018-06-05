var intro = document.getElementById("intro");
var introHeight = intro.clientHeight;
var confettiSettings = {"target":"confetti-holder","max":"200", "clock": 15, "height": introHeight, "colors":[[255,255,102],[255,204,0],[255,153,0],[255,0,0]]};
var confetti = new window.ConfettiGenerator(confettiSettings);
confetti.render();