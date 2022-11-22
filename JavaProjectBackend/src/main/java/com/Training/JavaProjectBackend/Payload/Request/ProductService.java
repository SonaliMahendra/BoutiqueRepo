package com.Training.JavaProjectBackend.Payload.Request;

import com.Training.JavaProjectBackend.Models.Product;
import com.Training.JavaProjectBackend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }
    public void addProduct(Product data)
    {
        repository.save(data);
    }

    public Product productById(long Id)
    {

        return repository.findById(Id).orElseThrow();
    }
    public void  deleteById(long id)
    {
        repository.deleteById(id);
    }
    public Product updateById(long id, Product updatebyid)
    {
        updatebyid.setId(id);
        return repository.save(updatebyid);

    }

    public List<Product> getProductList() {
        return repository.findAll();
    }

    public List<Product> findByCategory(String category) {
        return repository.findByCategory(category);
    }

    public List<Product> getAllProducts() {
        return repository.findAll();
    }
}
