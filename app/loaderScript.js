'use strict';
var timeoutID;
window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false); 
	timeoutID = window.setTimeout(startApplication, 1000);
},false);
function startApplication () {
	var container = document.querySelector('.container');
	var lineSVG = document.querySelector('.lineSVG');
	var downloading = document.querySelector('.downloading');
	var refresh = document.querySelector('.refresh');
	var loadLine = document.querySelector('.loadLine');
	var loadLineTip = document.querySelector('.loadLineTip');
	var loadLineGhost = document.querySelector('.loadLineGhost');
	var refreshCircle = document.querySelector('.refreshCircle');
	var tick = document.querySelector('.tick');
	var refreshGroup = document.querySelector('.refreshGroup');
	var failAt = 100;
	var glowTipLengthPercent = 5;
	var lineStart = Number(loadLine.getAttribute('x1'));
	var lineEnd = Number(loadLine.getAttribute('x2'));
	var lineLength =  lineEnd -  lineStart;
	var failPercent = failAt/100;
	var refreshCircleRadius = Number(refreshCircle.getAttribute('r'));
	var refreshCircleRadiusAsPercentOfLine = (refreshCircleRadius/lineLength) * 100;

	TweenMax.set(container, {
			position: 'absolute',
			top: '50%',
			left: '50%',
			xPercent: -50,
			yPercent: -35
	})
	TweenMax.set([loadLine, loadLineTip], {
	  drawSVG:'-0.5% 0%'
	})
	TweenMax.set([tick], {
	  drawSVG:'0% 0%',
	  alpha:0
	})
	TweenMax.set([refreshCircle], {
	  drawSVG:'0% 0%',
	  alpha:0
	})
	TweenMax.set([refreshGroup], {
	  y:310
	})
	var tl = new TimelineMax();
	tl.set(refreshGroup, {
	  alpha:1,
	  x:(failPercent * lineLength) + lineStart - (refreshCircleRadius*2)
	})
	.to(loadLineGhost, 1,{
	  alpha:0.5
	})
	.to([loadLine,], 3, {
	  drawSVG:failAt +'% 0%',
	  ease:SteppedEase.config(40)
	})
	.to([loadLineTip,], 3, {
	  drawSVG:failAt +'% ' + (failAt - glowTipLengthPercent)+'%',
	  ease:SteppedEase.config(40)
	},'-=6')
	.from([loadLine, loadLineTip], 0.1,{
	  immediateRender:false,
	  stroke:'green',
	  repeat:12, 
	  yoyo:true
	})
	.set([ refreshCircle], {
	  alpha:1
	})
	.to(loadLineTip, 1, {
	  drawSVG:(failAt)+'% ' + (failAt)+'%'
	})
	 .to([ refreshCircle], 1, {
	  drawSVG:'0% 88%'
	},'-=1')
	.to([loadLine, loadLineTip], 1, {
	  drawSVG:(failAt)+'% ' + (failAt)+'%'
	},'-=1')
	.set([ tick], {
	  alpha:1
	})
	.to([ tick], 1, {
	  drawSVG:'95% 0%'
	})
	.to(refreshGroup, 2, {
	  x:(lineLength/2) + (lineStart - (refreshCircleRadius)),
	  rotation:-360,
	  transformOrigin:'50% 50%',
	  ease:Power3.easeInOut
	}, '-=1')
	.to([ refreshCircle], 1, {
	  drawSVG:'0% 100%'
	},'-=2')
	.to([ tick], 1, {
	  drawSVG:'95% 20%'
	},'-=2')
	.set([loadLine, loadLineTip], {
	  alpha:0
	})
	.to(loadLineGhost, 2, {
	  alpha:0,
	  ease:Power3.easeInOut
	}, '-=2')
	.to(refresh, 0.5, {
	  alpha:1,
	  ease:Power2.easeInOut
	})
	.to(downloading, 0.5, {
	  alpha:0,
	  ease:Power2.easeInOut
	},'-=0.5')
	.to([downloading, refresh], 0.5, {
	  top:'+=10',
	  ease:Power2.easeInOut,
	  onComplete:playAgain
	}, '-=0.5')
	.addPause()
	.to(refreshGroup,0.3, {
	  alpha:0
	})
	.to(refresh, 0.5, {
	  alpha:0,
	  ease:Power2.easeInOut
	})
	.to(downloading, 0.5, {
	  alpha:1,
	  ease:Power2.easeInOut
	},'-=0.5')
	.to([downloading, refresh], 0.5, {
	  top:'-=10',
	  ease:Power2.easeInOut
	}, '-=0.5')

	function playAgain(){}
};
