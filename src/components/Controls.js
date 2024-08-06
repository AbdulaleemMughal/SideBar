const Controls = ({
    onUndo,
    onRedo,
    onReset,
    hasCircle,
    hasHistory
}) => {
    return (
        <div className="control" onClick={(e) => {
            e.stopPropagation();
        }}>
            <button disabled={!hasCircle} onClick={onUndo} className={hasCircle ? '' : 'disable'}>Undo</button>
            <button disabled={!hasHistory} onClick={onRedo} className={hasHistory ? '' : 'disable'}>Redo</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
};

export default Controls;