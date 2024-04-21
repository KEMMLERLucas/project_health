import "./css/ProgressBar.css"

function ProgressBar({pourcentage}) {

    let adjustedPourcentage = pourcentage;
    if (pourcentage > 100) {
        adjustedPourcentage = 100;
    }

    let barColorClass = '';
    let textColorClass = '';
    let borderColorClass = '';

    if(adjustedPourcentage > 75){
        barColorClass = 'high-progress';
        textColorClass = 'high-text';
        borderColorClass = 'high-border';
    } else if (adjustedPourcentage > 50){
        barColorClass = 'medium-progress';
        textColorClass = 'medium-text';
        borderColorClass = 'medium-border';
    } else if (adjustedPourcentage > 25){
        barColorClass = 'low-progress';
        textColorClass = 'low-text';
        borderColorClass = 'low-border';
    } else {
        barColorClass = 'very-low-progress';
        textColorClass = 'very-low-text';
        borderColorClass = 'very-low-border';
    }

    return(
        <div className="container">
            <div className={`pourcentage ${textColorClass}`}>{pourcentage} %</div>
            <div className={`progress-bar ${borderColorClass}`}>
                <div className={`progress-bar-fill ${barColorClass}`} style={{ width: `${adjustedPourcentage}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;
    