---
layout: page
---

   <div class="row">
      <form class="col s6">
          <div class="col s4" >
            <h1>Input Binary String:</h1>
          </div>
           <div class="input-field col s6">
             <input placeholder="0101001" id="cp" type="text" class="validate" >
          </div>
           <div class="col s2">
             <button class="indigo btn waves-effect" style="padding:0 16px;" type="submit" onClick="cpEnter()"> QAM IT!
             </button>
           </div>
    </form>

    <div class="col s6">
     <h1> Modulated wave:</h1>
      <canvas id="canvas" width="500" height="100"></canvas>
    </div>
  </div>

