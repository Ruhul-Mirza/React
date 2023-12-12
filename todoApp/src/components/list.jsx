import React, { useRef} from 'react';

function List({ tasks }) {

  const para = useRef(null);
  const element = useRef(null)

  const editTask = ()=>{
    let edit = para.current;
    if (edit) {
      edit.classList.toggle('line-through')
    }
  }

  const deleteTask = ()=>{
    let del = element.current
    if(del){
      del.remove()
    }
  }
  return (
    <>
      <div className='flex flex-col gap-10 text-white items-center font-semibold text-2xl'>
        {tasks.map((task,index) => (
            <div className='flex items-center justify-between w-[800px] text-3xl'>
              <div ref={element} >
                <p ref={para}>{task}</p>
                <button onClick={editTask} className='text-white bg-yellow-500 px-3 py-2 rounded-lg'>Edit</button>
                <button onClick={deleteTask} className='text-white bg-red-500 px-3 py-2 rounded-lg'>Delete</button>
              </div>
                
            </div>
        ))}
      </div>
    </>
  );
}

export default List;
