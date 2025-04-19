import Item from "./Item"



function List () {
    return(
 <>
    <h1>minha lista lista</h1>
    <ul>
       <Item marca ='ferrari' ano_lançamento={1995}/>
       <Item marca = 'fiat' ano_lançamento={1966}/> 
       <Item marca ='renalt' ano_lançamento={5002}/>
       <Item marca ='chevrolet' ano_lançamento={1999}/>
       <Item marca ='fusca'/>
    </ul>
    
 </>
    )
}

export default List