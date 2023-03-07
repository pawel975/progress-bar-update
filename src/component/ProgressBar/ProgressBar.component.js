import { PureComponent } from "react";
import './ProgressBar.style.scss';

class ProgressBar extends PureComponent {
    
    constructor(props){
        super(props)
    }

    render(){

        const allStepsNames = Object.keys(this.props.stepMap);

        const activeStepIndex = allStepsNames.indexOf(this.props.activeStepName);
        const isChekoutFinished = activeStepIndex === this.props.progressBarLabels.length;

        const checkoutMark = <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>;

        return (
            <div className="progress-bar">
                <hr className={`progress-bar__step-bar`}></hr>
                {

                    this.props.progressBarLabels.map((stepName, index) => {

                        const stepId = index + 1;
                        const isStepActive = activeStepIndex >= index;
                        const isPreviousStep = activeStepIndex > index;
            
                        return (
                            <>
                                {index > 0 ? 
                                    <hr className={`progress-bar__step-bar middle-step ${!isStepActive && "non-active"}`}></hr> : null
                                }
                                <div className="progress-bar__step-wrapper">
                                    <div className={`progress-bar__step-number ${!isStepActive && "non-active"}`}>{isPreviousStep ? checkoutMark : stepId}</div>
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