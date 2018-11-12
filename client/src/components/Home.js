import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div id="main-container" class="container">
        <div class="jumbotron text-center header-wrap" align="center">
          <h1 class="display-4">Rent-All</h1>
          <img
            src="../assets/Images/linkedin_banner_image_1.png"
            alt="logo"
            class="mb-4"
            style={(width = 210)}
          />
          <p class="lead">
            Welcome to <strong>NewsScrape</strong> we get the scoop for you.
          </p>
          <hr class="my-4" />
          <p class="lead">Start your search or post an item for rent.</p>
        </div>

        <button type="submit" id="search-item" class="btn">
          Search For Item
        </button>
        <button type="submit" id="post-item" class="btn">
          Post an Item
        </button>
        <a href="/logout">
          {" "}
          <button type="btn" class="btn">
            Logout
          </button>
        </a>

        <button type="submit" id="sign-in-modal" class="btn">
          Sign In!
        </button>
        <button type="submit" id="sign-up" class="btn">
          Sign Up!
        </button>
      </div>
    );
  }
}

export default Home;
