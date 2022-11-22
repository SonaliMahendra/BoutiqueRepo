package com.Training.JavaProjectBackend.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cart {

    @Id
    @SequenceGenerator(name="product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "product_sequence"
    )
    private long cartId;
    @Column(nullable = false)
    private int productId;
    @Lob
    @Column(nullable = false)
    private String image;
    private String productName;
    private int price;
    private int quantity;

}
