import CustomerPolicy from "../../components/CustomerPolicy/customerPolicy";

export default function OrderConfirmationPage() {
  return (
    <CustomerPolicy
      title="Order Confirmation"
      content={[
        "All orders are first approved by checking product availability, as we operate on limited stock.",
        "Orders are confirmed strictly on a first-come, first-served basis and finalized only after payment is received.",
      ]}
    />
  );
}
