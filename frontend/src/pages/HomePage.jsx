import { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { useProductStore } from '../stores/product';
import ProductCard from '../components/ProductCard';
import Logo from '../components/Logo';

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  console.log('products', products);

  return (
    <section id="HomePage">
      <Card className="w-full text-center max-w-2xl mx-auto mb-10">
        <CardHeader>
          <CardTitle>
            Welcome to <Logo />{' '}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            TokoHape is a simple e-commerce platform where you can sell your
            products. Just create an account, add your products, and start
            selling!
          </p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
