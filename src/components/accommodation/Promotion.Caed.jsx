import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const PromotionCard = ({ promotion }) => {
  const fullImageUrl = `${BASE_URL}/uploads/accommodations/${promotion.image_name}`;
  const originalPrice = promotion.price_per_night;
  const discountPercent = promotion.discount;

  const hasDiscount = originalPrice && discountPercent;
  const discountedPrice = hasDiscount
    ? Math.round(originalPrice * (1 - discountPercent / 100))
    : originalPrice;

  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div
        className="card h-100 border-0 d-flex flex-column position-relative"
        style={{
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
          borderRadius: "0.5rem",
        }}
      >
        {/* ป้ายโปรโมชั่น */}
        {hasDiscount && (
          <div
            className="position-absolute bg-danger text-white px-2 py-1"
            style={{
              borderTopLeftRadius: "0.4rem",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            โปรโมชั่น
          </div>
        )}

        {/* รูปภาพ */}
        <img
          src={fullImageUrl}
          alt={promotion.name}
          className="card-img-top rounded-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* เนื้อหา */}
        <div className="card-body d-flex flex-column">
          <h6
            className="card-title fw-bold mb-2"
            style={{ fontSize: "1.25rem" }}
          >
            {promotion.name}
          </h6>

          <p
            className="text-warning mb-1"
            style={{ fontSize: "1.05rem", fontWeight: "500" }}
          >
            {promotion.promotion_detail || "โปรโมชั่นพิเศษ"}
          </p>
          <p className="text-muted mb-1" style={{ fontSize: "0.95rem" }}>
            {promotion.promotion_date || "1 เม.ย. - 31 ส.ค. 2568"}
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.95rem" }}>
            รวมอาหารเช้า
          </p>

          {/* ราคาส่วนลด */}
          {originalPrice && (
            <div className="mb-2">
              {hasDiscount ? (
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span
                      className="text-decoration-line-through text-success me-2"
                      style={{ fontSize: "1rem" }}
                    >
                      {originalPrice.toLocaleString()} บาท
                    </span>
                    <span
                      className="fw-bold text-danger"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {discountedPrice.toLocaleString()} บาท
                    </span>
                  </div>
                </div>
              ) : (
                <span
                  className="fw-bold text-success"
                  style={{ fontSize: "1.5rem" }}
                >
                  {originalPrice.toLocaleString()} บาท
                </span>
              )}
              <div>
                <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                  รวมค่าธรรมเนียมและภาษีแล้ว
                </small>
              </div>
            </div>
          )}
        </div>

        {/* ปุ่มด้านล่างเต็มความกว้าง */}
        <div className="d-flex w-100">
          {hasDiscount && (
            <span
              className="fw-bold text-center"
              style={{
                backgroundColor: "white",
                color: "rgba(91, 155, 43, 1)",
                border: "1px solid rgba(91, 155, 43, 1)",
                width: "50%",
                padding: "0.375rem 0.75rem",
                borderRadius: "0 0 0 0.375rem",
                fontSize: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              ประหยัด {discountPercent}%
            </span>
          )}

          <Button
            variant="primary"
            className="fw-bold"
            style={{
              backgroundColor: "rgba(0, 196, 255, 1)",
              borderColor: "rgba(0, 196, 255, 1)",
              width: hasDiscount ? "50%" : "100%",
              borderRadius: hasDiscount
                ? "0 0 0.375rem 0"
                : "0 0 0.375rem 0.375rem",
              fontSize: "1.05rem",
              whiteSpace: "nowrap",
            }}
          >
            จองเลยตอนนี้
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default PromotionCard;
