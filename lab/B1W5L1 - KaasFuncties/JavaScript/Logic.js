if (prompt("is de kaas geel?") === "ja") {
   if (prompt("zitten er gaten in?") ==="ja") {
      if (prompt("is de kaas belachelijk duur?") ==="ja") {
         alert("emmenthaler")
      } else {
         alert("leerdammer")
         document.write("leerdammer")
         document.write('<img src="img/leerdammer-original-half.jpg">')
      }

   } else {
      if (prompt("is de kaas hard als steen?") ==="ja") {
         alert("pamigiano reggiano")
      }else{
         alert("goudse kaas")
      }
   }

} else {
   if (prompt("heeft de kaas blauwe schimmel?") ==="ja") {
      if (prompt("heeft de kaas een korst?") ==="ja") {
         alert("bleu de rochbaron")
      } else {
         alert("foume d'Ambert")
      }

   } else {
      if (prompt("heeft de kaas blauwe schimmel?") ==="ja") {
         alert("camembert")
         }else{
         alert("mozzarella")
      }

   }
}