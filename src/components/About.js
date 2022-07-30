import React from "react";


function About() {
  return (
    <div id="About">
      <h1>Movie App</h1>
      <div className="aboutApp">
        This App is the Movies fans Page That allows <br /> the user to View
        latest Movie Posters, access <br /> their titles, the Type, aand the
        Year of release. Additionally, the App allows the <br />
        user to access Famous Quotes and <br />
        extraordinary lines from various Stars in <br />
        different movies. It also allows the fans <br /> to Post Movie Quotes
        they have heard from different Movie stars. <br />
        The App is easy to use and to operate.
      </div>
      <div>
        <img
          className="AboutImage"
          src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="About"
        />
      </div>
    </div>
  );

}
export default About