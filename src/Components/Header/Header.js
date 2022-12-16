import './Header.css'


function Header() {

    return(
        <header>
            <h1>NASA Photos of the Day</h1>
            <span>Enter a date: </span><input className="date-input" placeholder="YYYY-MM-DD" />
            <button>Submit</button>
        </header>
    )
}

export default Header;