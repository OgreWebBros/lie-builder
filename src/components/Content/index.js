import React from "react";
import ResetButton from "../SubmitButton";


const Content = () => {

    return (
      <div className="content">
        {displayedContent}
        <div className="button-wrapper">
          <ResetButton
            text={this.state.buttonText}
            handleClick={() => this.clickFunctionSplitter()}
          />
        </div>
      </div>
    );
  }

export default Content;
