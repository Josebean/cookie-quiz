function StartScreen({onStart}) {
    return (
        <div>
            <h1>Which Cookie Are You?</h1>

            <button className="btn btn-ui" onClick={onStart}>Start</button>
        </div>
    )
}

export default StartScreen;