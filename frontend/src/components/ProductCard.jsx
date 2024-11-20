import { useState } from 'react';
import { useProductStore } from '../stores/product';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const ProductCard = ({ product }) => {
  const { toast } = useToast();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isEditing, setIsEditing] = useState(false);

  const { deleteProduct, updateProduct } = useProductStore();

  const handleUpdate = async (productId, updatedProduct) => {
    console.log('askdjasldkj:', updateProduct);

    const { success, message } = await updateProduct(productId, updatedProduct);

    if (success) {
      toast({
        title: 'Success!',
        description: message,
      });
      setIsEditing(false);
    } else {
      toast({
        title: 'Error!',
        description: message,
      });
    }
  };

  const handleDelete = async (productId) => {
    const { success, message } = await deleteProduct(productId);

    if (success) {
      toast({
        title: 'Success!',
        description: message,
      });
    } else {
      toast({
        title: 'Error!',
        description: message,
      });
    }
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <img
            src={product.image ? product.image : 'https://picsum.photos/200'}
            alt={product.name}
            className="w-full aspect-video mb-4 rounded border shadow"
          />
          <CardTitle>
            {product.name} <br />
            <small className="text-neutral-700">${product.price}</small>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
          <div className="flex justify-end gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Edit Product</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      Edit {product.name}
                    </h4>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="name" className="uppercase">
                        name
                      </Label>
                      <Input
                        id="name"
                        defaultValue={product.name}
                        className="col-span-2 h-8"
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="price" className="uppercase">
                        price
                      </Label>
                      <Input
                        id="price"
                        defaultValue={product.price}
                        className="col-span-2 h-8"
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="description" className="uppercase">
                        description
                      </Label>
                      <Input
                        id="description"
                        defaultValue={product.description}
                        className="col-span-2 h-8"
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="imageURL" className="uppercase">
                        Image URL
                      </Label>
                      <Input
                        id="imageURL"
                        defaultValue={product.image}
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updatedProduct,
                            image: e.target.value,
                          })
                        }
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button
                      onClick={() => handleUpdate(product._id, updatedProduct)}
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Button
              onClick={() => handleDelete(product._id)}
              className="size-8"
            >
              <FaRegTrashAlt className="size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
