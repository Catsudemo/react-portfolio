import React from 'react';
const Project = ({ title, url, liveurl, type }) => {
  return (
    <div className={title + 'wrapper'}>
      <div className={'new' + title + 'container'}>
        <h3 className={title}>{title}</h3>
        <p>Skills: {type}</p>
        {url && (
          <p>
            <a href={url} className="projectLnk" target="_blank" rel="noopener noreferrer">
              See the code
            </a>
          </p>
        )}
        {liveurl && (
          <p>
            <a href={liveurl} className="liveLnk" target="_blank" rel="noopener noreferrer">
              See it live
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;
