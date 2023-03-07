import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import ProgressBar from 'Component/ProgressBar/ProgressBar.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.extension.style.scss';

/** @namespace ProgressBar/Route/Checkout/Component */
export class Checkout extends SourceCheckout {
    
    progressBarLabels = ["Shipping", "Review & Payments"]

    render() {

        return (

            <main block="Checkout">
                <ProgressBar 
                    stepMap={this.stepMap} 
                    progressBarLabels={this.progressBarLabels}
                    activeStepName={this.props.checkoutStep}
                />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }

}

export default Checkout;
