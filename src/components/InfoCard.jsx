export default function InfoCard({ title, children }) {
  return (
    <div className="col-4">
      <div
        className="h-100 shadow-sm p-3 rounded-3 hover-float"
        style={{ backgroundColor: "#FFFFFF10", border: "1px solid #FFFFFF20" }}
      >
        <div>
          <h5 className="fw-bolder text-white mb-3 border-bottom border-white border-opacity-25 text-shadow">
            {title}
          </h5>
          {children}
        </div>
      </div>
    </div>
  );
}
