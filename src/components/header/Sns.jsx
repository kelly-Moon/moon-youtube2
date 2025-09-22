import React from "react";
import { snsLink } from "../../data/header";

const Sns = () => {
  return (
    <div className="header__sns">
      <ul>
        {snsLink.map((sns, key) => (
          <li key={key}>
            <a
              href={sns.url}
              target="_blank"
              aria-label={sns.title}
              rel="noopener noreferrer"
            >
              <span>{sns.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sns;
