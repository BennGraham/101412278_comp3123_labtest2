export default function InfoItem({ icon, children }) {
  return (
    <div className="info-item d-flex align-items-center mb-2 p-2 rounded-3 bg-white bg-opacity-10 hover-bg-opacity-20 will-transition">
      <i
        className={`${icon} me-3 text-center opacity-75`}
        style={{ width: "20px" }}
      ></i>
      <span className="flex-grow-1">{children}</span>
    </div>
  );
}
