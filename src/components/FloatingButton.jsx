export default function FloatingButton({ onClick, detailsHidden = true }) {
  return (
    <button
      className="rounded-pill px-4 py-2 bg-opacity-10 hover-bg-opacity-20 will-transition border-1 border-white border-opacity-25 text-white hover-float"
      onClick={onClick}
      style={{ backgroundColor: "#FFFFFF10" }}
    >
      <i className={`fas fa-chevron-${detailsHidden ? "up" : "down"} me-2`}></i>
      {detailsHidden ? "Show Less" : "Show More Details"}
    </button>
  );
}
