import Button from "./Eventos/Button";

function Evento () {

function meuEvento () {
    console.log('ativando primeiro evento' );
    
    
    
}
function segundoEvento(){
console.log('segundo evento');

}


return (
 <div>
 <p>clique para disparar um evento</p>
 <Button event={meuEvento} text="primeiro evento"/>
  <Button event={segundoEvento} text="primeiro evento"/>
 </div>
)

}

export default Evento