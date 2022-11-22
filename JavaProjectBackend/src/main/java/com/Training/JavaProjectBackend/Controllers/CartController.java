package com.Training.JavaProjectBackend.Controllers;

import com.Training.JavaProjectBackend.Models.Cart;

import com.Training.JavaProjectBackend.Payload.Request.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/allCartItems")
    public List<Cart> getAllCartItems(){
        return cartService.getAllCartItems();
    }

    @DeleteMapping("/deleteByIdCart/{id}")
    public void deleteById(@PathVariable("id") long id) {

        cartService.deleteByIdCart(id);
    }
    @PostMapping("/saveCart")
    public void insert(@RequestBody Cart data)
    {
        cartService.addToCart(data);
    }

      @GetMapping("getProductById/{productId}")
    public Cart productById(@PathVariable long productId)
    {
      return cartService.productById(productId);

   }


}
