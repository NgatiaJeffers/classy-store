import { Product } from "@/types";

import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/products-list";



const HomePage = async () => {
  const billboard = await getBillboard("6554cde8dab85d0b80592b2d");
  const products: Product[] = await getProducts({ isFeatured: true });

  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage;
