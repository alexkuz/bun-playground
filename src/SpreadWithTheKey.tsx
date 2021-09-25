import * as React from 'react';

type Props = {
  className?: string;
};

function SpreadWithTheKey({ className, ...rest }: Props) {
  return (
    <div
      className={className}
      key="spread-with-the-key"
      {...rest}
      onClick={() => console.log('click')}
    >
      Rendered component containing warning
    </div>
  );
};

export default SpreadWithTheKey;
