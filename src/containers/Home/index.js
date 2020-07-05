import React from "react";
import "./CSS/style.css";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

// ______________________ NO IMPORTS PAST HERE____________________
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Index() {
  return (
    <div className="home">
      <AutoplaySlider
        play={true}
        interval={9000}
        bullets={false}
        buttons={false}
        infinite={true}
        className="slide-show"
      >
        <div className="slide-img" data-src="./public/assets/images/court-img.jpg">
          <div className="slide-caption">
            <h1>Save Money</h1>
            <p>
              Having good legal counsel on your side can save you a lot of money
              in the long run. If you’re paying for a lawyer, such as one who
              will review contracts for your business, we can provide you honest
              and affordable legal advice that can save you thousands.
            </p>
          </div>
        </div>
        <div className="slide-img" data-src="./public/assets/images/court-img-2.jpg">
          <div className="slide-caption">
            <h1>Protect Yourself</h1>
            <p>
              We can help you avoid the downfall of getting lawsuits. Lawsuits
              are a complicated task and we can help you get out of the rut by
              providing you our lawsuit protection services.
            </p>
          </div>
        </div>
        <div className="slide-img" data-src="./public/assets/images/court-img-3.jpg">
          <div className="slide-caption">
            <h1>Identity Protection</h1>
            <p>
              We have experience navigating identity theft cases and work
              tirelessly to hold identity thieves and other parties accountable
              for their actions. Our attorneys have a history of success helping
              consumers restore their good names, reputation, and credit after
              their identities were stolen.
            </p>
          </div>
        </div>
        <div className="slide-img" data-src="./public/assets/images/court-img-4.jpg">
          <div className="slide-caption">
            <h1>Car Accidents</h1>
            <p>
              If you ever been in a car accident, we can help you with your
              case. Get back what you deserve and we will fight tirelessly along
              side you in every step!
            </p>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Index;
