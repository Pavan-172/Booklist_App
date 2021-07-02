import React from "react";

const TableField =({ fieldName,settingsField,removeBook,editBook })=>{
    return(
        <div className="tableField">
           {fieldName}
           {settingsField && 
           <>
            <i onClick={editBook} class="far fa-edit"></i>
           <i onClick={removeBook} class="fas fa-trash-alt"></i>
           </>
           }
          
        </div>     
    );
}

export default TableField;