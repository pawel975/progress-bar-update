import { PureComponent } from "react";
import './ProgressBar.style.scss';

class ProgressBar extends PureComponent {
    
    constructor(props){
        super(props)
    }

    render(){

        const activeStepIndex = (Object.keys(this.props.stepMap)).indexOf(this.props.activeStepName);
        const isChekoutFinished = activeStepIndex === this.props.progressBarStepNames.length;

        return (
            <div className="progress-bar">
                <hr className={`progress-bar__step-bar`}></hr>
                {

                    this.props.progressBarStepNames.map((stepName, index) => {

                        const stepId = index + 1;
                        const isStepActive = activeStepIndex >= index;
            
                        return (
                            <>
                                {index > 0 ? 
                                    <hr className={`progress-bar__step-bar middle-step ${!isStepActive && "non-active"}`}></hr> : null
                                }
                                <div className="progress-bar__step-wrapper">
                                    <div className={`progress-bar__step-number ${!isStepActive && "non-active"}`}>{stepId}</div>
                                    <span className={`progress-bar__step-name ${!isStepActive && "non-active"}`}>{stepName}</span>
                                </div> 
                            </>
                        )
                    })
                }
                <hr className={`progress-bar__step-bar ${!isChekoutFinished && "non-active"}`}></hr>
            </div>
        )
    }
};

export default ProgressBar;