/**
 * Profile Controller
 */

 const bcrypt = require('bcrypt');
 const debug = require('debug')('books:profile_controller');
 const { matchedData, validationResult } = require('express-validator');
 
 /**
  * Get authenticated user's profile
  *
  * GET /
  */
 const getProfile = async (req, res) => {
     // somehow get the authenticated user
     // and return it
     //  console.log("Hello from the other side", req.user)
 
     res.send({
         status: 'success',
         data: {
             user: req.user,
         }
     });
 }
 
 /**
  * Update authenticated user's profile
  *
  * PUT /
  */
 const updateProfile = async (req, res) => {
     //  somehow update the authenticated users books
     // check for any validation errors

     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(422).send({ status: 'fail', data: errors.array() });
     }
 
     // get only the validated data from the request
     const validData = matchedData(req);

    //  update the user's password, but only if they sent us a new password

    if (validData.password) {
        try {
            validData.password = await bcrypt.hash(validData.password, 10)
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Exception thrown when hashing the password.',
            });
            
            throw error;
        }
    }
 
     try {
         const updatedUser = await req.user.save(validData);
         debug("Updated user successfully: %O", updatedUser);
 
         res.send({
             status: 'success',
             data: {
                 user: updatedUser,
             },
         });
 
     } catch (error) {
         res.status(500).send({
             status: 'error',
             message: 'Exception thrown in database when updating a new user.',
         });
         
         throw error;
     }
 }
 
 /**
  * Get authenticated user's books
  *
  * GET /books
  */
 const getBooks = async (req, res) => {
    //  somehow get the authenticated users books

    // const userBook = await new models.User( { id: req.user.id } )
    //      .fetch({ withRelated: ['books'] });

    // to just request the user books, so we dont have to request all the user info again
    // also called lazy load
    await req.user.load('books')

    res.send({
        status: 'success',
        data: {
            // this will log user info and book
            // userBook

            // to just log users book
            books: req.user.related('books')
            // user: req.user.related('books')
        }
    });


    //  res.status(405).send({
    //      status: 'error',
    //      message: 'This is a workshop.',
    //  });
 }

 /**
 * Add a book to the authenticated user
 *
 * POST /books
 */
const addBook = async (req, res) => {
     // check for any validation errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(422).send({ status: 'fail', data: errors.array() });
     }
 
     // get only the validated data from the request
     const validData = matchedData(req);

    // lazy-load book relationship
     await req.user.load('books');

    // get the user's books
     const books = req.user.related('books');

    // check if the book is already in the user's list of books

    //  let already_exists = false;

    /*
     let existing_book = null;
     books.forEach(book => {
         if (book.id == validData.book_id) {
            //  already_exists = true;
            existing_book = book;
         }
     });
     */

     const existing_book = books.find(book => book.id == validData.book_id);

    // if it already exists, bail 
     if (existing_book) {
         return res.send({
             status: 'fail',
             data: 'Book already exists'
         });
     }

     try {
         const result = await req.user.books().attach(validData.book_id);     // req.user = models.user
        //  const result2 = await req.user.books().detach(validData.book_id);    // to remove book
         debug("Added book to user successfully: %O", res);
 
         res.send({
             status: 'success',
             data: null,
         });
 
     } catch (error) {
         res.status(500).send({
             status: 'error',
             message: 'Exception thrown in database when adding a book to a user.',
         });
         
         throw error;
     }
}

 module.exports = {
     getProfile,
     updateProfile,
     getBooks,
     addBook
 }