const fetchData = ()=>{
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise returned")
    },2000)
})
    return promise

}

setTimeout(()=>{
    fetchData().then(text=>{
        console.log(text)
    return fetchData()
    }).then(text2=>{
        console.log(text2)})
},5000


)

