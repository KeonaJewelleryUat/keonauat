import CustomerPolicy from "../../components/CustomerPolicy/customerPolicy";

export default function ShippingPage() {
  return (
    <CustomerPolicy
      title="Shipping & Delivery"
      content={[
        "Orders are shipped within 1 to 3 working days.",
        "Delivery typically takes 8 to 9 working days depending on your location.",
        "External factors such as weather, courier delays, or public holidays may cause slight delays.",
      ]}
    />
  );
}
