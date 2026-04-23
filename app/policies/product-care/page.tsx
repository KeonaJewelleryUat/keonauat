import CustomerPolicy from "../../components/CustomerPolicy/customerPolicy";

export default function ProductCarePage() {
  return (
    <CustomerPolicy
      title="Product Care and Responsibility"
      content={[
        "While all our jewellery is anti-tarnish, water-resistant, and hypoallergenic, every piece requires individual care.",
        "No warranty or guarantee is provided.",
        "If products are used incorrectly or not maintained properly, Keona is not responsible for any damage.",
        "We appreciate your understanding and support for our small business!",
      ]}
    />
  );
}
