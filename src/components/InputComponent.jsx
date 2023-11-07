export function InputComponent ({ handleSubmit, task, addNewTask}) {
    return (
      <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <form className="flex mt-4" onSubmit={handleSubmit}>
                <input type="text" id={'newtask'} value={task} onChange={addNewTask} required className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"></input> 
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Submit</button>
              </form> 
          </div>
    );
  }
