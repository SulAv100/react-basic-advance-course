import React, { useState } from "react";
import "./Stepper.css";

function Stepper() {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState([1, 2, 3, 4]);
  const totalSteps = 4;

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };
  const style = {
    backgroundColor: "rgb(113, 230, 113)",
    border: "none",
  };
  return (
    <>
      <div className="stepper-container">
        <div className="upper-bracket">
          {[...Array(totalSteps)].map((_, index) => (
            // this ...Array makes an array of Array(this number) and _ represents the current index of the array
            <div className="upper-bracket" key={index}>
              <>
                {index < totalSteps-1 ? (
                  <>
                    {count > index ? (
                      <>
                        <i class="fa-solid fa-circle-check"></i>
                        <span style={style} className="line"></span>
                      </>
                    ) : (
                      <>
                        <span className="steps">{index + 1}</span>
                        <span className="line"></span>
                      </>
                    )}
                  </>
                ) : (
                  <>
                  {
                    count >index?<>
                      <i class="fa-solid fa-circle-check"></i>
                    </>:<>
                    <span className="steps">{index + 1}</span>
                    </>
                  }
                  </>
                )}
              </>
            </div>
          ))}

          {/* {
            count> 1?<><i class="fa-solid fa-circle-check"></i><span style={style} className="line"></span></> :<><span className='steps'>1</span><span  className="line"></span> </>
            
            }
                      

          {
            count> 2?<><i class="fa-solid fa-circle-check"></i><span style={style} className="line"></span></> :<><span className='steps'>2</span><span  className="line"></span> </>

            }         
          

             {
            count> 3?<><i class="fa-solid fa-circle-check"></i><span style={style} className="line"></span></> :<><span className='steps'>3</span><span  className="line"></span> </>

            }          
{
            count> 4?<><i class="fa-solid fa-circle-check"></i></> :<><span className='steps'>4</span> </>

            }          */}
        </div>
        <div className="button-verification">
          {count === 4 ? (
            <button>Done</button>
          ) : (
            <button onClick={increaseCount}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Stepper;
