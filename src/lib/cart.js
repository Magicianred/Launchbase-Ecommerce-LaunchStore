const  { formatPriceComingFromDb } = require('./utils')

//cart will be store in session (req.session)/ Like when user is logged in
// we will call this cart withing session as oldCart


const Cart = { 

    init(oldCart){
         if(oldCart){
            this.items = oldCart.items  //criando todos os items do carrinho - item = [{ product:{}, price, quantity, formattedPrice }]
            this.total = oldCart.total
         }else {
            this.items = []
            this.total = {

                quantity: 0,
                price: 0,
                formattedPrice: formatPriceComingFromDb(0) // isso que sera mostrado para o cliente
            }

         }
         return this
     },
    addOne(product){

        //verificar se o produto ja existe no carrinho (OldCart)
        let inCart = this.items.find(item => item.product.id == product.id) // item.product.id - produto que ja existe no carrinho
        if(!inCart){
            inCart  = {
                product : {
                ...product,
                formattedPrice: formatPriceComingFromDb(product.price) 
                },
                quantity: 0,
                price: 0,
                formattedPrice: formatPriceComingFromDb(0)

            }
        }


        if(inCart.quantity >= product.quantity) return this // Nao deixa adicionar no carrinho uma quantidade maior que a quantidade de produto disponivel em estoque

        //atualizando a quantidade do items(produtos) no carrinho 
        inCart.quantity++
        inCart.price = inCart.product.price * inCart.quantity
        inCart.formattedPrice = formatPriceComingFromDb(inCart.price)

        //atualizando o carrinho 
        this.total.quantity++
        this.total.price += inCart.product.price 
        this.total.formattedPrice = formatPriceComingFromDb(this.total.price)
    
        this.items.push(inCart)

        return this
    },

    removeOne(productId){}, // dentro o items ele vai procurar por productId

    delete(productId){}, // ele vai procurar no items e vai remover ele todiho do carrinho

     
}


//adicionando um producto no carrinho // simulando
const product = {
    id: 1,
    price: 199,
    quantity: 2,
}

const product2 = {
    id: 2,
    price: 229,
    quantity: 1,
}
console.log('ADD 1st CART ITEM')
//como a gente esta retornando o this, conseguimos encadear com addOne()
let oldCart = Cart.init().addOne(product)
console.log(oldCart)

console.log('ADD 2st CART ITEM')
oldCart = Cart.init(oldCart).addOne(product)
console.log(oldCart)

console.log('ADD 3rd CART ITEM')
oldCart = Cart.init(oldCart).addOne(product2)
console.log(oldCart)

console.log('ADD Last CART ITEM')
oldCart = Cart.init(oldCart).addOne(product)
console.log(oldCart)

module.exports = Cart

//console.log(Cart.init().total.formattedPrice)
//console.log(Cart.init({items: [ 1,2,3 ], total: {quantity: 50 }})) //quando o carrinho vier com items
// metodos para:

// - 22 + --------trash (clicando em trash elimina tudo do carrinho)
// Metodo 1 = Adicionar 1 item ao carrinho
// Metodo 2 = Remover 1 item do carrinho
// Metodo 3 = Deletar todo o item (trash)


//

