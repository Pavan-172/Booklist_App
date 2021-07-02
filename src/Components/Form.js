import React from "react";

const Form=(props)=>{
   const {
    title,
    setTitle,
    author,
    setAuthor,
    isbn,
    setIsbn,
    currentBookId,handleSubmit
   } =props;
    return(
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text"
              autoFocus
              required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Author</label>
            <input 
            autoFocus
              required
              type="text"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
              />
            <label>Isbn</label>
            <input 
            autoFocus
              required
              type="text"
              value={isbn}
              onChange={(e)=>setIsbn(e.target.value)}
              />
              <button tabIndex="0" type="submit">{currentBookId !==null ? "Add":"Update"}
              </button>
              
        </form>
    )
}




export default Form;