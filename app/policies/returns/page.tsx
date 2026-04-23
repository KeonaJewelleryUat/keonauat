import CustomerPolicy from "../../components/CustomerPolicy/customerPolicy";

export default function OrderConfirmationPage() {
  return (
    <CustomerPolicy
      title="Returns and Exchanges"
      content={[
        " We accept returns only in the case of manufacturing defects.",
        "The defect must be reported within 24 hours of receiving the parcel.",
        "The docket number must be clearly visible when raising the concern",
        "No refunds will be issued; store credit will be provided for valid returns.",
      ]}
    />
  );
}
