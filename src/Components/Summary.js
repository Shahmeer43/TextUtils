import "../Styles/SummaryStyle.css";

let Summary = ({ data: text, mode }) => {
  const totalWords = (text) => {
    if (text === "") {
      return 0;
    }

    let totalWords = text.split(" ").filter((word) => {
      return word !== "";
    });

    return totalWords.length;
  };

  const timeCalculation = (text) => {
    let time = 0.25 * totalWords(text);
    let unit = "seconds";
    if (time >= 60) {
      unit = "minutes";
      time = time / 60;
      time = time.toFixed(2);
    }
    return { time, unit };
  };

  let wordsCount = totalWords(text);
  const { time, unit } = timeCalculation(text);

  return (
    <>
      <div
        className="summaryContainer"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h2 className="summaryHeading">Summary</h2>
        <p>
          {wordsCount} Words and {text.length} Characters
        </p>
        <p>
          {time} {unit} to Read
        </p>
      </div>
    </>
  );
};

export default Summary;
