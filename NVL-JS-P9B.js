<script>
var día="lunes,martes,miércoles,jueves,viernes,sábado,domingo";
alert(días.split(","));
//nos quedará así día=[lunes,martes,miércoles,jueves,viernes,sabado,domingo]
var lugar="Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti"
alert(lugares.split("."));
// nos quedará así lugar=[Madrid,Sevilla,Barcelona,Valencia,Zaragoza,Bilbao,Donosti]
conciertos=[[día[0],lugar[0]],[día[1],lugar[1]],[día[2],lugar[2]],[día[3],lugar[3]],[día[4],lugar[4]],[día[5],lugar[5]],[día[6],lugar[6]]];
</script>