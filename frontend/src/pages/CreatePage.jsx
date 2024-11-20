import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../components/ui/button';
import { useProductStore } from '../stores/product';

const CreatePage = () => {
  const { toast } = useToast();
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });
  const { createProduct } = useProductStore();

  const handleSubmit = async () => {
    console.log(newProduct);
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      toast({
        title: 'Error!',
        description: `${message}`,
      });
    } else {
      toast({
        title: 'Success!',
        description: `${message}`,
      });
    }
    setNewProduct({ name: '', price: '', image: '', description });
  };

  return (
    <section id="create-page" className="flex justify-center w-full">
      <Card className="sm:max-w-[24rem] w-full">
        <CardHeader>
          <CardTitle>Create</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-2 mb-4">
            <Label htmlFor="name">name</Label>
            <Input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              id="name"
              placeholder="Name "
            />
          </div>
          <div className="grid w-full items-center gap-2 mb-4">
            <Label htmlFor="price">price</Label>
            <Input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              id="price"
              placeholder="Price "
            />
          </div>
          <div className="grid w-full items-center gap-2 mb-4">
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              id="description"
              placeholder="description "
            />
          </div>
          <div className="grid w-full items-center gap-2 mb-4">
            <Label htmlFor="image">image URL</Label>
            <Input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              id="image"
              placeholder="image"
            />
          </div>

          <Button onClick={handleSubmit} type="submit" className="w-full">
            Submit
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default CreatePage;
