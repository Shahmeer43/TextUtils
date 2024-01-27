import "../Styles/AboutStyle.css";

let About = ({ mode }) => {
  return (
    <div
      className="aboutContainer"
      style={{ color: mode === "dark" ? "white" : "black" }}
    >
      <div className="section">
        <h1 className="mainHeading">About TextUtils</h1>
        <p>
          Welcome to TextUtils, your go-to platform for manipulating and
          analyzing text effortlessly. Whether you're a writer, student, or just
          someone who loves playing with words, TextUtils is designed to
          simplify your text-related tasks.
        </p>
        <p>
          Our Mission At TextUtils, our mission is to empower users with tools
          that make working with text a breeze. We understand the importance of
          effective text processing and aim to provide a user-friendly
          experience for everyone.
        </p>
      </div>

      <div className="section">
        <h2 className="mainHeading">Features</h2>
        <h3>1. Text Transformation:</h3>
        <div>
          <ul style={{ marginLeft: "6%" }}>
            <li>Convert text to uppercase or lowercase.</li>
            <li>Reverse text for a creative touch.</li>
            <li>Remove extra spaces to keep your content clean.</li>
          </ul>
        </div>
        <h3 className="featureSection">2. Editing Tools:</h3>

        <p>Copy, undo, redo, and clear functions for seamless editing.</p>
        <h3 className="featureSection">3. Word and Character Count:</h3>

        <p>
          Get real-time statistics on the number of words and characters in your
          text.
        </p>
        <h3 className="featureSection">4. Time to Read:</h3>

        <p>
          Estimate the time it takes to read your text, helping you manage your
          content efficiently.
        </p>
      </div>
      <div className="section">
        <h2 className="mainHeading">Inspiration</h2>
        <p>
          TextUtils was born out of the desire to create a versatile platform
          that caters to the diverse needs of users working with text. Whether
          you're a professional writer or just looking to tidy up your text
          messages, TextUtils is here to assist you.
        </p>
      </div>

      <div className="section">
        <h2 className="mainHeading">Who We Are</h2>
        <p>
          We are a passionate team of developers dedicated to crafting tools
          that enhance your text-related experiences. Our commitment is to
          deliver user-friendly features that simplify text processing while
          maintaining a clean and intuitive interface.
        </p>
      </div>
      <div className="section">
        <h2 className="mainHeading">Connect with Us</h2>
        <p>
          We value your feedback and suggestions. If you have any questions,
          ideas, or just want to say hello, feel free to reach out to us on our
          contact page.
        </p>
      </div>
      <div className="section">
        <p>
          Thank you for choosing TextUtils. We hope our platform adds value to
          your text-editing endeavors.
        </p>
        <p>Happy Text Manipulation! </p>
        <p>The TextUtils Team.</p>
      </div>
    </div>
  );
};

export default About;
