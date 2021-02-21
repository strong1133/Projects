package com.spring.my_select_shop.controller;

import com.spring.my_select_shop.domain.Product;
import com.spring.my_select_shop.domain.ProductMypriceRequestDto;
import com.spring.my_select_shop.domain.ProductRepository;
import com.spring.my_select_shop.domain.ProductRequestDto;
import com.spring.my_select_shop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductRestController {
    private final ProductRepository productRepository;
    private final ProductService productService;

    @GetMapping("/api/products")
    public List<Product> getProduct(){
        return productRepository.findAll();
    }

    @PostMapping("/api/products")
    public Product createProduct(@RequestBody ProductRequestDto productRequestDto){
        Product product = new Product(productRequestDto);
        return productRepository.save(product);
    }

    @PutMapping("/api/products/{id}")
    public Long updateProduct (@PathVariable Long id, @RequestBody ProductMypriceRequestDto productMypriceRequestDto){
        return productService.update(id, productMypriceRequestDto);
    }

}
