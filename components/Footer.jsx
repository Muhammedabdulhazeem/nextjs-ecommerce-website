import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Azeem Sound All rights reserverd</p>
      <p className="icons">
        <ImLinkedin />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer