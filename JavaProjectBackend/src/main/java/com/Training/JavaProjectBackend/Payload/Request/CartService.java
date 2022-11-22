package com.Training.JavaProjectBackend.Payload.Request;

import com.Training.JavaProjectBackend.Models.Cart;

import com.Training.JavaProjectBackend.Repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }


    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }

    public void deleteByIdCart(long cartId) {
        cartRepository.deleteById(cartId);

    }

    public void addToCart(Cart data) {
        cartRepository.save(data);
    }


    public Cart productById(long productId) {
        return cartRepository.findById(productId).orElseThrow();
    }
}
