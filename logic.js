var step = 0;
		
function start(timestamp) {
  			var canvas = $("canvas");
  			canvas.each(function(index, canvas) {
    			  var context = canvas.getContext("2d"); 
      			  canvas.width = $(".box").eq(index).width();
      			  canvas.height = $(".box").eq(index).height();
      			  context.clearRect(0, 0, canvas.width, canvas.height);
      			  if (canvas.height > 1000 ) {
      			  	drawWave(context, 20,"sin");
      			  	drawWave(context, 60,"cos");
      			  	drawWave(context, 40,"sin");
      			  	drawWave(context, 80,"cos"); 
      			  }

      			  if (canvas.height < 1000 ) {
      			  	drawWave(context, 10,"sin");
      			  	drawWave(context, 30,"cos");
      			  	drawWave(context, 20,"sin");
      			  	drawWave(context, 40,"cos"); 
      			  }
   				  
   				  step = timestamp / 7;
  			});
        window.requestAnimationFrame(start);
		}

		function drawWave(ctx,amplitude,trig){
  			var width = ctx.canvas.width;
  			var height = ctx.canvas.height;
  			ctx.beginPath();
  			ctx.lineWidth = 2;
  			ctx.strokeStyle = "blue";

  			var x = 0;
  			var y = 0;
  			var frequency = height / (2 * Math.PI);
  			ctx.save();
  			ctx.translate(-amplitude * Math[trig](step / frequency), 0);
  			while (y < height) {
   			 	x = width / 2 + amplitude * Math[trig]((y + step) / frequency);
    			ctx.lineTo(x, y);
   				 y++;
 			 }
  			// ctx.closePath();
  			ctx.stroke();
  			ctx.restore();
		}
$(document).ready(function() {
  start();
});