import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="m-10 rounded-xl border border-red-500 p-5">
      <h1 className="text-red-800">products page</h1>
      <Input placeholder="Bora codar" />
      <Button>FRC 7.9</Button>
    </div>
  );
};

export default ProductPage;
