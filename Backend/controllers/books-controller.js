const Book = require("../model/Book");


const getAllBooks = async(req, res, next) => {
    let book;
    try{
        book = await Book.find();
    }catch(err){
        console.log(err);
    }
    if (!book){
        return res.status(404).json({message: "No products found"})    
    }
    return res.status(200).json({book});
}

//find book by ID
const getById = async(req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }catch (err){
        console.log(err);
    }
    if (!book){
        return res.status(404).json({message: "No book found"})    
    }
    return res.status(200).json({book});
}

const addBook = async(req, res, next) => {
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    } catch (err) {
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({book});
};

const updateBook = async(req, res, next) => {
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await Book.save();
    }catch (err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable update book by this ID"})
    }
    return res.status(200).json({book});
};

const deleteBook =async(req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id)
    }catch (err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to delete book by this ID"})
    }
    return res.status(200).json({message:'Product successfully deleted'});
}

exports.addBook = addBook;
exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;