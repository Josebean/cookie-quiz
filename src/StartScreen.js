function StartScreen({onStart}) {
    return (
        <div>
            <h1>Which Cookie Are You?</h1>

            <button className="main-button" onClick={onStart}>Start</button>
        </div>
    )
}

export default StartScreen;