import './ProgressBar.css';

function ProgressBar({ progress, color = "#4CAF50", label = "Прогресс", height = 20 }) {
  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>

      <div className="progress-outer" style={{ height }}>
        <div
          className="progress-inner"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
            height: "100%",
            transition: "0.3s"
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;