import React, { memo } from 'react';

import { CssLikeObject,  styled } from '../modules/styled';
import { ComponentsProps, } from '../types';

const StyledWrapper = styled('div')(
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',

    '> *': {
      width: '100%',
    },
  },
  () => {
    const styles: CssLikeObject = {};

    return {
      ...styles,
    };
  },
  'WrapperRSWP',
);

function Wrapper({ children
  //  styles
   }: ComponentsProps) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
}

export default memo(Wrapper);
