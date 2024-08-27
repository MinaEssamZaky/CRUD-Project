import {query} from './../../../DB/DB.Connection.js'
export const addProduct = (req,res)=>{
    const {productName,price,description}= req.body
    query.execute(`insert into products (productName,price,description)
        values('${productName}','${price}','${description}')`)
    res.json({message:"success"})
}

export const GetAllProduct =(req,res)=>{
    let serch=''
    if(req.query.keyword){serch=req.query.keyword}
    query.execute(`select * from products where productName like '%${serch}%'`,
        (err,data)=>{
        if(err){res.json({message:'error',err})}
        else(res.json({message:"success",data}))
    })
}

export const GetProductById= (req,res)=>{
    const {id} =req.params
    query.execute(`select * from products where id =${id} ` ,(err,data)=>{
        if(err){res.json({message:'error',err})}
        else(res.json({message:"success",data}))
    })
}

export const DeleteProduct =(req,res)=>{
    const {id}=req.body
    query.execute(`delete from products where id=${id}`)
    res.json({message:"success"})
}
export const UpdateProduct =(req,res)=>{
    const {productName,price,description,id}=req.body
    query.execute(`update products set productName ='${productName}' where id=${id}`)
    res.json({message:"success"})
}