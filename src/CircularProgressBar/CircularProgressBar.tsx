import "bootstrap/dist/css/bootstrap.min.css";
import "./CircularProgressBar.css";

function CircularProgressBar({ percentage }: { percentage: number }) {
  percentage = Math.floor(percentage);
  return (
    <div className="circular-progress-bar">
      <svg viewBox="0 0 18 18" className="circular-chart">
        <path
          className="circle-bg"
          d="M9 1.0422
        a 7.9577 7.9577 0 0 1 0 15.9154
        a 7.9577 7.9577 0 0 1 0 -15.9154"
        />
        <path
          className="circle"
          strokeDasharray={`${0.5 * percentage}, 50`}
          d="M9 1.0422
        a 7.9577 7.9577 0 0 1 0 15.9154
        a 7.9577 7.9577 0 0 1 0 -15.9154"
        />
        <text x="9.3" y="9.3" className="percentage">
          {Math.floor(percentage)}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgressBar;
