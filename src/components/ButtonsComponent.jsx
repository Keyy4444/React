export function ButtonsComponent ({ row, index, deleteRow, toggleEdit }){
    return (
      <>
        <button onClick={() => toggleEdit(index)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-grey text-green border-green hover:bg-green">Edit</button>
        <button onClick={() => deleteRow(row, index)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Delete</button>
      </>
    );
  }
