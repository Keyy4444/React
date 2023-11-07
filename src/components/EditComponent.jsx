export function EditComponent ({ setEditedTask, saveEdit, index }) {
    return (
      <div>
        <input type="text" onChange={(e) => setEditedTask(e.target.value)} className="bg-grey shadow appearance-none border rounded w-50 py-2 px-3 mr-4 text-grey-darker"/>
        <button onClick={() => saveEdit(index)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-grey text-green border-green hover:bg-green">Save</button>
      </div>
    );
  }
