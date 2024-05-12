import './biteSize.css';

function Envelope() {
    return (
        <div className='container'>
            <div id='divDone'>
                <label name='spent' htmlFor="spent" id='labelSpent'>Used</label>
                <input name='spent' type="checkbox" id='checkbox'/>
            </div>
          
            <div id='amount'>
                <input type="text" placeholder='Enter $...'/>
                <span>Dollar Amt</span>
            </div>

           <button id="myButton">Click me</button>

        </div>
    )
}

export default Envelope