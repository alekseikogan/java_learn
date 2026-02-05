function ModeToggle() {
    let darkModeOn = true;
    
    const DarkMode = <h1>Dark Mode is ON</h1>;
    const LightMode = <h1>Light Mode is ON</h1>;

    function toggleMode() {
        darkModeOn = !darkModeOn;
        if (darkModeOn) {
            console.log('Dark Mode is ON');
        }
        else {
            console.log('Light Mode is ON');
        }
    }

    return (
        <div>
            {darkModeOn ? DarkMode : LightMode}
            <button onClick={toggleMode}>Toggle Mode</button>
        </div>
    )
}

export default ModeToggle;