

export const Board = ({position})=>{
  
    const cells = [];

    for (let i = 50; i >= 1; i--) {
      cells.push(
        
        <div
          key={i}
          className={`h-16 w-16 border border-white text-white flex justify-center items-center ${
            position === i ? 'bg-blue-800' : 'bg-black'
          }`}
        >
          {i}
        </div>
      );
    }

    return cells;
  };
  





