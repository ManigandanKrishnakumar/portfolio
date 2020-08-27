import React, {useState} from 'react';
import AnimatedDiv from 'react-animate-on-scroll';

export default (Component) => {
  const ScrollAnimated = (props) => {
    const [isInView, setIsInView] = useState(false);
    return (
      <AnimatedDiv
        animateIn="fadeIn"
        afterAnimatedIn={(visible) => {
          setIsInView(true);
        }}>
        <Component {...props} isInView={isInView} />
      </AnimatedDiv>
    );
  };

  return ScrollAnimated;
};
