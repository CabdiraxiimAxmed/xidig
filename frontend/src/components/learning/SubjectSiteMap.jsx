import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const SubjectSiteMap = () => {
  function myFunction() {
    document.querySelector('.subject-sitemap-content').classList.toggle('show');
  }
  window.onclick = function (event) {
    if (!event.target.matches('.subject-sitemap-btn')) {
      var dropdowns = document.getElementsByClassName(
        'subject-sitemap-content'
      );
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  return (
    <div className="subject-sitemap-container">
      <Button
        text="HTML"
        stylingClass="subject-sitemap-btn"
        handleClick={myFunction}
      />
      <div className="subject-sitemap-content">
        <Link to="/banaan/baro/html/waa-maxay-html">Waa maxay html</Link>
        <Link to="/banaan/baro/html/cinwaan">Cinwaanada</Link>
        <Link to="#">Link3</Link>
      </div>
    </div>
  );
};

export default SubjectSiteMap;
