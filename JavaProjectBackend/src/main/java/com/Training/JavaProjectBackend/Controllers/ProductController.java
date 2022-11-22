package com.Training.JavaProjectBackend.Controllers;

import com.Training.JavaProjectBackend.Models.Product;
import com.Training.JavaProjectBackend.Payload.Request.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService service;
    public ProductController(ProductService service) {
         this.service = service;
    }

//    @GetMapping("/{id}")
//    public Product productbyid(@PathVariable long id)
//    {
//        return service.productbyid(id);
//
//    }
    @GetMapping("/allProducts")
    public List<Product> getAllProducts(){
        return service.getAllProducts();
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") long id) {

        service.deleteById(id);
    }
    @PostMapping("/save")
    public void insert(@RequestBody Product data)
    {
        service.addProduct(data);
    }
    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable("category") String category){

        return service.findByCategory(category);

    }
    @PutMapping("update/{id}")
    public Product updateById(@PathVariable Long id,@RequestBody Product entry)

    {
        return service.updateById(id,entry);
    }


}
