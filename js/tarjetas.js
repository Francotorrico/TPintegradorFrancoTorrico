// variables
let selected = null
//let categoria=null

//DOM

const cards = document.getElementsByClassName('card-body')

const cardcontainer = document.querySelectorAll('.btn.card')

//config cards iterarlas cards

/*
for (let card of cards) {
    card.classList.add('card__align--center');
    const lastP = card.querySelector('p:last-child');

   // console.log(lastP.innerText);

    lastP.classList.add('text-danger')


    const nthchild= card.querySelector(':nth-child(3)');


    const b= document.createElement('b');
    //console.log(nthchild.innerHTML);
    //console.log(b);

    b.innerText= nthchild.innerHTML
    nthchild.innerHTML=b.outerHTML
   // console.log(b.outerHTML);
}*/


        //utils
        
const changecolor=(container,index,revert = false)=>{
        
            const i=Number(index); // casteo el string a numero
        
            revert
                ?container.classList.replace(colors[i],transparent)
                :container.classList.replace(transparent,colors[i])
        
        
        
        
}
        
const matchCategory=(selection)=>{
            switch(selection){
                case "0":
                    form.categoria.value="a"
                    break
                case "1":
                    form.categoria.value="b"
                    break
                case "2":
                    form.categoria.value="c"
                    break
                default:
                    throw new Error('algo paso que no matcheo')
            }
}

//eventos


const colors = ['bg-primary','bg-danger','bg-success']
const transparent = 'bg-transparent'

const cardEnter = (e)=>{
    const {index}=e.target.dataset // el targe lo muestra en forma de nodo
    changecolor(e.target,index)
   
    console.log()
}

const cardleave=(e)=>{

    const {index}=e.target.dataset // el targe lo muestra en forma de nodo
    changecolor(e.target,index,true)
}


const cardclick = (e)=>{
    selected= e.currentTarget.dataset.index
//    console.log({selected})
   matchCategory(selected)
    evenAssigmentAll()
}


const eventCleaner = (container)=>{
    container.removeEventListener('mouseenter',cardEnter)
    container.removeEventListener('mouseleave',cardleave)
    
    
    container.removeEventListener('click', cardclick)

}




const evenAssigment = (container)=>{

    container.addEventListener('mouseenter',cardEnter)
    container.addEventListener('mouseleave',cardleave)
    

    container.addEventListener('click', cardclick)

}

const  evenAssigmentAll=()=>{
    
    
    for (let container of cardcontainer) {
        
        eventCleaner(container)
        
        const{index} = container.dataset
        //console.log(selected,index)
        if(index !== selected){
            
            evenAssigment(container)
            changecolor(container,index,true)
        }
        
        
        
    }
}
    
//eventos asignacion
evenAssigmentAll()


