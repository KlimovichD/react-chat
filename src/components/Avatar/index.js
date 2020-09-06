import React from 'react';

import { generateColor } from '../../utils/generateColor';

function Avatar({ user }) {
  if (user.avatar) {
    return <img className="avatar" src={user.avatar} alt={`Avatar ${user.fullname}`} />;
  } else {
    const [color1, color2] = generateColor(user._id);
    const FirstChar = user.fullname.charCodeAt(0);
    return (
      <div
        style={{ background: `linear-gradient(135deg, ${color1} 0%, ${color2} 96.52%)` }}
        className="avatar avatar--symbol">
        {FirstChar}
      </div>
    );
  }
}

export default Avatar;
