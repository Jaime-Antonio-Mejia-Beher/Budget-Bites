import './Header.css'
function Header() {
    return (
        <>
            <h1>Set Budget</h1>
            <div id="startingBudget">
                <span>Budget Amount</span>
                <input type="text" /><br/>
                <input type="text" /><br/>
                <span>Number of Envelopes</span>
            </div>        
            <button>Submit</button>
        </>
    )
}

export default Header