//variables

const precioInicial =200;

const categories ={
    a:{ percent: 80, value:'0'},
    b:{ percent: 50, value:'1'},
    c:{ percent: 15, value:'2'}
}
const totaltext='Total a Pagar: $ '

let categoria=null
let tickets=null
let total=null

//dom

const form= document.forms.formulario

const inputs = form.getElementsByTagName('input')

const select = form.getElementsByTagName('select')[0]


const totaltag=document.getElementById('total')

//los botones verdes Borrar y resumen
const resetbtn=document.getElementById('reset')
const submitbtn=document.getElementById('submit')

//utils

const precioTotal = ()=>{

    if (!tickets||!categoria) {
        return;
    }
    //tickets =2
    const totalvalue=precioInicial*tickets
    //console.log(totalvalue)

    const discount=(totalvalue/100)*categories[categoria].percent

    total=totalvalue-discount

    //console.log(total)
    totaltag.innerText=totaltext+total
}

//eventos 

const resetCategories=()=>{
    total=null

    selected=null
    evenAssigmentAll()

    totaltag.innerText=totaltext
}


const reset=(e)=>{

    e.preventDefault()

    for (let input of inputs) {
           console.log(input.value)
           input.value=''

        
    }

    select.value='none'
    resetCategories()
}
 
const submit =(e)=>{
    e.preventDefault()

    const{firstname,lastname,email,tickets, categoria} = form
 
    const verified={
        firstname: firstname.value!=='',
        lastname: lastname.value!=='',
        email: email.value.includes('@'),
        tickets: tickets.value>0, 
        categoria: categoria.value!=='none'
    }

    const values = Object.values(verified)


    const submitAccepted = values.every(value=>value)
    console.log(submitAccepted)

    submitAccepted
    ?alert("Fue Aceptado")
    : alert('debes completar todos los campos')
}



const setCategory =(e)=>{

    const option = e.target.value
    console.log(option)

    if (option==='none') {
        resetCategories()
        return;
    }
    categoria=option
    const index= categories[categoria].value
    const container=cardcontainer[index]

    selected = index
    changecolor(container,index)
    evenAssigmentAll()

    precioTotal()
}




const setTicket =(e)=>{

    const {value} = e.target

    if(value<0||isNaN(value)){

        e.target.value=0
        total=null
        return;
    }
    tickets=value
    precioTotal()


    console.log(value)



}


form.categoria.addEventListener('change',setCategory)

form.tickets.addEventListener('keyup',setTicket)



form.addEventListener('submit',submit)
resetbtn.addEventListener('click',reset)
