import { PureComponent } from "react";
import './ProgressBar.style.scss';

class ProgressBar extends PureComponent {
    
    constructor(props){
        super(props)

        const {steps} = this.props;

        this.stepsNumbers = this.props.steps.map((step, index) => {
            
            return (
                <>
                    {index !== 0 ? <hr className={`progress-bar__step-bar middle-step ${!step.active && "non-active"}`}></hr> : null}
                    <div className="progress-bar__step-wrapper">
                        <div className={`progress-bar__step-number ${!step.active && "non-active"}`}>{step.id}</div>
                        <span className={`progress-bar__step-name ${!step.active && "non-active"}`}>{step.name}</span>
                    </div> 
                </>
            )
        })
    }


    render(){
        return (
            <div className="progress-bar">
                <hr className="progress-bar__step-bar"></hr>
                {this.stepsNumbers}
                <hr className="progress-bar__step-bar non-active"></hr>
            </div>
        )
    }
};

export default ProgressBar;